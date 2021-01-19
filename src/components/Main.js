import React, {useState} from 'react'

import Form from './Form'
import ProductCatalog from './ProductCatalog'


const Main = () => {

    const [products, setProducts] = useState([])

    return (
        <main  className ="container mt-5 ">
          
  <div className = "row">
                <div className = "col-5">
                <Form products={products} setProducts={setProducts}/>
                </div>

                <div className = "col-7 ps-3 ">
                <ProductCatalog products={products} setProducts={setProducts} />
                </div>

            </div>
        </main>
    )
}

export default Main
