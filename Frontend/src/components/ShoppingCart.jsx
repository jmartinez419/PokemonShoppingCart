import { useState } from 'react'
import './ShoppingCart.css'
import { Footer } from './cart/Footer'
import { MainCart } from './cart/MainCart'





export default function ShoppingCart(){

    const [cart, setCart] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)
    return (
        <>   
        { isEmpty ? 
        
        <div> 
            <MainCart/>
            <Footer/>
        </div> :
        
        <div> 
            <Footer/>
        </div>}
        </>
    )
}