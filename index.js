const options = {
    position: 'top-right'
}

export class CompassControl extends maptalks.control.Control {
    buildOn(map) {
        var dom = maptalks.DomUtil.createEl('div', 'maptalks-compass')
        return dom
    }
}

CompassControl.mergeOptions(options)
