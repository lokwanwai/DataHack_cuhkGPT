import './Map.css'
import Map from "./Components/Map";
import { useEffect, useState } from "react";
import {Search} from 'react-bootstrap-icons';
export default function MapContainer() {

  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: ""
  });
  const [display_name, setName] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  }, []);

  function error(err) {
    if (
      err.code === 1 || //if user denied accessing the location
      err.code === 2 || //for any internal errors
      err.code === 3 //error due to timeout
    ) {     
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  //get current location when the app loads for the first time
  function getCurrentCityName(position) {
    setCorrds({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
      "&lat=" + coords.latitude + "&lon=" + coords.longitude;
      
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
      }
    })
      .then((response) => response.json())
      .then((data) => setName(data.display_name));
  }

  //get input from text fields and append it to address object
  function update(field) {
    return (e) => {
      const value = e.currentTarget.value;
      setAddress((address) => ({ ...address, [field]: value }));
    };
  }

  return (
    <div className="mapcontainer">
      <h1>Current Business:</h1>

      <section className="form-container">
      <form>
          <label for="location"><Search className='search_icon'/>Search By Location :</label>
          <input type="text" id="location" value={address.location} onChange={update('location')} name="firstname" placeholder=""/>
      </form>
      </section>

      <Map coords={coords} dispaly_name={display_name} />
    </div>
  );
}