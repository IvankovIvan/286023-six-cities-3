import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  init() {
    if (this.mapRef) {
      return;
    }
    this.mapRef = this._mapRef.current;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(this.mapRef, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const offersCords = this.props.offersCords;

    offersCords.map((offerCords) =>
      leaflet
        .marker(offerCords, {icon})
        .addTo(map)
    );
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div ref={this._mapRef}
        className="cities__map map"/>
    );
  }
}

Map.propTypes = {
  offersCords: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired).isRequired).isRequired
};

export default Map;

