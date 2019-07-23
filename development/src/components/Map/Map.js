import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { Container, Row, Col } from "react-bootstrap";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer
} = require("react-google-maps");

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFt0oySvZ0cDgvd2LBMjWWO3mLHaCeHKI",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="mapWrapper text-focus-in-fourth" style={{ height: `70vh`}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 43.7334034, lng: -79.39037738471677 }}
  >
    <KmlLayer
      url={
        "http://www.google.com/maps/d/kml?mid=1_4tVpGhcbjv12eQ9YCHHILbiBaFhB4st" +
        "&ver=" +
        generateRandom()
      }
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
));
function generateRandom() {
  return Math.random() * 10000000000000000;
}
export default Map;
