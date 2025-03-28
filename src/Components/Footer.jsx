import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (

        <div className='bottom-container'>
        <div className="bottom-navbar">
            <Link to="https://mojaamerika.com/" target='_blank' > Podkast </Link>
            <Link to="/kontakt"> Kontakt </Link>
            <Link to="/kontakt"> Pošalji iskustvo </Link>
        </div>

        <div className="bottom-copyright">
            &copy; {new Date().getFullYear()} WAT Iskustva. Sva prava zadržana. 
        </div>
    </div>

        // <footer className="footer">
        //     <div className="footer__addr">
        //         <h1 className="footer__logo">Wat iskustva</h1>

        //         <h2>Kontakt</h2>

        //         <address>
        //             mojaamerika1@gmail.com <br/>

        //                 <a className="footer__btn" href="/kontakt">Pošalji iskustvo</a>
        //         </address>
        //     </div>

        //     <ul className="footer__nav">
        //         <li className="nav__item">
        //             <h2 className="nav__title">Moja Amerika</h2>

        //             <ul className="nav__ul">
        //                 <li>
        //                     <a href="/">Veb sajt</a>
        //                 </li>

        //                 <li>
        //                     <a href="/">YouTube</a>
        //                 </li>

        //                 <li>
        //                     <a href="/">Spotify</a>
        //                 </li>
        //             </ul>
        //         </li>

        //         <li className="nav__item nav__item--extra">
        //             <h2 className="nav__title">Programi</h2>

        //             <ul className="nav__ul nav__ul--extra">
        //                 <li>
        //                     <a href="/">Work & Travel USA</a>
        //                 </li>

        //                 <li>
        //                     <a href="/">Au Pair USA</a>
        //                 </li>

        //                 <li>
        //                     <a href="/">Internship/Trainee</a>
        //                 </li>

        //             </ul>
        //         </li>

        //         <li className="nav__item">
        //             <h2 className="nav__title">Legal</h2>

        //             <ul className="nav__ul">
        //                 <li>
        //                     <a href="/">Politika privatnosti</a>
        //                 </li>

        //                 <li>
        //                     <a href="/">Uslovi korišćenja</a>
        //                 </li>

        //                 <li>
        //                     <a href="/">Sitemap</a>
        //                 </li>
        //             </ul>
        //         </li>
        //     </ul>



        // </footer>
    )
}

export default Footer