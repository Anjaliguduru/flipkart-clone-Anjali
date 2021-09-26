import "./Header.css"


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShopIcon from "@material-ui/icons/ShoppingCart"
// import {useSelector} from "react-redux"


import UserIcon from '@material-ui/icons/AccountCircleRounded'
import PlusIcon from '@material-ui/icons/AddAlertRounded'

import OrderIcon from '@material-ui/icons/CallToActionRounded'
import HeartIcon from '@material-ui/icons/FavoriteBorderRounded'
import RewardIcon from '@material-ui/icons/PaymentRounded'
import GiftIcon from '@material-ui/icons/Redeem'
import Notifications from "@material-ui/icons/Notifications"
import Work from "@material-ui/icons/Work"
import Dnld from "@material-ui/icons/GetApp"
import Help from "@material-ui/icons/LiveHelp"
import Trendin from "@material-ui/icons/TrendingUp"

import Logo from "../imgs/title_image.png"

export default function Home() {

    let [Dropdown1, setDropdown1] = useState(false);
    let [Dropdown2, setDropdown2] = useState(false);


    // let [login,setLogin] =useState(false)
    // let basket=useSelector(state=>state.basket)



    return (



        <div className="Header">

            <div className="Header_main">

                <div className="Header_sec1">
                    <div className="Head_logo">
                        <Link to="/"> <img className='header__logo' src={Logo} alt="img14" /></Link>
                        <p className="Explore">Explore All</p>

                    </div>


                </div>


                <div className="Header_sec2">
                    <input type='text' placeholder="Search for Gadgets, Cloths, Electronic devices & Groceries etc" />

                </div>
                <div className="Header_sec3">
                    <div className="sec3">

                        <p className='header__option2 login ' onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)}>Log in </p>

                    </div>
                    <div className="sec3">
                        <p className='header__option2' onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}>More</p>

                    </div>
                    <Link to="/cart"> <div className="sec3 cart">
                        <ShopIcon className="carticon" />
                        <p className="colorcart header__option2"><small>Cart</small></p>

                    </div></Link>




                </div>

            </div>

            <div className={Dropdown1 ? "Dropdown_1_on" : "Dropdown_1_off"}>
                <div className="DropdownName">

                    <div className="Dropdown_Header_1">
                        <span>New Customer?</span>
                        <span>Signup</span>



                    </div>
                    <div className="Dropdowm_Body_1">
                        <ul>
                            <li><UserIcon className="Dropdown_1_Icon" />  My Profile</li>
                            <li><PlusIcon className="Dropdown_1_Icon" />  Flipkart Plus zone </li>
                            <li><OrderIcon className="Dropdown_1_Icon" />  Orders</li>
                            <li><HeartIcon className="Dropdown_1_Icon" />  Wishlist</li>
                            <li><RewardIcon className="Dropdown_1_Icon" />  RewardIcon</li>
                            <li><GiftIcon className="Dropdown_1_Icon" />    GiftList</li>

                        </ul>

                    </div>

                    <div className="Dropdown_1_triangle"></div>


                </div>

            </div>


            <div className={Dropdown2 ? "Dropdown_2_on" : "Dropdown_2_off"}>
                <div className="DropdownName">


                    <div className="Dropdowm_Body_1">
                        <ul>
                            <li><Notifications className="Dropdown_1_Icon" />  Notifications preference</li>
                            <li><Work className="Dropdown_1_Icon" />  Sell on Flipkart </li>
                            <li><Help className="Dropdown_1_Icon" />  24x7 service</li>
                            <li><Trendin className="Dropdown_1_Icon" />  Advertise</li>
                            <li><Dnld className="Dropdown_1_Icon" />  download the app</li>

                        </ul>

                    </div>

                    <div className="Dropdown_1_triangle"></div>


                </div>

            </div>




        </div>
    )
}