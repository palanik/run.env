# run.env
Run apps with .env file.

> Command line tool to execute applications with `.env` file

The tool is based on [dotenv](https://github.com/motdotla/dotenv) library.

## Installation
[![NPM version](https://img.shields.io/npm/v/run.env.svg?style=flat)](https://www.npmjs.org/package/run.env)
```sh
$ npm install -g run.env
```

## Usage

Create a `.env` file with environment variables for your application.

Sample `.env` file
```
DB_HOST=localhost
DB_USER=root
DB_PASS=dadada
```

Now, you can execute your app with `run.env` command.
(No need to include `dotenv` in your code.)

```sh
$ run.env app arg1 arg2 ...
```

Your application will have the environment values from `.env` file.

Example
```
$ run.env node my-node-app.js
```

Pass in the path to your `.env`-file using the `-p` flag:
```
$ run.env -p my/path/env-file node my-node-app.js
```

Run test locally:
1. Change `.env.test` to `.env`
2. Run `npm run test`. This command will create the build and simulate how `run.env` works on `test/test_app.js`
3. If the test passed, it would log _"This is the content of TEST variable"_ which is the value of TEST variable in `.env` file
4. Otherwise, it would log _"No value for process.env.TEST"_ 

## License

  [MIT](LICENSE)
