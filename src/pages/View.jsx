import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'




function View() {


    const[product,setProduct]=useState({})
    console.log(product,"products in view");
    
    const {id}=useParams()
    // const dispatch=useDispatch()
  
    useEffect(() => {
        
        if (localStorage.getItem("allProducts")) {
            
            const allProducts=JSON.parse(localStorage.getItem("allProducts"))

            setProduct(allProducts.find(item=>item.id==id))

        }

    }, [])


    
  return (
    <>
        <Header/>
        <div className='row container-fluid mt-5 pt-5'>
            <div className="col-lg-6 p-5">
                <img className='img-fluid w-50' src={product?.image} alt="" />
            </div>
            <div className="col-lg-6 p-5">
                <h3 className='text-primary fw-bold'>{product?.title}</h3>
                <h3 className='text-warning'>${product?.price}</h3>
                <h4 className='text-secondary'>Rating: {product?.rating?.rate}</h4>
                <p>{product?.description}</p>
            </div>
        </div>
    </>
  )
}

export default View