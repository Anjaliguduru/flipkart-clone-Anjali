import Product from "./Product"

import c1 from "../imgs/c1.jpeg"
import c2 from "../imgs/c2.jpeg"
import c3 from "../imgs/c3.jpeg"
import c4 from "../imgs/c4.jpeg"
import c5 from "../imgs/c5.jpeg"
import c6 from "../imgs/c6.jpeg"
import c7 from "../imgs/c7.jpeg"
import c8 from "../imgs/c8.jpeg"



export default function Chains(){
    return(
        <div>
           <div className="dress-main">
           <Product id="cam1" prdName="Medium 30 L Laptop Backpack" img={c1} price="2000" review="4.5"  />
            <Product id="cam2" prdName="Medium 30 L Laptop wackpack" img={c2} price="2000" review="4.5"  />
            <Product id="cam3" prdName="Medium 30 L Laptop wackpack" img={c3} price="2000" review="4.5"  />
            <Product id="cam6" prdName="Medium 30 L Laptop wackpack" img={c5} price="2000" review="4.5"  />
           </div>
           <div className="dress-main">
           <Product id="cam4" prdName="Medium 30 L Laptop wackpack" img={c4} price="2000" review="4.5"  />
            <Product id="cam5" prdName="Medium 30 L Laptop wackpack" img={c6} price="2000" review="4.5"  />
            <Product id="cam7" prdName="Medium 30 L Laptop wackpack" img={c7} price="2000" review="4.5"  />
            <Product id="cam8" prdName="Medium 30 L Laptop wackpack" img={c8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}