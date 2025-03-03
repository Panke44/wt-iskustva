import React from 'react'
import FilterMenu from '../Components/FilterMenu'
import SingleExperience from '../Components/SingleExperience'
import Navbar from '../Components/Navbar'

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
            <SingleExperience img={require("../Images/Experiences/block_milos_panic.jpg")} name="Miloš Panić" position="Barista" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" href="/blockisland/milos-panic" />
            <SingleExperience img="" name="Danijela Bilandžić" position="Food Runner" employer="Block Island Beach Hosuse" location="Block Island" status="pozitivno" year="2024" href="/blockisland/danijela-bilandzic" />
            <SingleExperience />
            <SingleExperience />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Experiences