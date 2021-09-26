import Product from "./Product"
import "./Dress.css"
import bs1 from "../imgs/bs1.jpeg"
import bs2 from "../imgs/bs2.jpeg"
import bs3 from "../imgs/bs3.jpeg"
import bs4 from "../imgs/bs4.jpeg"
import bs5 from "../imgs/bs5.jpeg"
import bs6 from "../imgs/bs6.jpeg"
import bs7 from "../imgs/bs7.jpeg"
import bs8 from "../imgs/bs8.jpeg"



export default function Watches(){
    return(
        <div>
            <div className="dress-main">
            <Product id="bed1" prdName="Medium 30 L Laptop Backpack" img={bs1} price="2000" review="4.5"  />
            <Product id="bed2" prdName="Medium 30 L Laptop wackpack" img={bs2} price="2000" review="4.5"  />
            <Product id="bed3" prdName="Medium 30 L Laptop wackpack" img={bs3} price="2000" review="4.5"  />
            <Product id="bed6" prdName="Medium 30 L Laptop wackpack" img={bs5} price="2000" review="4.5"  />
            </div>
           <div className="dress-main">
           <Product id="bed4" prdName="Medium 30 L Laptop wackpack" img={bs4} price="2000" review="4.5"  />
            <Product id="bed5" prdName="Medium 30 L Laptop wackpack" img={bs6} price="2000" review="4.5"  />
            <Product id="bed7" prdName="Medium 30 L Laptop wackpack" img={bs7} price="2000" review="4.5"  />
            <Product id="bed8" prdName="Medium 30 L Laptop wackpack" img={bs8} price="2000" review="4.5"  />
           </div>
            

        </div>
    )
}