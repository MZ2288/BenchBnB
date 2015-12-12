var React = require('react');
var BenchStore = require('../stores/bench');

var Map = React.createClass({
  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map),
    options = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(map, options);
    this.mapListener = BenchStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all() })
  }

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
