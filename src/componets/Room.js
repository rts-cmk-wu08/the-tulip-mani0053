import axios from "axios";
import { useEffect } from "react";
import "./styles/Room.css";



const Room = () => {
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState();
    const [hero, setHero] = useState();

    useEffect(() => {
        axios("http://localhost:4000/hero")
        .then((response) => setHero(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false));
    }, []);
    return (
        <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && hero && (
            <>
              <div className="heroimg">
                <img src={hero.image} alt="" />
              </div>
              <div className="herowrapper">
                   <nav className="heroli">
                     <ul className="navi">
                        <li>Home</li>
                        <li>Rooms  &  Suites</li>
                        <li>Services</li>
                        <li>About US</li>
                        <li>Booking</li>
                     </ul>
                     <ul className="some">
                        <a href="#"><li><AiOutlineInstagram /></li></a>
                        <a href="#"><li><AiOutlineFacebook /></li></a>
                        <a href="#"><li><BsYoutube /></li></a>
                        <a href="#"><li><BsTwitter /></li></a>
                      </ul>
                    </nav>
              <div className="herotext">
                <img className="logotulip" src={tulip} alt="" />
                <h1>{hero.headline}</h1>
                <a className="bookbtn" href="#">Book Now</a>
              </div>
              </div>
            </>
          )}

        </div>
    );
};
 
export default Room;