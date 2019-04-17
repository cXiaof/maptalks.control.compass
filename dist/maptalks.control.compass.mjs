/*!
 * maptalks.control.compass v0.1.0-beta.2
 * LICENSE : MIT
 * (c) 2016-2019 maptalks.org
 */
function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var options = {
    position: 'top-right',
    backgroundColor: '#172029',
    transform: ''
};

var CompassControl = function (_maptalks$control$Con) {
    _inherits(CompassControl, _maptalks$control$Con);

    function CompassControl(options) {
        _classCallCheck(this, CompassControl);

        var _this = _possibleConstructorReturn(this, _maptalks$control$Con.call(this, options));

        _this.COMPASS = 'maptalks-compass';
        _this.DIAL = 'maptalks-compass-dial';
        _this.NEEDLE = 'maptalks-compass-needle';
        _this.CLOCK = 'maptalks-compass-dial-clock';
        return _this;
    }

    CompassControl.prototype.buildOn = function buildOn(map) {
        var compass = this._getCompass();
        this._compass = compass;
        var transform = this.options['transform'];
        var bgColor = this.options['backgroundColor'];
        var style = 'background-color:' + bgColor + ';';
        if (transform) style += ' transform:' + transform + ';';
        maptalks.DomUtil.setStyle(this._compass, style);
        return compass;
    };

    CompassControl.prototype.onAdd = function onAdd() {
        this.map = this.getMap();
        this.map.on('moveing', this._rotateCompass, this);
        this.map.on('mousemove', this._rotateCompass, this);
        this.map.on('viewchange', this._rotateCompass, this);
    };

    CompassControl.prototype.onRemove = function onRemove() {
        this.map.off('moveing', this._rotateCompass, this);
        this.map.off('mousemove', this._rotateCompass, this);
        this.map.off('viewchange', this._rotateCompass, this);
        removeDomNode(this._compass);
        delete this._deg;
        delete this._compass;
        delete this._needle;
        delete this.map;
    };

    CompassControl.prototype._rotateCompass = function _rotateCompass() {
        var bearing = parseInt(this.map.getBearing(), 0);
        if (bearing <= 180) bearing *= -1;
        if (bearing !== parseInt(this._deg, 0)) {
            this._deg = bearing;
            maptalks.DomUtil.setStyle(this._needle, 'transform:rotate(' + this._deg + 'deg);');
        }
    };

    CompassControl.prototype._getCompass = function _getCompass() {
        var compass = this._createDivWithClassName(this.COMPASS);
        var dial = this._getDial();
        var needle = this._getNeedle();
        compass.appendChild(dial);
        compass.appendChild(needle);
        return compass;
    };

    CompassControl.prototype._getDial = function _getDial() {
        var dial = this._createDivWithClassName(this.DIAL);
        for (var i = 0; i < 4; i++) {
            var clock = this._getClock();
            dial.appendChild(clock);
        }
        return dial;
    };

    CompassControl.prototype._getClock = function _getClock() {
        return this._createDivWithClassName(this.CLOCK);
    };

    CompassControl.prototype._getNeedle = function _getNeedle() {
        var needle = this._createDivWithClassName(this.NEEDLE);
        this._needle = needle;
        return needle;
    };

    CompassControl.prototype._createDivWithClassName = function _createDivWithClassName(name) {
        return maptalks.DomUtil.createEl('div', name);
    };

    return CompassControl;
}(maptalks.control.Control);

CompassControl.mergeOptions(options);

export { CompassControl };

typeof console !== 'undefined' && console.log('maptalks.control.compass v0.1.0-beta.2');
