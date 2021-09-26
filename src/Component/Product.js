import "./Product.css"
import Star from "@material-ui/icons/Star"
import assure from "../imgs/assured.png"
import HeartIcon from '@material-ui/icons/Favorite'
import { useState } from "react"
import { useDispatch } from "react-redux"


export default function Product1({ id, prdName, img, price, review }) {

    let [glow, setglow] = useState(false);
    let dispatch = useDispatch();


    return (
        <div>





            <div className="stdiv">

                <div className="prd">
                    <div className="prd__img">
                        <img className="img1" src={img} alt="img95" />
                    </div>
                    <div>
                        <p><strong>{prdName}</strong></p>

                    </div>
                    {/* <span><strong>{prdName}</strong></span> */}
                    <div className="prd__star">
                        <span className="prd__review"><strong>{review} <Star className="star" /></strong></span>
                        <span className=" fassured">(1524) <img src={assure} alt="img14" /></span>
                        {/* <span className="fassured"><img src={assure} /></span> */}
                    </div>
                    <div className="bottom_title">
                        <p><strong>₹{price}</strong>  <del>₹3,399</del>    <b>55% off</b></p>
                        <p className="size">Sizes :S,M,L,XL,XXL</p>
                        <span className="prd_cart"><button className='prd4_btn' onClick={() => dispatch({ type: "ADD_TO_CART", item: { id: id, img: img, prdName: prdName, review: review, price: price } })}>Add to Cart</button></span>
                    </div>

                </div>
                <div>
                    <div onClick={glow ? () => setglow(false) : () => setglow(true)} ><HeartIcon className={glow ? "HeartIcon_1_on" : "HeartIcon_1_off"} onClick={() => dispatch({ type: "REMOVE_FROM_WISH", id: id })} /></div>
                    <div onClick={glow ? () => setglow(false) : () => setglow(true)}><HeartIcon className={glow ? "HeartIcon_2_on" : "HeartIcon_2_off"} onClick={() => dispatch({ type: "ADD_TO_WISH", item: { id: id, img: img, prdName: prdName, review: review, price: price } })} /></div>
                </div>
            </div>
        </div>
    )



}