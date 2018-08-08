/*!
 * maptalks.control.compass v0.1.0-alpha.1
 * LICENSE : MIT
 * (c) 2016-2018 maptalks.org
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.maptalks = global.maptalks || {})));
}(this, (function (exports) { 'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var options = {
    position: 'top-right'
};

var CompassControl = function (_maptalks$control$Con) {
    _inherits(CompassControl, _maptalks$control$Con);

    function CompassControl() {
        _classCallCheck(this, CompassControl);

        return _possibleConstructorReturn(this, _maptalks$control$Con.apply(this, arguments));
    }

    CompassControl.prototype.buildOn = function buildOn(map) {
        var dom = maptalks.DomUtil.createEl('div', 'maptalks-compass');
        return dom;
    };

    return CompassControl;
}(maptalks.control.Control);

CompassControl.mergeOptions(options);

exports.CompassControl = CompassControl;

Object.defineProperty(exports, '__esModule', { value: true });

typeof console !== 'undefined' && console.log('maptalks.control.compass v0.1.0-alpha.1');

})));
