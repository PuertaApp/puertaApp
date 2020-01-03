import GoogleMaps from '../components/GoogleMaps';
import { AgentNav } from '../components/Nav'
import MapButton from '../components/styles/MapButton'
import ListIcon from '../components/icons/ListIcon'
import Link from 'next/link';

class Map extends React.Component {
  state = {
    lat: "",
    lng: "",
  }
  getCoordinates = (position) => {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }
  // pull the user's location and pass to googlemaps component for centering.
  componentDidMount() {
    if (navigator.geolocation) {      
      let location = navigator.geolocation.getCurrentPosition(this.getCoordinates);      
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  render() {
    return (
      <div>
        <Link href="/list">
          <MapButton>
            <ListIcon
              height={25}
              width={25}
              />                                                         
          </MapButton>                                 
        </Link>          
        {this.state.lat !== '' ? <GoogleMaps coords={this.state} /> : <div>Loading...</div> }
        <AgentNav /> 
      </div>
    )
  }
}
export default Map;