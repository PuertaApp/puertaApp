import GoogleMaps from '../components/GoogleMaps';
import { AgentNav } from '../components/Nav'

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
        {this.state.lat !== '' ? <GoogleMaps coords={this.state} /> : <div>Loading...</div> }
        <AgentNav /> 
      </div>
    )
  }
}
export default Map;