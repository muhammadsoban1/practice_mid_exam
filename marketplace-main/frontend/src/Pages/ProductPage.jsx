import React from 'react'
import ProductDetailPage from '../components/ProductDetailPage'
import DescriptionTable from '../components/ProductDesc'
import RelatedModels from '../components/RelatedProduct'
const ProductPage = () => {
  return (
<div className='pt-9'>
  
    <ProductDetailPage/>
    <div className='flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-2 mt-10 m-auto gap-40'>
    <RelatedModels/>
    <DescriptionTable/>
   
    </div>
</div>
)
}

export default ProductPage