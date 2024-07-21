import React from "react";
import "../styles/oNama.css";
import aboutPicture from "../images/about-us.jpg";
import {
    FaBullhorn,
    FaCalendar,
    FaMapMarker,
    FaMapMarkerAlt,
    FaMicrophone,
    FaSoundcloud,
} from "react-icons/fa";

export const ONama = () => {
    return (
        <main className="main-section">
            <section className="description">
                <h1>O Nama</h1>
                <p>
                    Dobrodošli u MNE-CLINICS, gde je Vaše zdravlje naša najveća briga.
                    Sa dugogodišnjim iskustvom i posvećenošću pružanju vrhunske
                    medicinske nege, ponosni smo što smo vodeća privatna klinika u
                    regionu.
                </p>
                <h2>Naša Misija</h2>
                <p>
                    Naša misija je pružanje visokokvalitetne, sveobuhvatne zdravstvene
                    usluge uz individualni pristup svakom pacijentu. Trudimo se da
                    postignemo optimalne rezultate lečenja kroz inovativne metode i
                    najmoderniju tehnologiju, dok istovremeno negujemo toplu i
                    podržavajuću atmosferu.
                </p>
                <h2>Naš Tim</h2>
                <p>
                    Naš tim čine iskusni i stručni lekari, specijalisti, medicinske
                    sestre i drugo medicinsko osoblje koji su posvećeni Vašem zdravlju i
                    dobrobiti. Kontinuirano se usavršavamo i pratimo najnovije trendove
                    i dostignuća u medicini kako bismo Vam pružili najbolju moguću negu.
                </p>

                <h2>Naša Oprema</h2>
                <p>
                    Klinika je opremljena najmodernijom medicinskom opremom koja nam
                    omogućava preciznu dijagnostiku i efikasno lečenje. Neprestano
                    ulažemo u najnoviju tehnologiju kako bismo osigurali vrhunski
                    standard nege.
                </p>

                <h2>Kontaktirajte Nas</h2>
                <p>
                    Ako imate bilo kakva pitanja ili želite da zakažete pregled,
                    slobodno nas kontaktirajte. Naš ljubazni tim je uvek spreman da Vam
                    pomogne i pruži sve potrebne informacije.
                </p>
                <div className="icons">
                    <div className="icon-feature">
                        <span>
                            <FaCalendar />
                        </span>
                        <p>Zakazite vas termin</p>
                    </div>
                    <div className="icon-feature">
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <p>Posjetite nas!</p>
                    </div>
                    <div className="icon-feature">
                        <span>
                            <FaBullhorn />
                        </span>
                        <p>Uvjerite se da smo najbolji!</p>
                    </div>
                </div>
            </section>
            <section className="image-holder">
                <img src={aboutPicture} alt="" />
            </section>
        </main>
    );
};
