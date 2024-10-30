[![npm version](https://badge.fury.io/js/node-canvas-api.svg)](https://badge.fury.io/js/node-canvas-api)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Canvas LMS API for Node.js
Canvas API functions bundled as a NPM package for Node.js. Note: this package no longer supports CJS as of [version 2.0.0](https://www.npmjs.com/package/node-canvas-api/v/2.0.0). If you need CJS support, please use [version 1.8.0](https://www.npmjs.com/package/node-canvas-api/v/1.8.0).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Canvas domains.

### Prerequisites

1. **Install [Node LTS (20 or greater)](https://nodejs.org)**.

### Installation

To use with NodeJS:
```bash
$ npm install node-canvas-api
```

Rename the `sample.env` file to `.env` and add your institution's domain and API access token.

Attached to the `canvasAPI` are a [bunch of functions](https://github.com/ubc/node-canvas-api/tree/master/src).
Run the attached functions!

### Example Usage

#### Get information about self:
```js
import { getSelf } from 'node-canvas-api'

getSelf().then(x => console.log(x))
```

#### Get students in a course:
```js
import { getUsersInCourse, getOptions } from 'node-canvas-api'

getUsersInCourse(12345, getOptions.users.enrollmentType.student) // first argument is Canvas course ID
  .then(students => console.log(students))
```

## Contribute
Contributions are welcome and greatly appreciated!

### How to contribute
1. Create an [issue](https://github.com/ubc/node-canvas-api/issues) describing what contribution you are planning to make.
1. Fork the repo.
1. Add your contributions.
1. Once you're happy with your contribution, open an [pull request](https://github.com/ubc/node-canvas-api/pulls) and I'll take a look.

## Usage
* [Canvas Rubrics](https://github.com/ubc/canvas-rubric)
* [Canvas Discussions](https://github.com/ubc/canvas-discussion)
* [Canvas Syllabus](https://github.com/UBC-LFS/lfs-canvas-syllabus)

## License

This project is licensed under the MIT License.
