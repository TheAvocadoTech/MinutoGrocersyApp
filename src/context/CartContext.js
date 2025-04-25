import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getCart, addToCart, removeFromCart, updateCartItem } from '../utils/api';
import useAuth from '../hooks/useAuth'; // Import useAuth hook

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, items: action.payload, loading: false };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    loading: false,
    error: null,
  });
  
  // Use the useAuth hook to get authentication state
  const { token } = useAuth();
  const [localCart, setLocalCart] = useLocalStorage('cart', []);

  useEffect(() => {
    const fetchCart = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        if (token) {
          const { data } = await getCart();
          dispatch({ type: 'SET_CART', payload: data.items });
        } else {
          dispatch({ type: 'SET_CART', payload: localCart || [] });
        }
      } catch (err) {
        dispatch({
          type: 'SET_ERROR',
          payload: err.response?.data?.message || 'Failed to load cart',
        });
      }
    };

    fetchCart();
  }, [token, localCart]);

  const addItem = async (product, quantity = 1) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      if (token) {
        const { data } = await addToCart({ productId: product.id, quantity });
        dispatch({ type: 'ADD_ITEM', payload: data });
      } else {
        const newItem = { ...product, quantity, id: `${product.id}-${Date.now()}` };
        const updatedCart = [...state.items, newItem];
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setLocalCart(updatedCart);
      }
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err.response?.data?.message || 'Failed to add item',
      });
      throw err;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const removeItem = async (itemId) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      if (token) {
        await removeFromCart(itemId);
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
      } else {
        const updatedCart = state.items.filter(item => item.id !== itemId);
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
        setLocalCart(updatedCart);
      }
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err.response?.data?.message || 'Failed to remove item',
      });
      throw err;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updateItemQuantity = async (itemId, quantity) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      if (token) {
        const { data } = await updateCartItem(itemId, { quantity });
        dispatch({ type: 'UPDATE_ITEM', payload: data });
      } else {
        const updatedCart = state.items.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        );
        dispatch({
          type: 'UPDATE_ITEM',
          payload: { ...state.items.find(item => item.id === itemId), quantity },
        });
        setLocalCart(updatedCart);
      }
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err.response?.data?.message || 'Failed to update item',
      });
      throw err;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    setLocalCart([]);
  };

  const getCartTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    ...state,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    getCartTotal,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};