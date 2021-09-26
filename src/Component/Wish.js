// import React,{useState} from 'react'
import './Cart.css'
import Image2 from '../imgs/Cart.png'
import Location from '@material-ui/icons/PinDrop'
// import Product from "../Components/Product"
// import prd1 from "../images/furniture1.jpeg"
import { useSelector } from 'react-redux'
import WishProd from "../Component/Wshipprod"
// import Fassure from "../images/fassured.png"
import { Link } from 'react-router-dom'

export default function Cart() {

    // let [enableCart , setEnableCart] = useState(false);
    let wish = useSelector(state => state.wish)
    let Checkoutproductdetails = wish.map(item => <WishProd id={item.id} prdName={item.prdName} price={item.price} review={item.review} img={item.img} />)
    return (
        <div className='cart'>
            <div className={wish.length > 0 ? "cart_masterOn" : "cartmaster_Off"}>
                <div className='cart_section_1'>
                    <div className='cart_section1_header'>
                        <div className='cart__count'>
                            My Cart ({wish.length})
                        </div>
                        <div className='cart__address'>
                            <span><Location /> Deliver to</span>
                            <select>
                                <option>Mahabubnagar - 509001</option>
                                <option>Hyderabad - 500008</option>
                            </select>
                        </div>
                    </div>
                    <div className='cart_section1_body'>
                        {Checkoutproductdetails}
                    </div>
                    <div className='cart_place_order'>
                        <button>PLACE ORDER</button>
                    </div>
                </div>
                <div className='cart_section_2'>
                    <div className='cart_price_details'>
                        PRICE DETAILS
                    </div>
                    <div className='cart_price_info'>
                        <p><span>Price ( item)</span><span>10000</span></p>
                        <p><span>Delivery Charges</span><span>$2</span></p>
                    </div>
                    <div className='cart_total_amount'>
                        <p><span>Total Amount</span><span>10000</span></p>
                    </div>
                </div>
            </div>
            <div className={wish.length > 0 ? "empty_cartOff" : "emptycart_On"}>
                <div className='cart__name'>
                    <p>My Cart</p>
                </div>
                <div className='empty_cart_details'>
                    <img src={Image2} alt="img14" />
                    <p>Your Cart is empty!</p>
                    <p>Add items to it now.</p>
                    <Link to='/fashion'><button>Login</button></Link>
                </div>
            </div>
        </div>
    )
}