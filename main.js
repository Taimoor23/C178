let longitude=0.0849224
let latitude=51.4883863
mapboxgl.accessToken='pk.eyJ1IjoiZ2VldGhhMTgiLCJhIjoiY2wyeGF3Y2V4MHUyczNjbXB2OXg0aHlyNiJ9._mi3Rsxpf8-OQlvzaXHVzA'
var map=new mapboxgl.Map({
    container:'map',
    stylle:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:16
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)