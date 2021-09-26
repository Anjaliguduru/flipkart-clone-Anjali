import Product from "./Product"
import "./Dress.css"

import b1 from "../imgs/b1.jpeg"
import b2 from "../imgs/b2.jpeg"
import b3 from "../imgs/b3.jpeg"
import b4 from "../imgs/b4.jpeg"
import b5 from "../imgs/b5.jpeg"
import b6 from "../imgs/b6.jpeg"
import b7 from "../imgs/b7.jpeg"
import b8 from "../imgs/b8.jpeg"



export default function Bags(){
    return(
        <div>
           <div className="dress-main">
           <Product id="bag1" prdName="Medium 30 L Laptop Backpack" img={b1} price="2000" review="4.5"  />
            <Product id="bag2" prdName="Medium 30 L Laptop Backpack" img={b2} price="2000" review="4.5"  />
            <Product id="bag3" prdName="Medium 30 L Laptop Backpack" img={b3} price="2000" review="4.5"  />
            <Product id="bag6" prdName="Medium 30 L Laptop Backpack" img={b5} price="2000" review="4.5"  />
           </div>
          <div className="dress-main">
          <Product id="bag4" prdName="Medium 30 L Laptop Backpack" img={b4} price="2000" review="4.5"  />
            <Product id="bag5" prdName="Medium 30 L Laptop Backpack" img={b6} price="2000" review="4.5"  />
            <Product id="bag7" prdName="Medium 30 L Laptop Backpack" img={b7} price="2000" review="4.5"  />
            <Product id="bag8" prdName="Medium 30 L Laptop Backpack" img={b8} price="2000" review="4.5"  />
          </div>
            

        </div>
    )
}