import React, {useState} from 'react'

import uuid from 'react-uuid'


const Form = ({products,setProducts}) => {
    

const [name,setName] = useState('')
const [description,setDescription] = useState('')
const [disableState,setDisableState] = useState(true)


const nameHandler = (e) => {

    e.target.value.length > 2 ? setDisableState(false) : setDisableState(true)

    setName(e.target.value)

}

const descriptionHandler = (e) => {
    setDescription(e.target.value)
}

const submitHandler = (e) => {
    e.preventDefault()
    setProducts([...products, {name: name, description: description, inStock: true, id: uuid()}])
    setName('')
    setDescription('')
    setDisableState(true)
}

    return (
        <form>

           <div className="mb-3">
            <input onChange={nameHandler} type="text" className="form-control"  placeholder="Product Name"/>
           </div>

           <div className="mb-4">
            <textarea onChange={descriptionHandler} className="form-control" placeholder="Product Description" rows="5"></textarea>
           </div>

           <div className="mb-3">
            <button onClick={submitHandler} disabled={disableState} className=" btn btn-secondary w-100 p-3" >Add Product </button>
           </div>


        </form>
    )
}

export default Form
