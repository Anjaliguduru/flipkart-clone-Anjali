import Product from "./Product"

import m1 from "../imgs/m1.jpeg"
import m2 from "../imgs/m2.jpeg"
import m3 from "../imgs/m3.jpeg"
import m4 from "../imgs/m4.jpeg"
import m5 from "../imgs/m5.jpeg"
import m6 from "../imgs/m6.jpeg"
import m7 from "../imgs/m7.jpeg"
import m8 from "../imgs/c8.jpeg"



export default function Mobile(){
    return(
        <div>
           <div className="dress-main">
           <Product id="mob1" prdName="Medium 30 L Laptop Backpack" img={m1} price="2000" review="4.5"  />
            <Product id="mob2" prdName="Medium 30 L Laptop wackpack" img={m2} price="2000" review="4.5"  />
            <Product id="mob3" prdName="Medium 30 L Laptop wackpack" img={m3} price="2000" review="4.5"  />
            <Product id="mob6" prdName="Medium 30 L Laptop wackpack" img={m5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="mob4" prdName="Medium 30 L Laptop wackpack" img={m4} price="2000" review="4.5"  />
            <Product id="mob5" prdName="Medium 30 L Laptop wackpack" img={m6} price="2000" review="4.5"  />
            <Product id="mob7" prdName="Medium 30 L Laptop wackpack" img={m7} price="2000" review="4.5"  />
            <Product id="mob8" prdName="Medium 30 L Laptop wackpack" img={m8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}