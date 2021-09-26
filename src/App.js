// import logo from './logo.svg';
import './App.css';
// import Header from "./Component/Header"
import Header from "./Component/Head"

import Home from "./Component/Home"
import Foot from "./Component/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Bags from "./Component/Bags"
import Watech from "./Component/Watches"
import Blancket from "./Component/Blanket"
import Headset from "./Component/Headset"
import Chain from "./Component/Chain"
import Cam from "./Component/Cam"
import Dress from "./Component/Dress"
import Data from "./Component/Data"
import Lapbag from "./Component/Lapbas"
import Makeup from "./Component/Makeuo"
import Phone from "./Component/Mobilecover"
import Shoe from "./Component/Shoe"
import Handbag from "./Component/HandBag"
import Mobile from "./Component/Mobile"
import Cart from "./Component/Cart"
import Wish from "./Component/Wish"
import Paymet from "./Component/Payment"




function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
            <Foot />
          </Route>

          <Route path='/bags'>
            <Header></Header>
            <Bags />
            <Foot />
          </Route>

          <Route path='/watch'>
            <Header></Header>
            <Watech />
            <Foot />
          </Route>

          <Route path='/blanket'>
            <Header></Header>
            <Blancket />
            <Foot />
          </Route>

          <Route path='/headset'>
            <Header></Header>
            <Headset />
            <Foot />
          </Route>

          <Route path='/chain'>
            <Header></Header>
            <Chain />
          </Route>
          <Route path='/cam'>
            <Header></Header>
            <Foot />
            <Cam />
          </Route>

          <Route path='/dress'>
            <Header></Header>
            <Dress />
          </Route>
          <Route path='/data'>
            <Header></Header>
            <Data />
            <Foot />
          </Route>
          <Route path='/lapbags'>
            <Header></Header>
            <Lapbag />
          </Route>

          <Route path='/makeup'>
            <Header></Header>
            <Makeup />
            <Foot />
          </Route>
          <Route path='/pp'>
            <Header></Header>
            <Phone />
          </Route>

          <Route path='/shoe'>
            <Header></Header>
            <Shoe />
            <Foot />
          </Route>

          <Route path='/handbag'>
            <Header></Header>
            <Handbag />
            <Foot />
          </Route>

          <Route path='/mob'>
            <Header></Header>
            <Mobile />
            <Foot />
          </Route>

          <Route path='/cart'>
            <Header></Header>
            <Cart></Cart>
            <Foot />
          </Route>

          <Route path='/wishlist'>
            <Header></Header>
            <Wish></Wish>
            <Foot />
          </Route>

          <Route path='/payment'>
            <Header></Header>
            <Paymet></Paymet>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
