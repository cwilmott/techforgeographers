// Mapbox GL JS pairs
// Each var has an "event" pair - you gotta do something with it at the end.


// map var

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
  center: [-122.25, 37.87], // starting position
  zoom: 12 // starting zoom
});

// geolocate var

var geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
});

// events

map.addControl(geolocate);
map.on('load', function() { });
map.on('click', 'points-layer', (e) => { });

// functions (or things that happen)

geolocate.trigger();

map.addSource('points', {
        type: 'geojson',
        data: 'data-link-here'
      });
