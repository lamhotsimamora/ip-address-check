const _MAP_BOX_TOKEN_ = "pk.eyJ1IjoibGFtaG90c2ltYW1vcmEiLCJhIjoiY2phOXN0eGpqMGFwajJxczQwMzZ0ZHBxdCJ9.CBqzBv4CaL4I-dc3MvKcuQ";
mapboxgl.accessToken = _MAP_BOX_TOKEN_;
    

function _loadMap(
    _longitude,
    _latitude
) {
    var map = new mapboxgl.Map({
        container: "map", // container id
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [
            _longitude,
            _latitude
        ],
        zoom: 15
    });
    // Control
    map.addControl(new mapboxgl.NavigationControl({
        compact: true
    }));
    // marker
    new mapboxgl.Marker({
            color: '#e74c3c',
            draggable: false,
            anchor: 'top'
        })
        .setLngLat(
            [
                _longitude,
                _latitude
            ]
        )
        .addTo(map);

    // popup
    new mapboxgl.Popup({
            anchor: 'bottom',
            closeButton: false,
            closeOnClick: false,
            closeOnMove: false
        })
        .setLngLat({
            lon: _longitude,
            lat: _latitude
        })
        .setHTML('<small style="color: #34495e">ME</small>')
        .setMaxWidth("90px")
        .addTo(map);
}