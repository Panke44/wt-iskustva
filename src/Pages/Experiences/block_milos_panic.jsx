
import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const block_milos_panic = () => {
    return (
        <>
        <Navbar/>
            <div className="single-experience-wrapper">
                <div className="basic-info">
                    <img src={require("../../Images/Experiences/block_milos_panic.jpg")} alt="" />

                    <div className="info-holder">
                        <h1>Miloš Panić</h1>
                        <p> <b>Agencija:</b> Experience </p>
                        <p> <b>Lokacija:</b> Block Island, Rhode Island </p>
                        <p> <b>Sezona:</b> 2024 </p>
                        <p> <b>Sponzor:</b> Dynamic Global Exchange </p>
                        <p> <b>Viza:</b> Beograd, Srbija </p>
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
                    <p> <b> Pozicija: </b> Barista </p>
                    <p> <b> Satnica: </b> $13 + tips </p>
                    <p> <b> Prosečan broj sati: </b> 40h nedeljno </p>
                    <p> <b> Zadovoljstvo zaradom:</b> Da </p>
                    <hr />
                    <h2> Opis posla: </h2>
                    <p> Priprema pića, usluživanje gostiju, održavanje higijene i rad na kasi. </p>

                    <h2>Pozitivne strane posla:</h2>
                    <p>Posao barista omogućava usavršavanje veština kao što su multitasking, timski rad i rešavanje problema. Takođe, radom se stiče dobro poznavanje kafe i gastronomije.</p>

                    <h2>Negative sides:</h2>
                    <p>Fizički zahtevan posao, povremeno neprijatni gosti, rano ili kasno radno vreme.</p>
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

                    <p>Tokom mog boravka, smeštaj je daleko nadmašio moja očekivanja. Ljubazno su me dočekali
                        domaćini zbog kojih sam se osećao kao kod kuće. Soba je bila savršeno čista, moderno uređena i
                        opremljen svim potrebnim stvarima - od brzog interneta do udobnog kreveta.</p>

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
                        Odbojka na plaži i kupanje u okeanu, Disco Monday i Balkan Party žurke, isprobavanje nove hrane i pića po restoranima i kafićima,
                        bonfire druženja, vožnja kolima po ostrvu, pešačenje po prirodi.
                    </p>

                    <h2>Pozitivne strane:</h2>
                    <p>The island is known for its enchanting beaches, rocky cliffs and preserved nature.
                        Mohegan Bluffs offers incredible panoramic views of the ocean, and the cliffs are popular with visitors.
                    </p>

                    <h2>Negativne strane:</h2>
                    <p>Visoki troškovi hrane i pića, nedostatak raznovrsnih aktivnosti tokom kišnih dana, ograničen javni prevoz.</p>

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
                    <p> <b> Destinacije: </b> New York, Oahu Hawaii, Los Angeles, Las Vegas, Grand Canyon, Boston</p>
                    <p> <b> Omiljena destinacija: </b> Kaaawa beach, Oahu</p>
                    <p> <b> Poseban trenutak: </b> Zalasci sunca na Havajima</p>

                    <hr />

                    <h2> Opis putovanja: </h2>
                    <p> amazing </p>

                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1> Poruka budućim učesnicima programa: </h1>
                </div>

                <div className="experience-body">
                    <p>Ako razmišljate o avanturi koja će vam promeniti život, program Vork and Travel je prava prilika za vas. Ovo
                        nije samo šansa za rad i zaradu u inostranstvu, već i za upoznavanje ljudi iz celog sveta, usavršavanje
                        engleskog jezika i doživljaj američke kulture.</p>

                </div>
            </div>
<Footer></Footer>
        </>
    )
}

export default block_milos_panic