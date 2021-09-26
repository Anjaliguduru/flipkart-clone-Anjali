import Product from "./Product"

import h1 from "../imgs/h1.jpeg"
import h2 from "../imgs/h2.jpeg"
import h3 from "../imgs/h3.jpeg"
import h4 from "../imgs/h4.jpeg"
import h5 from "../imgs/h5.jpeg"
import h6 from "../imgs/h6.jpeg"
import h7 from "../imgs/h7.jpeg"
import h8 from "../imgs/h8.jpeg"



export default function Watches(){
    return(
        <div>
           <div className="dress-main">
           <Product id="heads1" prdName="Medium 30 L Laptop Backpack" img={h1} price="2000" review="4.5"  />
            <Product id="heads2" prdName="Medium 30 L Laptop wackpack" img={h2} price="2000" review="4.5"  />
            <Product id="heads3" prdName="Medium 30 L Laptop wackpack" img={h3} price="2000" review="4.5"  />
            <Product id="heads6" prdName="Medium 30 L Laptop wackpack" img={h5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="heads4" prdName="Medium 30 L Laptop wackpack" img={h4} price="2000" review="4.5"  />
            <Product id="heads5" prdName="Medium 30 L Laptop wackpack" img={h6} price="2000" review="4.5"  />
            <Product id="heads7" prdName="Medium 30 L Laptop wackpack" img={h7} price="2000" review="4.5"  />
            <Product id="heads8" prdName="Medium 30 L Laptop wackpack" img={h8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}