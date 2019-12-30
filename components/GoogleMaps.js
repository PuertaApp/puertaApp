import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'; 
import styled from 'styled-components'

const Photo = styled.img`
  height: 32px;
  width: 32px;
`
const AnyReactComponent = ({ text }) => (
  <Photo src={text}></Photo>
);

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 6.2172586999999995,
      lng: -75.5625925
    },
    zoom: 14
  };
  state = {
    latitude: null,
    longitude: null, 
    userAddress: null,
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    target: {
      latitude : 6.207,
      longitude: -75.564
    },
    id: null,
    time: 1,
  }
  getLocation = () => {
    if (navigator.geolocation) {      
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
      let id = navigator.geolocation.watchPosition(this.success, this.error, this.options);
      this.setState({id})
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }
  stopLocation = () => {
    navigator.geolocation.clearWatch(this.state.id);
  }
  handleLocationError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
      alert("An Unknown default error occurred")
    }
  }
  success = (pos) => {
    var crd = pos.coords;
    this.setState({
      time: this.state.time + 1,
      latitude: crd.latitude,
      longitude: crd.longitude,
    })
  
    if (this.state.target.latitude === crd.latitude && this.state.target.longitude === crd.longitude) {
      alert('Congratulations, you reached the target');
      navigator.geolocation.clearWatch(id);
    }
  }
  options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: Infinity
  };
  error = (err) => {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }
  render() {    
    return (      
      <div>
        <button onClick={this.getLocation}>Get coords</button>
        <button onClick={this.stopLocation}>Stop</button>
        {this.state.latitude} // {this.state.longitude} // {this.state.id} // {this.state.time}
        {/* // Important! Always set the container height explicitly */}
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact            
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.state.latitude}
              lng={this.state.longitude}
              text={'https://image.flaticon.com/icons/png/512/171/171239.png'} 
            />
            <AnyReactComponent
              lat={6.208}
              lng={-75.563}
              text={'https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg'} 
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMaps;