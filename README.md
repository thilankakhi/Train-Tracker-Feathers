# traintrackerserver

> backend

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/traintrackerserver; npm install
    ```

3. Start your app

    ```
    npm start
    ```
## Endpoints

### SignUp 
1. URL :
    ```
    http://localhost:3030/users/
    ```
2. METHOD :
    ```
    POST
    ```
3. BODY :
    ```
    {
        "email" : "example@example.com",
        "password" : "password",
        "name" : "name"
    }
    ```

### Authentication
1. URL :
    ```
    http://localhost:3030/authentication/
    ```
2. METHOD :
    ```
    POST
    ```
3. BODY :
    ```
    {
        "email" : "example@example.com",
        "password" : "password",
        "strategy" : "local"
    }
    ```
Response will contain generated `JWT` and `email` and `name` of the user. `id` of the user is encoded in the `JWT`.
## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
