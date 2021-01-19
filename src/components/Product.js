import React from 'react'

const Product = ({product,products, setProducts}) => {

    const inStockHandler = () => {
        setProducts(products.map(item => {
            if (item.id === product.id){
                return {
                    ...item, inStock: !item.inStock
                }
            }
            return item 
        }))
    }

    const deleteHandler = () => {
        setProducts(products.filter(item => item.id !== product.id)) 
    }

    return (
        <div className="mb-2 p-3 pt-0">
            <div className="d-flex justify-content-between align-items-center">

                <div className={`${product.inStock ? 'out-of-stock': 'in-stock'}`}>

                    <div className="name">{product.name}</div>
                    <div className="description">{product.description}</div>
                    
                </div>

                <div>

                    <i onClick={inStockHandler} className={ `fas fa-box cp ${ product.inStock ? 'out-of-stock': 'in-stock'}` }></i>
                    <i onClick={deleteHandler} className="fas fa-trash cp"></i>

                </div>

            </div>           

        </div>
    )
}

export default Product
