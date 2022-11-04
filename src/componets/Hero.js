import { useState, useEffect } from "react";
import axios from "axios";
import tulip from "../thetuliplogo.svg"

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
          <div>
           <img src={tulip} alt="" />
            <h1>{hero.headline}</h1>
            <img src={hero.image} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
