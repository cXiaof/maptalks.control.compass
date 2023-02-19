// new Map
const map = new maptalks.Map('map', {
  center: [121.6508, 31.1758],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution:
      '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
  }),
  scaleControl: { position: 'bottom-right', metric: true, imperial: true },
  zoomControl: {
    position: { top: 80, right: 20 },
    slider: false,
    zoomLevel: true,
  },
})

// new Compass
let compassControl

const removeCompassControl = () => {
  compassControl?.remove()
}

const addCompassControl = () => {
  removeCompassControl()
  compassControl = new maptalks.CompassControl({
    position: 'top-right',
    resetViewTriggers: 'dblclick',
  }).addTo(map)
}
addCompassControl()

// new Toolbar
const toolbar = new maptalks.control.Toolbar({
  position: 'top-left',
  items: [
    { item: 'add', click: () => addCompassControl() },
    { item: 'remove', click: () => removeCompassControl() },
  ],
}).addTo(map)
