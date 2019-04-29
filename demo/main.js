// new Map
const map = new maptalks.Map('map', {
    center: [121.387, 31.129],
    zoom: 14,
    baseLayer: new maptalks.TileLayer('base', {
        urlTemplate:
            'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        attribution:
            '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
        maxAvailableZoom: 18,
        placeholder: true
    }),
    scaleControl: { position: 'bottom-right', metric: true, imperial: true },
    zoomControl: {
        position: { top: 80, right: 20 },
        slider: false,
        zoomLevel: true
    },
    spatialReference: {
        projection: 'EPSG:3857',
        resolutions: (function() {
            const resolutions = []
            const d = 2 * 6378137 * Math.PI
            for (let i = 0; i < 22; i++) {
                resolutions[i] = d / (256 * Math.pow(2, i))
            }
            return resolutions
        })(),
        fullExtent: {
            top: 6378137 * Math.PI,
            bottom: -6378137 * Math.PI,
            left: -6378137 * Math.PI,
            right: 6378137 * Math.PI
        }
    }
})

// new Compass
let compassControl = null

const removeCompassControl = () => {
    if (compassControl) compassControl.remove()
    compassControl = null
}

const addCompassControl = () => {
    removeCompassControl()
    compassControl = new maptalks.CompassControl({
        position: 'top-right'
    }).addTo(map)
}
addCompassControl()

// new Toolbar
const toolbar = new maptalks.control.Toolbar({
    position: 'top-left',
    items: [
        { item: 'add', click: () => addCompassControl() },
        { item: 'remove', click: () => removeCompassControl() }
    ]
}).addTo(map)
