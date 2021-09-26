import Product from "./Product"
import "./Dress.css"

import pp1 from "../imgs/pp1.jpeg"
import pp2 from "../imgs/pp2.jpeg"
import pp3 from "../imgs/pp3.jpeg"
import pp4 from "../imgs/pp4.jpeg"
import pp5 from "../imgs/pp5.jpeg"
import pp6 from "../imgs/pp6.jpeg"
import pp7 from "../imgs/pp7.jpeg"
import pp8 from "../imgs/pp8.jpeg"



export default function Lapbag(){
    return(
        <div >
           <div className="dress-main">
           <Product id="pp1" prdName="Medium 30 L Laptop dackpack" img={pp1} price="2000" review="4.5"  />
            <Product id="pp2" prdName="Medium 30 L Laptop dackpack" img={pp2} price="2000" review="4.5"  />
            <Product id="pp3" prdName="Medium 30 L Laptop dackpack" img={pp3} price="2000" review="4.5"  />
            <Product id="pp6" prdName="Medium 30 L Laptop dackpack" img={pp5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="pp4" prdName="Medium 30 L Laptop dackpack" img={pp4} price="2000" review="4.5"  />
            <Product id="pp5" prdName="Medium 30 L Laptop dackpack" img={pp6} price="2000" review="4.5"  />
            <Product id="pp7" prdName="Medium 30 L Laptop dackpack" img={pp7} price="2000" review="4.5"  />
            <Product id="pp8" prdName="Medium 30 L Laptop dackpack" img={pp8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}