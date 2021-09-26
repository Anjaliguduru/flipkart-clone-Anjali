import "./Footer.css"
import Foot from "../imgs/fooot.svg"

import Job from "@material-ui/icons/WorkOffOutlined"
import Star from "@material-ui/icons/Stars"
import Gift from "@material-ui/icons/Redeem"
import Helo from "@material-ui/icons/HelpOutline"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_Head">
                <div className="Footer_main">
                    <p>About</p>
                    <span>Contact us</span>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span> Flipkart Stories</span>
                    <span> Press</span>
                    <span> Flipkart Wholesale</span>
                    <span>Corporate Information </span>


                </div>
                <div className="Footer_main">
                    <p>Help</p>
                    <span>Payment</span>
                    <span>Shippping</span>
                    <span>CAncellation & REturns</span>
                    <span> FAQ</span>
                    <span>Report Information</span>


                </div>

                <div className="Footer_main">
                    <p>POLICY</p>
                    <span>Retuen Poolicy</span>
                    <span>Security</span>
                    <span>Privacy</span>
                    <span>Sitemap</span>
                    <span> EPR Compliance</span>
                    <span> Flipkart Wholesale</span>
                    <span>Corporate Information </span>


                </div>
                <div className="Footer_main one">
                    <p>SOCIAL</p>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>YouTube</span>


                </div>
                {/* <hr></hr> */}
                <div className="Footer_main one">
                    <p>Mail Us:</p>
                    <span>FlipK INternet Private Limited</span>
                    <span>Buildings Alyssa, Begonia &</span>
                    <span>Clove Embassy TEch Villae,</span>
                    <span>Outer Rin Road, Devarabeesanahali Villae,</span>
                    <span>Benuluru,560103,</span>
                    <span>Karnataka,India</span>


                </div>
                <div className="Footer_main one">
                    <p>Reistrered Office</p>
                    <span>FlipK INternet Private Limited</span>
                    <span>Buildings Alyssa, Begonia &</span>
                    <span>Clove Embassy TEch Villae,</span>
                    <span>Outer Rin Road, Devarabeesanahali Villae,</span>
                    <span>Benuluru,560103,</span>
                    <span>Karnataka,India</span>


                </div>



            </div>
            <hr></hr>
            <div className="foterr_last">
                <div className="footer_last_main">
                    <Job className="icons" />
                    <p>Sell On Flipkart</p>
                </div>
                <div className="footer_last_main">
                    <Star className="icons" />
                    <p>Advertise</p>
                </div>
                <div className="footer_last_main">
                    <Gift className="icons" />
                    <p>giftcards</p>
                </div>
                <div className="footer_last_main">
                    <Helo className="icons" />
                    <p>HelpCenter</p>
                </div>
                <div><p>© 2007-2021 Flipkart.com</p></div>
                <div className="footer_img">
                    <img src={Foot} alt="img1" />
                </div>

            </div>
        </div>
    )
}