import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import FilterMenu from '../Components/FilterMenu'
const Home = () => {
  return (

    <>
    <Navbar/>
      <div class="hero">
        <div class="hero_search">
          <h1>Pronađi svoju sledeću avanturu</h1>
          <FilterMenu />
        </div>
      </div>

      <div class="home_destination">
        <h2> Popularne <span>lokacije</span></h2>

        {/* <ul>
          <li> Sve </li>
          <li> Veliki gradovi </li>
          <li> Okean </li>
          <li> Planine </li>
          <li> Nacionalni Parkovi </li>
        </ul> */}

        <div class="home_destination">


          <div class="wrapper">
            <div class="card-holder">
      

              {/* <a href="" class="card">
                <img src={require("../Images/locations/city/los_angeles.png")} alt="" />
              </a>

              <a href="" class="card">
                <img src={require("../Images/locations/city/boston.png")} alt="" />
              </a>

              <a href="" class="card">
                <img src={require("../Images/locations/city/new_york.png")} alt="" />
              </a>

              <a href="" class="card">
                <img src={require("../Images/locations/city/las_vegas.png")} alt="" />
              </a> */}

   
            </div>
          </div>
        </div>

        <h2> <span> Ostrva</span></h2>
        <div class="wrapper">
          <div class="card-holder">

            {/* <a href="" class="card">
                <img src={require("../Images/locations/block_island.jpg")} alt="" />
              </a>

              <a href="" class="card">
                <img src={require("../Images/locations/marthas_vineyard.jpg")} alt="" />
              </a>

              <a href="" class="card">
                <img src={require("../Images/locations/nantucket.jpg")} alt="" />
              </a>

              <a href="" class="card">
                <img src={require("../Images/locations/mackinac_island.jpg")} alt="" />
              </a> */}
          </div>
        </div>
      </div>

      <Footer/>
    </>

  )
}

export default Home