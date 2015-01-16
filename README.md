# Testudo

> Testudo is an opinionated automated testing framework combining the best of CucumberJS, PhantomJS, Saucelabs, WD and Chai to make writing tests
fun and easy.

## Features

- Support for parameterized media image services such as Adobe Scene7
- Support for declarative images per breakpoint if you want to serve your own responsive images
- Built in customizable breakpoint detection/notification for use in responsive grids such as
those found in Bootstrap and Foundation
- No third party libraries required
- Non blocking script

## Quick Start

### Installation

```bash
npm install testudo
```

### CLI

#### Options

```
 --browser
 --config

```

#### --browser

The browser to use. The available options are `phantomjs`, any browser on your local
machine such as `chrome`, `firefox` or any browser available to SauceLabs.

Type: `String` Default: **phantomjs**

#### --remote

The path to the your own Selenium Grid or SauceLabs hub url. Ignore this if your using
`phantomjs` or local `selenium`.

Type: `String` Default: **http://localhost:4444/wd/hub**

### Grunt

### Gulp

### Contributing

Fork the repo and issue a pull request

### License

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
