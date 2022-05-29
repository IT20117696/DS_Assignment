import React, { Component } from 'react'
import MainHomePageNavBar from './MainHomePageLayOut/MainHomePageNavBar';
import Footer from './footer';

export default class MovieHomePage extends Component {
  render() {
    return (
      <div style={{ backgroundColor:"#2B3856" }} >
          <MainHomePageNavBar/>
          <div style={{ backgroundColor:"#0C090A" ,height:"800px"}} >

  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item">
      <img src="https://www.reelrecon.com/wp-content/uploads/2014/03/enders_game_2013_movie-wide.jpg" class="d-block w-100" alt="..."></img>
    </div>
  
    <div class="carousel-item">
      <img src="https://nettv4u.com/imagine/-raja-cheyyi-vesthe--movie-first-look-poster-exclusive-3.jpg" class="d-block w-100" alt="..."></img>
    </div>
  
    <div class="carousel-item">
      <img src="https://webneel.com/daily/sites/default/files/images/daily/01-2019/9-movie-poster-design-kollywood-tamil-balloon-prathoolnt.jpg" class="d-block w-100" alt="..."></img>
    </div>

   <div class="carousel-item active">
      <img src="https://cdn.wallpapersafari.com/42/50/8mKbCk.jpg" class="d-block w-100" alt="..."></img>
    </div>

    <div class="carousel-item">
      <img src="http://images6.fanpop.com/image/photos/37000000/You-re-All-Surrounded-korean-dramas-37017261-1920-1080.jpg" class="d-block w-100" alt="..."></img>
    </div>


  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


          
          </div>

    
          <Footer/>
      </div>
    )
  }
}
