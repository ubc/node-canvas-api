[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<!-- [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) -->
# Canvas API for Node

Canvas API functions bundled as NPM package for Node.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Canvas domains. 

### Prerequisites

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**. 

### Installion

To use with node:
```bash
$ npm install node-canvas-api
```
Then, in wherever you want to use this package:
```javascript
const canvasAPI = require('node-canvas-api');
```

Attached to the `canvasAPI` are a bunch of functions.  
Add a `.env` file to the root of your directory with `CANVAS_API_TOKEN=` and your token and `CANVAS_API_DOMAIN=` and your Canvas domain + `/api/v1`. For example, `https://ubc.canvas.ca/api/v1`

Run the attached functions!

## Authors

* **Justin Lee** 
https://github.com/justin0022 | justin.lee@ubc.ca

## License

This project is licensed under the MIT License.

