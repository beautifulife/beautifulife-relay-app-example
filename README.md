# beautifulife-relay-app-example

A graphql relay client example application, created from my experience

## Directory structure

You should use the structure below

```
root
├── server
└── client
```

## Server Project

This project needs `graphql-client-example-server` as directory name server at client

[graphql-client-example-server](https://github.com/beautifulife/graphql-client-example-server)

## Available Scripts

In the project directory, you can run:

1. Development Environment

```sh
$ yarn install
$ yarn relay
$ yarn start
# visit http://localhost:3000
```

2. Production Environment

```sh
$ yarn install
$ yarn build
$ yarn global add serve
$ serve -s build
```
