
import "./Home.css"
import { Link } from 'react-router-dom'

import h1 from "../imgs/header__home.jpg"
import h2 from "../imgs/header__teddy.png"
import h3 from "../imgs/header_application.png"
import h4 from "../imgs/header_electronics.png"
import h5 from "../imgs/header_fashion.png"
import h6 from "../imgs/header_gerocery.png"
import h7 from "../imgs/header_gift_1.png"
import h9 from "../imgs/header_mobile.png"
import h8 from "../imgs/header_travell.png"

import m1 from "../imgs/main_blanket.jpeg"
import m2 from "../imgs/main_stylist_watches.jpeg"
import m3 from "../imgs/main_backpacks.jpeg"
import m4 from "../imgs/main_bt_headphones.jpeg"
import m5 from "../imgs/main_camp.jpeg"
import m6 from "../imgs/main_chains.jpeg"
import m7 from "../imgs/main_data_card.jpeg"
import m8 from "../imgs/main_desiel.jpeg"
import m9 from "../imgs/main_dress_materials.jpeg"

import m11 from "../imgs/main_ethink_collection.jpeg"
import m22 from "../imgs/main_wire_headphones.jpeg"
import m33 from "../imgs/main_flat_charging.jpeg"
import m44 from "../imgs/main_women_saree.jpeg"
import m55 from "../imgs/main_hair_oil.jpeg"
import m66 from "../imgs/main_handbags.jpeg"
import m77 from "../imgs/main_jogger_1.jpeg"
import m88 from "../imgs/main_women_t-shirt.jpeg"
import m99 from "../imgs/men's vests.jpeg"


import m111 from "../imgs/main_laptop_bags_1.jpeg"
import m222 from "../imgs/main_laptop_bags.jpeg"
import m333 from "../imgs/main_makeup.jpeg"
import m444 from "../imgs/main_mangalsutra.jpeg"
import m555 from "../imgs/main_mobile_cover.jpeg"
import m777 from "../imgs/main_shoulder_bags.jpeg"
import m888 from "../imgs/main_sports_shoes.jpeg"
import m999 from "../imgs/main_watches.jpeg"


import slide1 from "../imgs/slider_5.jpg"














export default function Home() {
    return (
        <div>

            <div className="homeMain">
                <div className="home1 dnone">
                    <img src={h1} alt="img1" />
                    <p>Home</p>
                </div>
                <div className="home1">
                    <img src={h2} alt="img2" />
                    <p>teddy</p>
                </div>
                <div className="home1">
                    <img src={h3} alt="img3" />
                    <p>applications</p>
                </div>
                <div className="home1">
                    <img src={h4} alt="img4" />
                    <p>electronics</p>
                </div>
                <div className="home1">
                    <img src={h5} alt="img5" />
                    <p>fashion</p>
                </div>
                <div className="home1 dnone">
                    <img src={h6} alt="img6" />
                    <p>grocery</p>
                </div>
                <div className="home1 dnone">
                    <img src={h7} alt="img7" />
                    <p>gift</p>
                </div>
                <div className="home1">
                    <Link to="mob">
                        <img src={h9} alt="img8" />
                        <p>mobile</p></Link>
                </div>
                <div className="home1">
                    <img src={h8} alt="img9" />
                    <p>travell</p>
                </div>

            </div>


            <hr></hr>
            <div className="slide">
                <img src={slide1} alt="img10" />
            </div>

            <div className="home_sec">
                <div className="title">
                    <h2>Latest Trends</h2>
                    <button>ViewAll</button>
                </div>
                {/* <hr className="hr"></hr> */}
                <div className="HomeMain_2">

                    <div className="Home2">
                        <Link to="/blanket"> <div><img src={m1} alt="img11" /></div> </Link>
                        <div className="Homep"><p>blankets</p>
                            <span>upto 50% off</span>
                            <p>Shop Now</p></div>
                    </div>

                    <div className="Home2">
                        <Link to="/watch"> <div><img src={m2} alt="img12" /></div></Link>
                        <div className="Homep"><p>adidas</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>

                    <div className="Home2">
                        <Link to="/bags"> <div><img src={m3} alt="img13" /></div></Link>
                        <div className="Homep"><p>backpacks</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>

                    <div className="Home2">
                        <Link to="/headset">  <div><img src={m4} alt="img14" /></div></Link>
                        <div className="Homep"><p>headsets</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>

                    <div className="Home2">
                        <Link to='/cam'>
                            <div><img src={m5} alt="img15" /></div></Link>
                        <div className="Homep"><p>cam</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="/chain"><div><img src={m6} alt="img16" /></div></Link>
                        <div className="Homep"><p>chains</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="/Data"><div><img src={m7} alt="img17" /></div></Link>
                        <div className="Homep"><p>data_cards</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="watch"><div><img src={m8} alt="img18" /></div></Link>
                        <div className="Homep"><p>Watches</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="dress"><div><img src={m9} alt="img19" /></div></Link>
                        <div className="Homep"><p>dresses</p>
                            <span>dresses</span><p>Shop Now</p></div>
                    </div>
                </div>

            </div>



            {/* ///second row */}


            <div className="home_sec">
                <div className="title">
                    <h2>Top Trends</h2>
                    <button>ViewAll</button>
                </div>
                <div className="HomeMain_2">

                    <div className="Home2">
                        <Link to="/chain">  <div><img src={m11} alt="img20" /></div></Link>
                        <div className="Homep"><p>collections</p>
                            <span>upto 50% off</span><p>Shop Now</p>
                        </div>
                    </div>
                    <div className="Home2">
                        <Link to="headset">
                            <div><img src={m22} alt="img21" /></div></Link>
                        <div className="Homep"><p>Headphones</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <div><img src={m33} alt="img22" /></div>
                        <div className="Homep"><p>charging</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <div><img src={m44} alt="img23" /></div>
                        <div className="Homep"><p>sarees</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <div><img src={m55} alt="img24" /></div>
                        <div className="Homep"><p>HairOil</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="handbag">  <div><img src={m66} alt="img25" /></div></Link>
                        <div className="Homep"><p>Handbags</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <div><img src={m77} alt="img26" /></div>
                        <div className="Homep"><p>joggers</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <div><img src={m88} alt="img27" /></div>
                        <div className="Homep"><p>t shirts</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <div><img src={m99} alt="img28" /></div>
                        <div className="Homep"><p>men's vsts</p>
                            <span>dresses</span><p>Shop Now</p></div>
                    </div>
                </div>

            </div>


            {/* thord row */}



            <div className="home_sec">
                <div className="title">
                    <h2>Latest Trends</h2>
                    <button>ViewAll</button>
                </div>
                <div className="HomeMain_2">
                    <div className="Home2">
                        <Link to="/bags"> <div><img src={m111} alt="img28" /></div></Link>
                        <div className="Homep"><p>laptop bags</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="/lapbags"><div><img src={m222} alt="img29" /></div></Link>
                        <div className="Homep"><p>laptop</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="/makeup"> <div><img src={m333} alt="img30" /></div></Link>
                        <div className="Homep"><p>makeup</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="/chain"><div><img src={m444} alt="img31" /></div></Link>
                        <div className="Homep"><p>manalsutra</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="pp"> <div><img src={m555} alt="img32" /></div> </Link>
                        <div className="Homep">
                            <p>mobile cover</p>
                            <span>upto 50% off</span>
                            <p>Shop Now</p>
                        </div>
                        {/* </div> */}

                    </div>
                    <div className="Home2">
                        <Link to="/shoe"><div><img src={m888} alt="img33" /></div></Link>
                        <div className="Homep"><p>shoes</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to='handbag'> <div><img src={m777} alt="img34" /></div></Link>
                        <div className="Homep"><p>Hand bags</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="shoe"><div><img src={m888} alt="img35" /></div></Link>
                        <div className="Homep"><p>shoes</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                    <div className="Home2">
                        <Link to="watch"><div><img src={m999} alt="img36" /></div></Link>
                        <div><p>WATCHES</p>
                            <span>dresses</span><p>Shop Now</p></div>
                    </div>
                </div>

            </div>







            {/* </div> */}



            {/* mobile view */}

            <div className="modile_view">

                <h4>Latest Trends</h4>
                <div className="mobile_main">


                    <div className="mobile_head">
                        <Link to="pp"> <div className="mobile_img"><img src={m555} alt="img37" /></div> </Link>
                        <div className="Homep">
                            <p>mobile cover</p>
                            <span>upto 50% off</span>
                            <p>Shop Now</p>
                        </div>

                    </div>
                    <div className="mobile_head">
                        <Link to="watch"><div className="mobile_img watch"><img src={m999} alt="img38" /></div></Link>
                        <div className="Homep"><p>WATCHES</p>
                            <span>dresses</span><p>Shop Now</p></div>

                    </div>
                </div>

                <div className="mobile_main">


                    <div className="mobile_head">
                        <Link to='handbag'> <div className="mobile_img"><img src={m777} alt="img39" /></div></Link>
                        <div className="Homep"><p>Hand bags</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>

                    </div>
                    <div className="mobile_head">
                        <Link to="/shoe"><div className="mobile_img"><img src={m888} alt="img40" /></div></Link>
                        <div className="Homep"><p>shoes</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                </div>

                <h4 className="mob_title">Top Trends</h4>

                {/* third line */}

                <div className="mobile_main">


                    <div className="mobile_head">
                        <Link to="headset">
                            <div className="mobile_img"><img src={m22} alt="img41" /></div></Link>
                        <div className="Homep"><p>Headphones</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>

                    </div>
                    <div className="mobile_head">
                        <Link to="/lapbags"><div className="mobile_img"><img src={m222} alt="img42" /></div></Link>
                        <div className="Homep"><p>laptop</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                </div>

                <div className="mobile_main">


                    <div className="mobile_head">
                        <Link to="/blanket"> <div><img src={m1} alt="img43" /></div> </Link>
                        <div className="Homep"><p>blankets</p>
                            <span>upto 50% off</span>
                            <p>Shop Now</p></div>

                    </div>
                    <div className="mobile_head">
                        <Link to="/watch"> <div><img src={m2} alt="img44" /></div></Link>
                        <div className="Homep"><p>adidas</p>
                            <span>upto 50% off</span><p>Shop Now</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}