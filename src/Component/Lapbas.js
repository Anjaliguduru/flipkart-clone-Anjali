import Product from "./Product"
import "./Dress.css"

import lb1 from "../imgs/lb1.jpeg"
import lb2 from "../imgs/lb2.jpeg"
import lb3 from "../imgs/lb3.jpeg"
import lb4 from "../imgs/lb4.jpeg"
import lb5 from "../imgs/lb5.jpeg"
import lb6 from "../imgs/lb6.jpeg"
import lb7 from "../imgs/lb7.jpeg"
import lb8 from "../imgs/lb8.jpeg"



export default function Lapbag(){
    return(
        <div >
           <div className="dress-main">
           <Product id="lapbag1" prdName="Medium 30 L Laptop dackpack" img={lb1} price="2000" review="4.5"  />
            <Product id="lapbag2" prdName="Medium 30 L Laptop dackpack" img={lb2} price="2000" review="4.5"  />
            <Product id="lapbag3" prdName="Medium 30 L Laptop dackpack" img={lb3} price="2000" review="4.5"  />
            <Product id="lapbag6" prdName="Medium 30 L Laptop dackpack" img={lb5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="lapbag4" prdName="Medium 30 L Laptop dackpack" img={lb4} price="2000" review="4.5"  />
            <Product id="lapbag5" prdName="Medium 30 L Laptop dackpack" img={lb6} price="2000" review="4.5"  />
            <Product id="lapbag7" prdName="Medium 30 L Laptop dackpack" img={lb7} price="2000" review="4.5"  />
            <Product id="lapbag8" prdName="Medium 30 L Laptop dackpack" img={lb8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}