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

  //send the data on the state to the API
  function getData(url) {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setName(data[0].display_name);
        setCorrds({
          latitude: data[0].lat,
          longitude: data[0].lon
        });
      })
      .catch(() => error("Please Check your input"));
  }

  //set form input( data entered ) to state on form submit
  function submitHandler(e) {
    e.preventDefault();
    console.log(address);

    let url = `https://nominatim.openstreetmap.org/search?
    street=${address.street}
    &city=${address.city}
    &state=${address.state}
    &country=${address.country}
    &postalcode=${address.postalcode}&format=json`;

    getData(url);
  }

  return (
    <div className="mapcontainer">
      <h1>Current Business:</h1>
      <section className="form-container">
      <div className='search'>
            <div>
            <label for="revenue"><Search className='search_icon'/>Search By Revenue :</label>
            <input type="text" id="revenue" value={address.revenue} onChange={update('revenue')}name="firstname" placeholder=""/>
            </div>
            <div>
            <label for="location"><Search className='search_icon'/>Search By Location :</label>
            <input type="text" id="location" value={address.location} onChange={update('location')} name="firstname" placeholder=""/>
            </div>
            </div>
      </section>
      <Map coords={coords} dispaly_name={display_name} />
    </div>
  );
}