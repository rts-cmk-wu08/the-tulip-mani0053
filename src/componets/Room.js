import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Room.css";

const Room = () => {
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState();
    const [room, setRoom] = useState();

    useEffect(() => {
        axios("http://localhost:4000/room")
        .then((response) => setRoom(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false));
    }, []);

    return (
        <div className="room">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && room && (
            <>
              <div className="roomwrapper">
                 <div>
                  <p>{roomtypes.type}</p>
                 
                 </div>
                 <div>

                 </div>
                 <div>

                 </div>
              </div>
            </>
          )}

        </div>
    );
};
 
export default Room;