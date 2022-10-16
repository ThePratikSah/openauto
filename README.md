# Open Auto Test Task

In this project I've used the following dependencies

- [x] node -v16.14.2
- [x] react -v18.2.0
- [x] react-dom -v18.2.0
- [x] next -v12.3.1
- [x] formik -v2.2.9
- [x] mongodb -v4.10.0

## Author

- [@ThePratikSah](https://www.github.com/ThePratikSah)

## API End Point

1. __Submit Form__ - _POST_ : `{url}`/api/form

Body Parameters

| Parameter | Type   | Description          |
|-----------|--------|----------------------|
| name      | string | Name of the visitor  |
| email     | string | Email of the visitor |


## To use Node as per my version
```
# make sure nvm is installed on your machine
nvm use
```

## Set NODE_ENV Variable (Windows)

```
SET MONGODB=mongodb+srv://username:password@openauto-demo.zxdes.mongodb.net/?retryWrites=true&w=majority
SET DB=openauto
```

## Set NODE_ENV Variable (Linux)

```
export MONGODB=mongodb+srv://username:password@openauto-demo.zxdes.mongodb.net/?retryWrites=true&w=majority
export DB=openauto
```

## Install MongoDB

https://www.mongodb.com/try/download/community2

## Add Dependencies

```
npm install || yarn
```

## Start Server
```
npm run dev || yarn dev
```
