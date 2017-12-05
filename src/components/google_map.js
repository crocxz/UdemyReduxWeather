import React, { Component } from 'react';


class GoogleMap extends Component {
  //takes reference from html element, render embedded element, how to integrate non react friendly things
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12, 
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  // direct reference to html element, can refer with this.refs.map
  render() {
    return (
      <div ref="map" /> 
    );
  }
}

export default GoogleMap;