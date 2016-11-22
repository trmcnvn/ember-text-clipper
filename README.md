# ember-text-clipper

[![npm version](https://badge.fury.io/js/ember-text-clipper.svg)](http://badge.fury.io/js/ember-text-clipper)
[![Build Status](https://travis-ci.org/vevix/ember-text-clipper.svg?branch=master)](https://travis-ci.org/vevix/ember-text-clipper)
[![Ember Observer Score](https://emberobserver.com/badges/ember-text-clipper.svg)](https://emberobserver.com/addons/ember-text-clipper)

An [Ember CLI](https://ember-cli.com/) addon for [text-clipper](https://github.com/arendjr/text-clipper).
Which is a performant and HTML-safe text clipper.

_Currently using my [text-clipper](https://github.com/vevix/text-clipper) fork._

## Installation

`$ ember install ember-text-clipper`

## Usage

```hbs
{{text-clipper text}}
```
#### Custom Length

_Default is 200_

```hbs
{{text-clipper text length=60}}
```

#### Disable Expand/Collapse

_Default is true, `canCollapse` will match `canExpand` if not defined_

```hbs
{{text-clipper text canExpand=false canCollapse=false}}
```

#### Custom Action text

_Default is `more` and `less`_

```hbs
{{text-clipper text expandText="expand" collapseText="collapse"}}
```

#### text-clipper options

see text-clipper [documentation](https://github.com/arendjr/text-clipper#options)

```hbs
{{text-clipper text options=(hash ...)}}
```

## Development

#### Installation

* `git clone <repository-url>` this repository
* `cd ember-text-clipper`
* `npm install`
* `bower install`

#### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

#### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

#### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## License

[MIT](https://github.com/vevix/ember-text-clipper/blob/master/LICENSE.md)
