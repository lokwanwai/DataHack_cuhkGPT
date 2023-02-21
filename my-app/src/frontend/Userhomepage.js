import './Userhomepage.css'
/*import components*/
import Navbar from './Navbar';
import Topbar from './Topbar';
import MapContainer from './Map';
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>
function Userhomepage() {
    return (
      <div className="Userhomepage">
          <Navbar/>
          <div className='right-content'>
          <Topbar/>
          <MapContainer/>
          </div>
      </div>
    );
}

export default Userhomepage;