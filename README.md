# Cuked
[![Build Status](https://travis-ci.org/eclifford/cuked.svg?branch=master)](https://travis-ci.org/eclifford/cuked) ![](https://david-dm.org/eclifford/cuked.svg)

> Cuked is an automated testing framework combining the power of CucumberJS, PhantomJS, Saucelabs, WD and Chai to make writing tests
fun and easy.

Cuked is an alternative to monolithic testing frameworks that trap you into proprietary abstractions and API's. Cuked is purpose
built to allow you to get the most out the best existing tools by synergizing them together in one
easy to use package.

## Features

- Write your feature specs and step definitions with CucumberJS
- Use the powerful WD fluent chainable API for composable test executions
- Write your assertions beautifully in a human readable format using the power of Chai
- Leverage the power of PhantomJS, Selenium, SauceLabs for seamless integration between optimized local development
and full continious integration support.

## Quick Start

### Installation

```bash
npm install cuked -g
```
### CLI

Cuked provides just enough native options to better facilitate the synergy between **CucumberJS**,
**PhantomJS**, **Selenium**, **SauceLabs**, and **WD.js**.

However, in an effort to keep **Cuked** as flexable as possible all other CLI options are passed through
to their respective binaries. This means that all CLI options from **CucumberJS**, **PhantomJS**, and **Selenium** are
available to you through **Cuked**.

#### Cuked

`path` `remote` `browser` `platform` `version` `name` `debug`

#### CucumberJS
 `grep` `format` `require`

#### PhantomJS
`cookies` `webdriver`  

- [full list](http://phantomjs.org/api/command-line.html)

#### Selenium
`port` `timeout`
- [full list](https://code.google.com/p/selenium/wiki/Grid2)

#### path

The path to your local `CucumberJS` features directory as well as `cuked.js` configuration.

- **command**: `--path`
- **default**: `./features`
- **example usage:**
```
  cuked --path='tests/acceptance/features'
  cuked --path='tests/features'
```

#### remote

The path to the your own Selenium Grid or SauceLabs hub url. Ignore this if your using
`phantomjs` or local `selenium`.

- **command**: `--remote`
- **default**: `http://localhost:4444/wd/hub`
- **example usage:**
```
  cuked --remote=http://yourserver:yourport/wd/hub
  cuked --remote=http://user:key@ondemand.saucelabs.com/wd/hub
```

#### browser

The browser to use. The available options are `phantomjs`, any browser on your local
machine such as `chrome`, `firefox` or any browser available to SauceLabs.

- **command**: `--browser`
- **default**: `phantomjs`
- **example usage**:
```
  cuked --browser=firefox // would use local firefox instance
  cuked --browser=chrome // would use local chrome instance
```
- **notes**
  - Selenium comes bundled with a driver for `firefox`. For other browsers
  you will have to download those drivers.
  - [full list of 3rd party bindings](http://www.seleniumhq.org/download/)


#### platform

If your remote URL is a SauceLabs or Selenium Grid endpoint you may wish to request
a specific platform to run your tests on. If running tests on your local machine this
is ignored.

- **command**: `--platform`
- **default**: `ANY`
- **example usage**:
```
  cuked --platform='Windows 7'
  cuked --platform='OS X 10.8'
```
- **notes**:
  - [https://saucelabs.com/platforms](https://saucelabs.com/platforms)

Type: `String` Default: **ANY**

#### version

If using a **Selenium Grid** or Grid providers such as **SauceLabs** you may wish to
request a specific version of a `browser`.

- **command**: `--version`
- **default**: `ANY`
- **example usage**:
```
cuked --browser='firefox' --version='35' --remote='http://user:key@ondemand.saucelabs.com/wd/hub'
cuked --browser='chrome' --version='35' --remote='http://yourseleniumhub.com:4444/wd/hub'
```

#### name
If using a **Selenium Grid** or Grid providers such as **SauceLabs** you may wish to assign
a test name. In SauceLabs for instance this will appear in your test rules dashboard.

- **command**: `--name`
- **default**: `unknown`
- **example usage**:
```
cuked --name='Acceptance Tests' --browser='firefox' --remote='http://user:key@ondemand.saucelabs.com/wd/hub'
```

#### debug
Whether or not to display debug information. Namely `Webdriver` commands.

- **command**: `--debug`
- **default**: `false`
- **example usage**:
```
cuked --debug'
cuked --debug=true'
```

## FAQ

## Plugins

### Grunt

**plugin coming soon**

### Gulp

**plugin coming soon**

## Contributing

Fork the repo and issue a pull request

## License

The MIT License

Copyright (c) 2015 Eric Clifford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
