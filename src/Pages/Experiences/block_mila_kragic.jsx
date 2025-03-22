import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const block_mila_kragic = () => {
    return (
        <>
            <Navbar />
            <div className="single-experience-wrapper">
                <div className="basic-info">
                    <img src={require("../../Images/Experiences/block_mila_kragic.png")} alt="" />

                    <div className="info-holder">
                        <h1>Mila Kragić</h1>
                        <p> <b>Agencija:</b> Experience Work & Travel </p>
                        <p> <b>Lokacija:</b> Block Island, Rhode Island </p>
                        <p> <b>Sezona:</b> 2024 </p>
                        <p> <b>Sponzor:</b> WISE </p>
                        <p> <b>Viza:</b> Beograd, Srbija </p>
                    </div>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1>Prvi posao</h1>
                    <div className="experience-status">
                        <span className="negativno"> Negativno </span>
                    </div>
                </div>

                <div className="experience-body">
                    <p> <b> Poslodavac: </b> The Oar </p>
                    <p> <b> Pozicija: </b> Host </p>
                    <p> <b> Satnica: </b> $15 </p>
                    <p> <b> Prosečan broj sati: </b> 28h nedeljno </p>
                    <p> <b> Zadovoljstvo zaradom:</b> Ne </p>
                    <hr />
                    <h2> Opis posla: </h2>
                    <p> Dočekivanje gostiju, rasporedjivanje po sekcijama, rasporedjivanje po broju gostiju, rezervacije.</p>

                    <h2>Pozitivne strane posla:</h2>
                    <p>Komunikacija sa ljudima i sa kolegama.
                        </p>

                    <h2>Negative sides:</h2>
                    <p>Lošija organizacija, stalne promene u pravilima u zavisnosti od rukovodje, neizvesnost u satnici i smenama (neispunjena kvota sati).
                        </p>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1>Drugi posao</h1>
                    <div className="experience-status">
                        <span className="neutralno"> Neutralno </span>
                    </div>
                </div>

                <div className="experience-body">
                    <p> <b> Poslodavac: </b> Atlantic Inn </p>
                    <p> <b> Pozicija: </b> Busser / Food runner </p>
                    <p> <b> Satnica: </b> $10 </p>
                    <p> <b> Prosečan broj sati: </b> 25 h nedeljno </p>
                    <p> <b> Zadovoljstvo zaradom:</b> Ne </p>
                    <hr />
                    <h2> Opis posla: </h2>
                    <p> Čišćenje i priprema stolova, raznošenje hrane, dodatne porudžbine
                        </p>

                    <h2>Pozitivne strane posla:</h2>
                    <p>Jednostavnost i dobra organizacija
                        </p>

                    <h2>Negativne strane posla:</h2>
                    <p>Neizvesnost u smenama</p>
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
                    <p> <b> Adresa: </b> High Street 45 </p>
                    <p> <b> Cena: </b> $85 / nedeljno </p>
                    <p>
                    Deo smeštaja je renoviran sa zasebnim kupatilom, klimatizovano, zasebnim friziderom i dovoljnim prostorom
                    </p>
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
                    Šetnje i plaža
                    </p>

                    <h2>Pozitivne strane:</h2>
                    <p>Priroda, plaže, noćni izlasci.
                    </p>

                    <h2>Negativne strane:</h2>
                    <p>Ograničenost kretanja, cene.</p>

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
                    <p> <b> Destinacije: </b> Boston</p>
                    <p> <b> Omiljena destinacija: </b> Boston </p>
                    <p> <b> Poseban trenutak: </b> Količina ljudi koje sam upoznala u kratkom periodu </p>

                    <hr />

                    <h2> Opis putovanja: </h2>
                    <p> Prilično skromno sam putovala svojim izborom, ali bilo mi prijatno i novo. </p>

                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h1> Poruka budućim učesnicima programa: </h1>
                </div>

                <div className="experience-body">
                    <p>
                    Jedinstveno iskustvo i širenje vidika, imam utisak da sam toliko dugo provela tamo zbog brojnih doživljaja, deluje mi nemoguće da je to bilo samo jedno leto. Način i okolnosti pod kojim sam se zbližila sa ljudima su potpuno drugačiji od naviknutog, u pozitivnom smislu❤️
                    </p>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default block_mila_kragic