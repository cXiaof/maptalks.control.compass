const options = {
  position: 'top-right',
  backgroundColor: '#172029',
  transform: '',
  resetViewTriggers: null,
}

export class CompassControl extends maptalks.control.Control {
  constructor(options) {
    super(options)
    this.COMPASS = 'maptalks-compass'
    this.DIAL = 'maptalks-compass-dial'
    this.NEEDLE = 'maptalks-compass-needle'
    this.CLOCK = 'maptalks-compass-dial-clock'
  }

  buildOn() {
    const compass = this._getCompass()
    this._compass = compass
    const transform = this.options['transform']
    const bgColor = this.options['backgroundColor']
    let style = `background-color: ${bgColor};`
    if (transform) style += ` transform: ${transform};`
    maptalks.DomUtil.setStyle(this._compass, style)
    this._bindResetViewTrigger()
    return compass
  }

  onAdd() {
    this.map = this.getMap()
    this.map.on('animating mousemove touchmove', this._rotateCompass, this)
    this._rotateCompass()
  }

  onRemove() {
    this.map.off('animating mousemove touchmove', this._rotateCompass, this)
    this._compass.remove()
    delete this._compass
    delete this._bearing
    delete this._needle
    delete this.map
  }

  _rotateCompass() {
    let bearing = this.map.getBearing().toFixed(1)
    if (bearing <= 180) bearing *= -1
    if (bearing !== this._bearing) {
      this._bearing = bearing
      maptalks.DomUtil.setStyle(
        this._needle,
        `transform: rotate(${this._bearing}deg);`,
      )
    }
  }

  _getCompass() {
    const compass = this._createDivWithClassName(this.COMPASS)
    const dial = this._getDial()
    const needle = this._getNeedle()
    compass.appendChild(dial)
    compass.appendChild(needle)
    this._bindEventListener(compass)
    return compass
  }

  _getDial() {
    const dial = this._createDivWithClassName(this.DIAL)
    for (let i = 0; i < 4; i++) {
      const clock = this._getClock()
      dial.appendChild(clock)
    }
    return dial
  }

  _getClock() {
    return this._createDivWithClassName(this.CLOCK)
  }

  _getNeedle() {
    const needle = this._createDivWithClassName(this.NEEDLE)
    this._needle = needle
    return needle
  }

  _createDivWithClassName(name) {
    return maptalks.DomUtil.createEl('div', name)
  }

  _bindEventListener(compass) {
    compass.onclick = (e) => {
      this.fire('click', { domEvent: e })
    }
    compass.ondblclick = (e) => {
      this.fire('dblclick', { domEvent: e })
    }
    compass.oncontextmenu = (e) => {
      this.fire('contextmenu', { domEvent: e })
    }
  }

  _bindResetViewTrigger() {
    const trigger = this.options['resetViewTriggers']
    if (!trigger) return
    let eventsOn = ''
    let options
    if (typeof trigger === 'string') {
      eventsOn = trigger
    } else if (Array.isArray(trigger)) {
      eventsOn = trigger[0]
      options = trigger[1]
    }
    this.on(eventsOn, this._resetView.bind(this, options))
  }

  _resetView(options) {
    const view0 = { pitch: 0, bearing: 0 }
    this.map.animateTo(view0, options)
  }
}

CompassControl.mergeOptions(options)
