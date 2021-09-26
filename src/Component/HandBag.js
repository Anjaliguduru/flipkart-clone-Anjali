import Product from "./Product"
import "./Dress.css"

import hb1 from "../imgs/hb1.jpeg"
import hb2 from "../imgs/hb2.jpeg"
import hb3 from "../imgs/hb3.jpeg"
import hb4 from "../imgs/hb4.jpeg"
import hb5 from "../imgs/hb5.jpeg"
import hb6 from "../imgs/hb6.jpeg"
import hb7 from "../imgs/hb7.jpeg"
import hb8 from "../imgs/hb8.jpeg"



export default function Lapbag(){
    return(
        <div >
           <div className="dress-main">
           <Product id="hb1" prdName="Medium 30 L Laptop dackpack" img={hb1} price="2000" review="4.5"  />
            <Product id="hb2" prdName="Medium 30 L Laptop dackpack" img={hb2} price="2000" review="4.5"  />
            <Product id="hb3" prdName="Medium 30 L Laptop dackpack" img={hb3} price="2000" review="4.5"  />
            <Product id="hb6" prdName="Medium 30 L Laptop dackpack" img={hb5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="hb4" prdName="Medium 30 L Laptop dackpack" img={hb4} price="2000" review="4.5"  />
            <Product id="hb5" prdName="Medium 30 L Laptop dackpack" img={hb6} price="2000" review="4.5"  />
            <Product id="hb7" prdName="Medium 30 L Laptop dackpack" img={hb7} price="2000" review="4.5"  />
            <Product id="hb8" prdName="Medium 30 L Laptop dackpack" img={hb8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}