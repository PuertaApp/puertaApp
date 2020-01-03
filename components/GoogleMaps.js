import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'; 
import styled from 'styled-components'
import SmallPropertyCardMap from './SmallPropertyCardMap';

const Photo = styled.img`
  height: 32px;
  width: 32px;
`
const AnyReactComponent = ({ text }) => (
  <Photo src={text}></Photo>
);

class GoogleMaps extends Component {
  static defaultProps = {
    // center: {
    //   lat: this.props.latitude,
    //   lng: this.props.longitude
    // },
    zoom: 14
  };
  state = {
    lat: this.props.coords.lat,
    lng: this.props.coords.lng, 
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
  // pull the user's location and pass to googlemaps component for centering.
  componentDidMount() {
    if (navigator.geolocation) {      
      let location = navigator.geolocation.getCurrentPosition(this.getCoordinates);      
    } else {
      alert("Geolocation is not supported by this browser.");
    }
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
      lat: position.coords.latitude,
      lng: position.coords.longitude,
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
      lat: crd.latitude,
      lng: crd.longitude,
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
        {/* // Important! Always set the container height explicitly */}       
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact            
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS }}
            center={{lat: this.state.lat, lng: this.state.lng}}
            defaultZoom={this.props.zoom}
            options={{fullscreenControl: false}}
          >             
            <SmallPropertyCardMap 
              lat={this.state.lat}
              lng={this.state.lng}
            />
            {/* <AnyReactComponent
              lat={this.state.latitude}
              lng={this.state.longitude}
              text={'https://image.flaticon.com/icons/png/512/171/171239.png'} 
            /> */}
            {/* <AnyReactComponent
              lat={6.208}
              lng={-75.563}
              text={'https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg'} 
            /> */}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMaps;