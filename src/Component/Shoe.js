import Product from "./Product"
import "./Dress.css"

import s1 from "../imgs/s1.jpeg"
import s2 from "../imgs/s2.jpeg"
import s3 from "../imgs/s3.jpeg"
import s4 from "../imgs/s4.jpeg"
import s5 from "../imgs/s5.jpeg"
import s6 from "../imgs/s6.jpeg"
import s7 from "../imgs/s7.jpeg"
import s8 from "../imgs/s8.jpeg"



export default function Lapbag(){
    return(
        <div >
           <div className="dress-main">
           <Product id="shoe1" prdName="Medium 30 L Laptop dackpack" img={s1} price="2000" review="4.5"  />
            <Product id="shoe2" prdName="Medium 30 L Laptop dackpack" img={s2} price="2000" review="4.5"  />
            <Product id="shoe3" prdName="Medium 30 L Laptop dackpack" img={s3} price="2000" review="4.5"  />
            <Product id="shoe6" prdName="Medium 30 L Laptop dackpack" img={s5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="shoe4" prdName="Medium 30 L Laptop dackpack" img={s4} price="2000" review="4.5"  />
            <Product id="shoe5" prdName="Medium 30 L Laptop dackpack" img={s6} price="2000" review="4.5"  />
            <Product id="shoe7" prdName="Medium 30 L Laptop dackpack" img={s7} price="2000" review="4.5"  />
            <Product id="shoe8" prdName="Medium 30 L Laptop dackpack" img={s8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}