import React from 'react'
import HeadphonesBanner from '../components/Headphones/HeadphonesBanner'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FilterSidebar from '../components/filterSidebar/FilterSidebar'
import ProductCard from '../components/productCard/ProductCard'

function HeadphonePage() {
  return (
    <>
      <HeadphonesBanner />
      <Breadcrumb />
      <div className='flex gap-2.5'>
        <FilterSidebar />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default HeadphonePage