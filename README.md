[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
# Canvas API Recipes for Node

The Canvas API client exposes many useful "recipes" for automating tedious or otherwise impossible tasks to do via the website. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Canvas domains. 

There are two ways to use this package. You can download it as is, and run it that way, or you can import via NPM as a package: `npm i node-canvas-api`.

### Prerequisites

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**. 

### Installing and Setup

1. First, clone this repo. `git clone https://github.com/UBC-LFS/canvas-api.git`
2. Then cd into the repo. `cd canvas-api`
3. Run the installation script. `npm install` (If you see `babel-node: command not found`, you've missed this step.)
4. Create a .env file. `touch .env`
5. In the .env file, add `CANVAS_API_TOKEN=` and your API token, and `CANVAS_API_DOMAIN=` and your Canvas domain.
6. Import the scripts from the `src/recipes` folder in `index.js` that you would like to run.
7. Run using `node index.js`.

## Running the tests

`npm test` starts Jest in watch mode. To quit, `control + c`. 

## Authors

* **Justin Lee** 
https://github.com/justin0022 | justin.lee@ubc.ca

## License

This project is licensed under the MIT License.

