const OrderActions = ({ cost, onReorder }) => (
    <div className="order-actions bg-white rounded-lg shadow p-4 mt-2 flex justify-between items-center">
      <span className="font-medium">{cost}</span>
      <button 
        onClick={onReorder}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Order Again
      </button>
    </div>
  );
  export default OrderActions;