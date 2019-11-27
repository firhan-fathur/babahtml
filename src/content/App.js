import React, {Component,Fragment} from 'react';
import Blogs from './blogs';
import Home from '../Home/Home';
import "../styles/styles.css";
// import Blogs from './blogs';
import Props from '../Props/Props';
import Form from '../event/event';
import SimpleEvent from '../event/SimpleEvent';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends Component {
  
  render() { 
    return (
      <Router>
        <div className="wrapper">
           <div className="header">
               <div className="navbar">
                      <div className="logo">
                           <img className="imgfluid" src={require("../logo/babastudio-logo.png")}/>
                       </div>
                         <div className="menu">
                              <ul>
                                <Link to="/" className="li">Home</Link>
                                <Link to="/blogs" className="li">Blogs</Link>
                                <Link to="/" className="li">Galery</Link>
                                <Link to="/" className="li">Kontak</Link>


                               </ul>
                          </div>
                </div>
                {/* <Blogs/> */}
            </div> 
            <Fragment>
                <Route path ="/" exact component={Home}/>
                <Route path ="/blogs" component={Blogs}/>
                <Route path ="/form" component={Form}/>
                <Route path ="/event" component={SimpleEvent}/>
            </Fragment>
          
            
            
          </div>
     </Router>
   )
  }
}
 
export default App ;