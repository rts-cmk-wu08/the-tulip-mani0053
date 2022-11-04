import { useState, useEffect } from "react";
import axios from "axios";
//import Herocss from './componets/Hero.css'
import tulip from "../thetuliplogo.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [hero, setHero] = useState();

  useEffect(() => {
    axios("http://localhost:4000/hero")
      .then((response) => setHero(response.data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="hero">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && hero && (
        <>
          <div className="heroimg">
            <img src={hero.image} alt="" />
          </div>
          <div className="heroli">
            <ul>
              <li>Home</li>
              <li>Rooms & Suites</li>
              <li>Services</li>
              <li>About US</li>
              <li>Booking</li>
            </ul>
            <ul>
              <li><AiOutlineInstagram /></li>
              <li><AiOutlineFacebook /></li>
              <li><BsYoutube /></li>
              <li><BsTwitter /></li>
            </ul>
          </div>
          <div className="herotext">
            <img src={tulip} alt="" />
            <h1>{hero.headline}</h1>
            <a href="#">hej</a>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
