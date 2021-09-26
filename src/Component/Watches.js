import Product from "./Product"

import w1 from "../imgs/w1.jpeg"
import w2 from "../imgs/w2.jpeg"
import w3 from "../imgs/w3.jpeg"
import w4 from "../imgs/w4.jpeg"
import w5 from "../imgs/w5.jpeg"
import w6 from "../imgs/w6.jpeg"
import w7 from "../imgs/w7.jpeg"
import w8 from "../imgs/w8.jpeg"



export default function Watches(){
    return(
        <div>
           <div className="dress-main">
           <Product id="wat1" prdName="Medium 30 L Laptop Backpack" img={w1} price="2000" review="4.5"  />
            <Product id="wat2" prdName="Medium 30 L Laptop wackpack" img={w2} price="2000" review="4.5"  />
            <Product id="wat3" prdName="Medium 30 L Laptop wackpack" img={w3} price="2000" review="4.5"  />
            <Product id="wat6" prdName="Medium 30 L Laptop wackpack" img={w5} price="2000" review="4.5"  />
           </div>
          <div className="dress-main">
          <Product id="wat4" prdName="Medium 30 L Laptop wackpack" img={w4} price="2000" review="4.5"  />
            <Product id="wat5" prdName="Medium 30 L Laptop wackpack" img={w6} price="2000" review="4.5"  />
            <Product id="wat7" prdName="Medium 30 L Laptop wackpack" img={w7} price="2000" review="4.5"  />
            <Product id="wat8" prdName="Medium 30 L Laptop wackpack" img={w8} price="2000" review="4.5"  />
          </div>
            

        </div>
    )
}