import Product from "./Product"
import "./Dress.css"

import d1 from "../imgs/d1.jpeg"
import d2 from "../imgs/d2.jpeg"
import d3 from "../imgs/d3.jpeg"
import d4 from "../imgs/d4.jpeg"
import d5 from "../imgs/d5.jpeg"
import d6 from "../imgs/d6.jpeg"
import d7 from "../imgs/d7.jpeg"
import d8 from "../imgs/d8.jpeg"



export default function dags(){
    return(
        <div >
           <div className="dress-main">
           <Product id="dag1" prdName="Medium 30 L Laptop dackpack" img={d1} price="2000" review="4.5"  />
            <Product id="dag2" prdName="Medium 30 L Laptop dackpack" img={d2} price="2000" review="4.5"  />
            <Product id="dag3" prdName="Medium 30 L Laptop dackpack" img={d3} price="2000" review="4.5"  />
            <Product id="dag6" prdName="Medium 30 L Laptop dackpack" img={d5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="dag4" prdName="Medium 30 L Laptop dackpack" img={d4} price="2000" review="4.5"  />
            <Product id="dag5" prdName="Medium 30 L Laptop dackpack" img={d6} price="2000" review="4.5"  />
            <Product id="dag7" prdName="Medium 30 L Laptop dackpack" img={d7} price="2000" review="4.5"  />
            <Product id="dag8" prdName="Medium 30 L Laptop dackpack" img={d8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}