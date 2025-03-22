import React from 'react'
import { Link } from 'react-router'
import FilterMenu from '../Components/FilterMenu'
import SingleExperience from '../Components/SingleExperience'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Experiences = () => {
  return (
    <div>
      <Navbar />
      <div class="experiences-header">
        <h1>Pretraži iskustva</h1>
        <FilterMenu />
      </div>

      <div class="experiences-wrapper">
        <div class="test">
          <div class="sort-menu">
            <ul>
              <li> <button type="submit"> Hronološki </button> </li>
              <li> <button type="submit"> Najnovije </button> </li>
              <li> <button type="submit"> Najstarije </button> </li>
            </ul>
          </div>
          <div class="review-wrapper">
            <Link to="/blockisland/milos-panic"> <SingleExperience img={require("../Images/Experiences/block_milos_panic.jpg")} name="Miloš Panić" position="Barista" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" /> </Link>
            <Link to="/blockisland/danijela-bilandzic"> <SingleExperience img={require("../Images/Experiences/block_danijela_bilandzic.jpeg")} name="Danijela Bilandžić" position="Food runner" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" /> </Link>
            <Link to="/blockisland/anja-mihajlovic"> <SingleExperience img={require("../Images/Experiences/block_anja_mihajlovic.jpeg")} name="Anja Mihajlović" position="Barista / Foodrunner" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" /> </Link>
            <Link to="/blockisland/lucija-grgic"> <SingleExperience img={require("../Images/Experiences/block_lucija_grgic.jpeg")} name="Lucija Grgić" position="Busser" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" /> </Link>
            <Link to="/blockisland/mila-kragic"> <SingleExperience img={require("../Images/Experiences/block_mila_kragic.png")} name="Mila Kragić" position="Host" employer="The Oar" location="Block Island" status="neutralno" year="2024" /> </Link>
            {/* <Link to="/blockisland/milos-panic"> <SingleExperience img={require("../Images/Experiences/block_milos_panic.jpg")} name="Miloš Panić" position="Barista" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" /> </Link> */}
          </div>
        </div>

      </div>

      <Footer></Footer>
    </div>

  )
}

export default Experiences