# maptalks.control.compass

A maptalks Compass Control.

## Examples

### [DEMO](https://cxiaof.github.io/maptalks.control.compass/demo/index.html)

## Install

-   Install with npm: `npm install maptalks.control.compass`.
-   Download from [dist directory](https://github.com/cXiaof/maptalks.control.compass/tree/master/dist).
-   Use unpkg CDN: `https://unpkg.com/maptalks.control.compass/dist/maptalks.control.compass.min.js` and `https://unpkg.com/maptalks.control.compass/css/maptalks.control.compass.css`

## Usage

As a plugin, `maptalks.control.compass` must be loaded after `maptalks.js` in browsers. You can also use `'import { CompassControl } from "maptalks.control.compass"` when developing with webpack.

```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/maptalks.control.compass/dist/maptalks.control.compass.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/maptalks.control.compass/css/maptalks.control.compass.css">
<script>
    // new Control: CompassControl, and add to map.
    new maptalks.CompassControl({
        position: 'top-right'
    }).addTo(map)
</script>
```

## API Reference

```javascript
new maptalks.CompassControl(options)
```

-   options
    -   position **String** like other maptalksControl.
    -   transform **String** the compass dom's style: 'transform: %s'.

## Contributing

We welcome any kind of contributions including issue reportings, pull requests, documentation corrections, feature requests and any other helps.

## Develop

The only source file is `index.js`.

It is written in ES6, transpiled by [babel](https://babeljs.io/) and tested with [mocha](https://mochajs.org) and [expect.js](https://github.com/Automattic/expect.js).

### Scripts

-   Install dependencies

```shell
$ npm install
```

-   Watch source changes and generate runnable bundle repeatedly

```shell
$ gulp watch
```

-   Tests

```shell
$ npm test
```

-   Watch source changes and run tests repeatedly

```shell
$ gulp tdd
```

-   Package and generate minified bundles to dist directory

```shell
$ gulp minify
```

-   Lint

```shell
$ npm run lint
```

## More Things

-   [maptalks.autoadsorb](https://github.com/cXiaof/maptalks.autoadsorb/issues)
-   [maptalks.multisuite](https://github.com/cXiaof/maptalks.multisuite/issues)
-   [maptalks.geosplit](https://github.com/cXiaof/maptalks.geosplit/issues)
-   [maptalks.polygonbool](https://github.com/cXiaof/maptalks.polygonbool/issues)
-   [maptalks.geo2img](https://github.com/cXiaof/maptalks.geo2img/issues)
-   [maptalks.control.compass](https://github.com/cXiaof/maptalks.control.compass/issues)
