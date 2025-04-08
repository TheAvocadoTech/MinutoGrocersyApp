import React from 'react'
import GroceryCategories from './GroceryCategories'
import VendorListing from './VendorListing'

const MainLayout = () => {
  return (
    <div>
      <VendorListing/>
      <GroceryCategories/>
    </div>
  )
}

export default MainLayout
