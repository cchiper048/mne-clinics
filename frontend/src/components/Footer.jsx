import React from "react";
import {
    FaArrowAltCircleRight,
    FaLocationArrow,
    FaMailBulk,
    FaPhone,
} from "react-icons/fa";
import "../styles/footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="info">
                <h2>MNE-CLINIC</h2>
                <p>
                    “MNE-CLINIC” je bolnica koja se nalazi u Podogorici, a
                    specijalizovana je za bavljenje internom medicinom.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FaLocationArrow />
                            </span>
                            Podgorica b.b.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FaPhone />
                            </span>
                            000/000-000
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FaMailBulk />
                            </span>
                            golovicdarko@gmail.com
                        </p>
                    </li>
                </ul>
            </div>
            <div className="usluge">
                <h2>Nase usluge</h2>
                <ul>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Onkologija</p>
                    </li>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Neurologija</p>
                    </li>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Pulmologija</p>
                    </li>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Radiologija</p>
                    </li>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Bolnicko lijecenje</p>
                    </li>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Endoskopija</p>
                    </li>
                    <li>
                        <FaArrowAltCircleRight />
                        <p>Transfuzija</p>
                    </li>
                </ul>
            </div>
            <div className="radno-vrijeme">
                <h2>Radno vrijeme</h2>
                <ul>
                    <li>
                        <p>
                            Ponedeljak: <span>00-24</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Utorak: <span>00-24</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Srijeda: <span>00-24</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Cetvrtak: <span>00-24</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Petak: <span>00-24</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Subota: <span>00-24</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Nedelja: <span>00-24</span>
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
