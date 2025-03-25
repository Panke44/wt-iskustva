import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const
    block_lucija_grgic = () => {
        return (
            <>
                <Navbar />
                <div className="single-experience-wrapper">
                    <div className="basic-info">
                        <img src={require("../../Images/Experiences/block_lucija_grgic.jpeg")} alt="" />

                        <div className="info-holder">
                        <div className="participant-name">
                                <h1>Lucija Grgić</h1> <img src={require("../../Images/flags/hr.png")} alt="" />
                            </div>
                            <p> <b>Agencija:</b> Sunčana Vura </p>
                            <p> <b>Lokacija:</b> Block Island, Rhode Island </p>
                            <p> <b>Sezona:</b> 2024 </p>
                            <p> <b>Sponzor:</b> Dynamic Global Exchange </p>
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
                        <p> <b> Poslodavac: </b> Block Island Beach House </p>
                        <p> <b> Pozicija: </b> Busser </p>
                        <p> <b> Satnica: </b> $8 + tips </p>
                        <p> <b> Prosečan broj sati: </b> 36h tjedno </p>
                        <p> <b> Zadovoljstvo zaradom:</b> Da </p>
                        <hr />
                        <h2> Opis posla: </h2>
                        <p> Rad u restoranu, čišćenje stolova nakon gostiju, održavanje čistoće restorana i beach bara. </p>

                        <h2>Pozitivne strane posla:</h2>
                        <p>- restoran ima najljepši pogled na cijelom otoku, rad s mladom ekipom koja je uvijek spremna pomoći, poslodavcima ne smeta ako radimo drugi posao i lako se dogovoriti s njima oko smjena, dinamičan posao. </p>

                        <h2>Negativne strane posla:</h2>
                        <p> Uključen je samo jedan obrok dnevno kojeg poslužuju već u 11h, bacanje smeća od cijelog hotela na kraju smjene zna biti dosta fizički naporno</p>
                    </div>
                </div>

                <div className="experience-card">
                    <div className="experience-header">
                        <h1>Drugi posao</h1>
                        <div className="experience-status">
                            <span className="pozitivno"> Pozitivno </span>
                        </div>
                    </div>

                    <div className="experience-body">
                        <p> <b> Poslodavac: </b> Winfields </p>
                        <p> <b> Pozicija: </b> Host </p>
                        <p> <b> Satnica: </b> $20 </p>
                        <p> <b> Prosečan broj sati: </b> 36h tjedno </p>
                        <p> <b> Zadovoljstvo zaradom:</b> Da </p>
                        <hr />
                        <h2> Opis posla: </h2>
                        <p> Primanje rezervacija, dovođenje gostiju do stola. </p>

                        <h2>Pozitivne strane posla:</h2>
                        <p> Jednostavan posao, smjena traje 5 sati, a uključena su dva besplatna obroka i piće nakon smjene, dobra radna atmosfera, odličan poslodavac koji cijeni svoje radnike </p>

                        <h2>Negativne strane posla:</h2>
                        <p> Jako rijetko primaju J1 studente </p>
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
                        <p> <b> Cena: </b> $125 / tjedno </p>

                        <p>Smještaj je novoizgrađen, a osim soba ima na raspolaganju zajedničku kuhinju i dvorište gdje smo se često znali družiti. U sobi sam bila smještena sa još 6 cimerica s balkana ( u ostalim sobama je najviše 5 osoba u sobi) i iako mi je to na prvu bio šok, ubrzo sam shvatila da bolje cimerice i atmosferu nisam mogla poželjeti.Naša soba je bila mala, ali kreveti nisu bili na kat i imali smo dvije kupaonice.  </p>
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
                        <p> Sunčanje na plaži, izlasci: disco monday i balkan party, istraživanje otoka, okupljanje s drugim j1 studentima oko bonfire-a
                        </p>

                        <h2>Pozitivne strane:</h2>
                        <p> Predivna priroda, malo mjesto pa je sve blizu, otok je jako siguran 
                        </p>

                        <h2>Negativne strane:</h2>
                        <p> Visoke cijene, sezona prestaje već početkom 9.mjeseca </p>

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
                        <p> <b> Destinacije: </b> New York, Hawaii, Los Angeles, Las Vegas, Grand Canyon, Boston</p>
                        <p> <b> Omiljena aktivnost: </b> Vožnja helikopterom u new yorku  </p>
                        <p> <b> Poseban trenutak: </b> Surfanje na Havajima </p>

                        <hr />

                        <h2> Opis putovanja: </h2>
                        <p> Nezaboravno putovanje sa još troje prijatelja koje je trajalo 3 tjedna. </p>

                    </div>
                </div>

                <div className="experience-card">
                    <div className="experience-header">
                        <h1> Poruka budućim učesnicima programa: </h1>
                    </div>

                    <div className="experience-body">
                        <p>Jedinstveno iskustvo da upoznate prvenstveno američku kulturu, ali i kulturu kolega koji su iz drugih krajeva svijeta..Prijateljstva i iskustva koja tamo steknete su neprocjenjiva i pamtiti će te ih cijeli život. Ovim programom puno ćete naučiti o sebi i vidjeti koliko ste sposbni puno više nego što ste mislili.  
                            </p>

                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }

export default block_lucija_grgic