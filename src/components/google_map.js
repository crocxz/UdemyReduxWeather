import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap} from 'react-google-maps';

class GoogleMap extends Component {
  componentDidMount() {
    //takes reference from html element, render embedded element, how to integrate non react friendly things
    new google.maps.Map(this.refs.map, {
      zoom: 12, 
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }

  render() {
    return (
      <div ref="map" /> // direct reference to html element, can refer with this.refs.map
    );
  }
}

export default GoogleMap;