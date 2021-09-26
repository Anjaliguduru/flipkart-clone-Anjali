import Product from "./Product"
import "./Dress.css"

import m1 from "../imgs/m1.jpeg"
import m2 from "../imgs/m2.jpeg"
import m3 from "../imgs/m3.jpeg"
import m4 from "../imgs/m4.jpeg"
import m5 from "../imgs/m5.jpeg"
import m6 from "../imgs/m6.jpeg"
import m7 from "../imgs/m7.jpeg"
import m8 from "../imgs/m8.jpeg"



export default function Lapbag(){
    return(
        <div >
           <div className="dress-main">
           <Product id="make1" prdName="Medium 30 L Laptop dackpack" img={m1} price="2000" review="4.5"  />
            <Product id="make2" prdName="Medium 30 L Laptop dackpack" img={m2} price="2000" review="4.5"  />
            <Product id="make3" prdName="Medium 30 L Laptop dackpack" img={m3} price="2000" review="4.5"  />
            <Product id="make6" prdName="Medium 30 L Laptop dackpack" img={m5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="make4" prdName="Medium 30 L Laptop dackpack" img={m4} price="2000" review="4.5"  />
            <Product id="make5" prdName="Medium 30 L Laptop dackpack" img={m6} price="2000" review="4.5"  />
            <Product id="make7" prdName="Medium 30 L Laptop dackpack" img={m7} price="2000" review="4.5"  />
            <Product id="make8" prdName="Medium 30 L Laptop dackpack" img={m8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}