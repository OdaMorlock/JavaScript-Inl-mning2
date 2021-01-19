import React from 'react'

import Product from './Product'

const ProductCatalog = ({ products, setProducts }) => {

    if (products.length === 0) {
        return (
            <div id="product-catalog" className=" mb-5 text-center">
                No Products found. 
            </div>
        )
    }



    return (
        <div id="product-catalog" className=" mb-5">

            {
                products.map(product =>(
                  <Product key={product.id} product={product} products={products} setProducts={setProducts} />  
                ))
            }

        </div>
    )

}

export default ProductCatalog
