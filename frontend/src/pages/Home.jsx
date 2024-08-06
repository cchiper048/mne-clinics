import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import videoSrc from "../images/video-backg.mp4";
import { FaHeart } from "react-icons/fa";
import picture from "../images/home1.jpg";
import { Usluge } from "../components/Usluge";

export const Home = () => {
  return (
    <section className="home">
      <article className="home-info">
        <video className="video-background" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div>
          <p>
            <span>
              <FaHeart className="heart-icon" />
            </span>
            Privatna zdravstvena ustanova
          </p>
        </div>
        <h1>MNE-Clinic</h1>
        <Link to="/kontakt">Kontakirajte nas! </Link>
      </article>
      <article className="o-nama">
        <div className="left-side">
          <h3>Saznaj nesto vise</h3>
          <h2>O nama</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cum
            distinctio id minus repellendus corrupti. Commodi quia dignissimos,
            incidunt aliquam, culpa, repellat quisquam fugit nobis hic minima
            vero ratione deleniti!
          </p>
          <Link to="/onama">Saznaj vise</Link>
        </div>
        <div className="right-side">
          <img src={picture} alt="Nasa klinika" />
        </div>
      </article>
      <article className="home-usluge">
        <h2>Nase usluge:</h2>
        <Usluge />
      </article>
    </section>
  );
};
