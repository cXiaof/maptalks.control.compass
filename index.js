const options = {
    position: 'top-right'
}

export class CompassControl extends maptalks.control.Control {
    constructor(options) {
        super(options)
        this.COMPASS = 'maptalks-compass'
        this.DIAL = 'maptalks-compass-dial'
        this.NEEDLE = 'maptalks-compass-needle'
        this.CLOCK = 'maptalks-compass-dial-clock'
    }

    buildOn(map) {
        const compass = this._getCompass()
        return compass
    }

    _getCompass() {
        const compass = maptalks.DomUtil.createEl('div', this.COMPASS)
        const dial = this._getDial()
        const needle = this._getNeedle()
        compass.appendChild(dial)
        compass.appendChild(needle)
        return compass
    }

    _getDial() {
        const dial = maptalks.DomUtil.createEl('div', this.DIAL)
        for (let i = 0; i < 4; i++) {
            const clock = this._getClock()
            dial.appendChild(clock)
        }
        return dial
    }

    _getClock() {
        const clock = maptalks.DomUtil.createEl('div', this.CLOCK)
        return clock
    }

    _getNeedle() {
        const needle = maptalks.DomUtil.createEl('div', this.NEEDLE)
        return needle
    }
}

CompassControl.mergeOptions(options)
