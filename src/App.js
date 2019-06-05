import React, {Component} from 'react';
import './App.css';
import img from './ludwig-von-mises.jpg'
import Slider from './slider/slider.js'
import img2 from "./mises.png"

export default class App extends Component{
  render() {
    return(
        <div className="wrapper">
            <div className="left"/>
            <div className="main">
                <div className="header">
                    <div className="headerMain">
                        <h1> Ludwig von Mises </h1>
                    </div>
                    <div className="headerMenu">
                        <div className="headerButton actual">Aktuelles</div>
                        <div className="headerButton">Projekte</div>
                        <div className="headerButton">Studierende</div>
                        <div className="headerButton">Unternehmen</div>
                        <div className="headerButton">Zur Person</div>
                        <div className="headerButton">Abschlussarbeiten</div>
                        <div className="headerButton">Kontakt</div>
                    </div>
                </div>
                <div className="headlineWrapper">
                <div className="headlineBlock"/>
                <div className="headline">

                <h2 className="bioMain">Leben</h2>
                </div>
                </div>
                <div className="leben">
                    <div className="foto">
                        <img src={img} alt="error"/>
                    </div>
                    <div className="bio">
                        <div className="bioText">
                        Ludwig Edler von Mises wurde am 29.
                        September 1881 als Sohn des Arthur Edlen
                        von Mises und seiner Frau Adele, geborene
                        Landau, in Lemberg (damals Hauptstadt des
                        Kronlandes Galizien, heute Lwiw, Ukraine)
                        geboren. Er entstammte einer wohlhabenden
                        jüdischen Familie. Die Erhebung in den erblichen
                        Adelsstand war für seinen Urgroßvater Mayer
                        Rachmiel Mises durch Kaiser Franz Joseph I.
                        erfolgt. Sein Bruder war der Mathematiker Richard
                        von Mises. Wenige Jahre später siedelte die
                        Familie nach Wien über, wo Mises 1900 sein Studium
                        der Rechtswissenschaft aufnahm und 1906 mit einer
                        Dissertation abschloss. Von Mises war ab 1906 Mitarbeiter
                            der Handels- und Gewerbekammer in Wien und
                            leitete dort die Finanzabteilung.
                        </div>
                    </div>
                </div>
                <Slider/>
                <div className="preise">
                    <div className="preiseWrapper">
                        <h2 className="preiseMain">Preise</h2>
                       <div className="preiseText">1922 Die Gemeinwirtschaft In seinem Buch Die Gemeinwirtschaft</div>
                        <div className="preiseText">1920er und 1930er Jahren war von Mises einer der wenigen</div>
                        <div className="preiseText">1920er und 1930er Jahren war von Mises einer der wenigen</div>
                        <div className="preiseText">1920er und 1930er Jahren war von Mises einer der wenigen</div>
                        <div className="preiseText">1920er und 1930er Jahren war von Mises einer der wenigen</div>
                    </div>
                    <div className="foto2">
                        <img className="img2" src={img2} alt="((("/>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerText">
                        <h3 className="footerTextFont">Datenschutz Impressum</h3>
                    </div>
                    <div className="footerBlock"/>
                    <div className="footerInfo">
                        <div className="telefon flex">
                            <div className="phoneIcon icon"/>
                            <a className="telefonText footerInfoFont" href="#"> 098 11 48 77 231</a>
                        </div>
                        <div className="footerMail flex">
                            <div className="mailIcon icon"/>
                            <a className="emailText footerInfoFont" href="#"> Jochem.mueller@hs-ansbach.de</a>
                        </div>
                        <div className="footerHome flex">
                            <div className="homeIcon icon"/>
                            <a className="homeText footerInfoFont" href="#"> FH Ansbach Residenzstr. 8 91522 Ansbach</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="right"/>
        </div>
    )
  }
}
