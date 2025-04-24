import React from 'react'
import GroceryCategories from './GroceryCategories'
import VendorListing from './VendorListing'
import MinutosLanding from '../HomePage/Home'

const MainLayout = () => {
  return (
    <div>
      <MinutosLanding/>
      <VendorListing/>
      <GroceryCategories/>
    </div>
  )
}

export default MainLayout
