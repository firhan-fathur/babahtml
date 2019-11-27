import React, {Component} from 'react';
import "../styles/styles.css"

class App extends Component {
  
  render() { 
    return (  

        <div className="wrapper">
           <div className="header">
               <div className="navbar">
                      <div className="logo">
                           <img className="imgfluid" src={require("../logo/babastudio-logo.png")}/>
                       </div>
                         <div className="menu">
                              <ul>
                                <li><a>Home</a></li>
                                <li><a>Blogs</a></li>
                                <li><a>Galery</a></li>
                                <li><a>Kontak</a></li>


                               </ul>
                          </div>
                </div>
            </div>
         
            
            <div className="slider">
              <div className="slidercontent">
                      <img className="imageslider" src={require('../images/banner-desktop.jpg')}/>
              </div>
            </div>
      
     
      <h2 className="dataprestasi">Prestas Murid babastudio</h2>
      <div className="content">

          <div className="content-gambar">
            <div className="image">
                <img className="imagesliderr" src={require('../images/21cineplex.jpg')}/>
                <div className="contentimage">
                   <h2 className="fontimage">www.21cineplex</h2>
                </div>
            </div>
            <div className="image">
                 <img className="imagesliderr" src={require('../images/bpn.jpg') }/>
                 <div className="contentimage">
                     <h2 className="fontimage">www.bpn.go.id</h2>
                 </div>
            </div>
            <div className="image">
                 <img className="imagesliderr" src={require('../images/republika.jpg') }/>
                 <div className="contentimage">
                     <h2 className="fontimage">www.republika.go.id</h2>
                 </div>
            </div>

          </div>
        </div>
        
        <div className="content-gambar">
          <h2 className="dataprestasi">Tempat Kursus babastudio</h2>
          <div className="content-youtube">
              <iframe width="560" height="315" src="https://youtu.be/93fO1I6bIis" frameBorder="0" allow="accelerometer; autoplay; encrypted-media
              gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="content-map">
             <iframe src="https://www.google.co.id/maps/place/Kampus+Babastudio+-+Tangerang.+Kursus+web,+SEO,+Internet+marketing/@-6.2291932,106.6363966,12z/data=!4m8!1m2!2m1!1skampus+babastudio+serpong!3m4!1s0x2e69fbf617855555:0x499c259b6b3d813a!8m2!3d-6.237961!4d106.629804"
            width="550" height="300" frameBorder="0" allowFullScreen=""></iframe>
          </div>
        </div>
     </div>
   )
  }
}
 
export default App ;