import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const 
block_danijela_bilandzic = () => {
    return (
        <>
            <Navbar/>
            <div className="single-experience-wrapper">
                <div className="basic-info">
                    <img src="img/placeholder-square.jpg" alt="" />

                    <div className="info-holder">
                        <h1>Danijela Bilandžić</h1>
                        <p> <b>Agencija:</b> Sunčana Vura </p>
                        <p> <b>Lokacija:</b> Block Island, Rhode Island </p>
                        <p> <b>Sezona:</b> 2024 </p>
                        <p> <b>Sponzor:</b> Dynamic Global Exchange </p>
                        <p> <b>Viza:</b> Zagreb, Hrvatska </p>
                    </div>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1>Prvi posao</h1>
                    <div className="experience-status">
                        <span className="pozitivno"> Pozitivno </span>
                    </div>
                </div>

                <div className="experience-body">
                    <p> <b> Poslodavac: </b> <a href="#"> Block Island Beach House </a> </p>
                    <p> <b> Pozicija: </b> Food Runner </p>
                    <p> <b> Satnica: </b> $8 + tips </p>
                    <p> <b> Prosečan broj sati: </b> 40h tjedno </p>
                    <p> <b> Zadovoljstvo zaradom:</b> Da </p>
                    <hr />
                    <h2> Opis posla: </h2>
                    <p> Posluživanje hrane gostima u restoranu, priprema stanice u kuhinji početkom smjene i
                        čišćenje krajem smjene. </p>

                    <h2>Pozitivne strane posla:</h2>
                    <p>Timski rad, komunikacija s gostima restorana, mogućnost dogovora s kolegama vezano uz
                        raspodjelu obaveza i dužnosti u kuhinji.</p>

                    <h2>Negative sides:</h2>
                    <p>Fizički i mentalno naporan posao, zahtjeva koordinirani rad čitavog osoblja u kuhinji.</p>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1> Smeštaj </h1>
                    <div className="experience-status">
                        <span className="pozitivno"> Pozitivno </span>
                    </div>
                </div>

                <div className="experience-body">
                    <p> <b> Adresa: </b> 56 Dodge Street </p>
                    <p> <b> Cena: </b> $125 / nedeljno </p>

                    <p>Smještaj je bio odličan, unatoč većem broju osoba u jednoj sobi (kod mene 7 cura),
                        sobe su bile ugodne i dovoljne za potrebe sezonskog smještaja. Najveća prednost je blizina radnog mjesta.</p>

                </div>

            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1> Block Island </h1>
                    <div className="experience-status">
                        <span className="pozitivno"> Pozitivno </span>
                    </div>
                </div>

                <div className="experience-body">
                    <h2>Slobodno vreme i aktivnosti:</h2>
                    <p>
                        Block Island je predivan mali otok te je s razlogom popularna turistička
                        lokacija. Svoje slobodno vrijeme provodila sam u šetnjama otokom i istraživanjem plaža.
                        Posebna mjesta su Mohegan Bluffs, North Lighthouse i Sacred Labyrinth.
                    </p>

                    <h2>Pozitivne strane:</h2>
                    <p> Otok je malen i mnoga mjesta moguće je posjetiti pješke ukoliko ste
                        smješteni bliže centru. Uz to, otok je moguće obići biciklom.
                    </p>

                    <h2>Negativne strane:</h2>
                    <p>Jako vjetrovito vrijeme i vlažna klima.</p>

                </div>

            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1> Putovanaja: </h1>
                    <div className="experience-status">
                        <span className="pozitivno"> Pozitivno </span>
                    </div>
                </div>

                <div className="experience-body">
                    <p> <b> Destinacije: </b> New York, Hawaii (Oahu), Los Angeles, Boston</p>
                    <p> <b> Omiljena destinacija: </b> Hawaii </p>
                    <p> <b> Poseban trenutak: </b> Surfanje na Havajima </p>

                    <hr />

                    <h2> Opis putovanja: </h2>
                    <p> Snovi postaju stvarnost. </p>

                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1> Poruka budućim učesnicima programa: </h1>
                </div>

                <div className="experience-body">
                    <p>Samo godinu dana prije odlaska na program mislila sam da ovako nešto uopće nije za
                        mene. Slušala sam iskustva ljudi i sve je izgledalo kao jedan veliki izlazak iz zone komfora
                        za koji nisam bila sigurna jesam li spremna. Odlučila sam poslušati svoju intuiciju i krenuti
                        u avanturu. Dogodilo se to da sam imala daleko najljepše ljeto u životu. Apsolutno svakog
                        potičem da si priušti ovu nezaboravnu avanturu iz koje ćete izaći bogatiji za mnoštvo

                        vještina, iskustava, znanja, sposbnosti i najvažnije, predivnih prijateljstava i uspomena za
                        cijeli život.</p>

                </div>
            </div>
<Footer></Footer>
        </>
    )
}

export default block_danijela_bilandzic