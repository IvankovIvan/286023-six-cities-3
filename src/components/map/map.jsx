import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ZOOM = 12;
const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const LEAFLET_OPTIONS = {
  zoomControl: false,
  marker: true
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
    this._markers = [];
  }

  rerenderMapPoints() {
    const cityCoordinates = this.props.cityCoordinates;
    const map = this._map;
    map.setView(cityCoordinates, ZOOM);


    this._markers.map((offerCords) =>
      map.removeLayer(offerCords)
    );
    this._markers = [];

    const offersCords = this.props.offersCords;
    offersCords.map((offerCords) =>
      this._markers.push(
          leaflet
        .marker(offerCords, {ICON})
        .addTo(map))
    );
  }

  init() {
    if (this.mapRef) {
      return;
    }
    this.mapRef = this._mapRef.current;
    this._map = leaflet.map(this.mapRef, LEAFLET_OPTIONS);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }

  componentDidMount() {
    this.init();
    this.rerenderMapPoints();
  }

  render() {
    return (
      <div ref={this._mapRef}
        className="cities__map map"/>
    );
  }

  componentDidUpdate() {
    if (!this.mapRef) {
      return;
    }
    this.rerenderMapPoints();
  }
}

Map.propTypes = {
  cityCoordinates: PropTypes.arrayOf(
      PropTypes.number.isRequired).isRequired,
  offersCords: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired).isRequired).isRequired
};

const mapStateToProps = (state) => {
  const cityIdCurrent = state.cityIdCurrent;

  const cityCoordinates = state.cities
    .filter((city) => city.cityId === cityIdCurrent)[0].coordinates;

  const offersCords = state.offers.map((offer) => offer.coordinates);

  return (
    {
      cityCoordinates,
      offersCords
    }
  );
};


export {Map};
export default connect(mapStateToProps)(Map);

