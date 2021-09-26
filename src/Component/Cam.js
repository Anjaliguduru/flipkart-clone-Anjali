import Product from "./Product"
import "./Dress.css"

import wc1 from "../imgs/wc1.jpeg"
import wc2 from "../imgs/wc2.jpeg"
import wc3 from "../imgs/wc3.jpeg"
import wc4 from "../imgs/wc4.jpeg"
import wc5 from "../imgs/wc5.jpeg"
import wc6 from "../imgs/wc6.jpeg"
import wc7 from "../imgs/wc7.jpeg"
import wc8 from "../imgs/wc8.jpeg"



export default function Watcwces(){
    return(
        <div>
           <div className="dress-main">
           <Product id="webcams1" prdName="Medium 30 L Laptop Backpack" img={wc1} price="2000" review="4.5"  />
            <Product id="webcams2" prdName="Medium 30 L Laptop wackpack" img={wc2} price="2000" review="4.5"  />
            <Product id="webcams3" prdName="Medium 30 L Laptop wackpack" img={wc3} price="2000" review="4.5"  />
            <Product id="webcams6" prdName="Medium 30 L Laptop wackpack" img={wc5} price="2000" review="4.5"  />
           </div>
            <div className="dress-main">
            <Product id="webcams4" prdName="Medium 30 L Laptop wackpack" img={wc4} price="2000" review="4.5"  />
            <Product id="webcams5" prdName="Medium 30 L Laptop wackpack" img={wc6} price="2000" review="4.5"  />
            <Product id="webcams7" prdName="Medium 30 L Laptop wackpack" img={wc7} price="2000" review="4.5"  />
            <Product id="webcams8" prdName="Medium 30 L Laptop wackpack" img={wc8} price="2000" review="4.5"  />
            </div>
            

        </div>
    )
}