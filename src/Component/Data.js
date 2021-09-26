import Product from "./Product"

import dc1 from "../imgs/dc1.jpeg"
import dc2 from "../imgs/dc2.jpeg"
import dc3 from "../imgs/dc3.jpeg"
import dc4 from "../imgs/dc4.jpeg"
import dc5 from "../imgs/dc5.jpeg"
import dc6 from "../imgs/dc6.jpeg"
import dc7 from "../imgs/dc7.jpeg"
import dc8 from "../imgs/dc8.jpeg"



export default function Data(){
    return(
        <div>
          <div className="dress-main">
          <Product id="dcag1" prdName="Medium 30 L Laptop dcackpack" img={dc1} price="2000" review="4.5"  />
            <Product id="dcag2" prdName="Medium 30 L Laptop dcackpack" img={dc2} price="2000" review="4.5"  />
            <Product id="dcag3" prdName="Medium 30 L Laptop dcackpack" img={dc3} price="2000" review="4.5"  />
            <Product id="dcag6" prdName="Medium 30 L Laptop dcackpack" img={dc5} price="2000" review="4.5"  />
          </div>
          <div className="dress-main">
          <Product id="dcag4" prdName="Medium 30 L Laptop dcackpack" img={dc4} price="2000" review="4.5"  />
            <Product id="dcag5" prdName="Medium 30 L Laptop dcackpack" img={dc6} price="2000" review="4.5"  />
            <Product id="dcag7" prdName="Medium 30 L Laptop dcackpack" img={dc7} price="2000" review="4.5"  />
            <Product id="dcag8" prdName="Medium 30 L Laptop dcackpack" img={dc8} price="2000" review="4.5"  />
          </div>
            

        </div>
    )
}