# Rick and Morty

## Description

This app is a proyect from React module of master frontend of lemoncode. Features:

- Get a list of characters from an API.
- Filter those characters by diferent properties.
- Pagination
- Debounnce filter by name

## Dependencies

- react-router-dom: how to setup rutes with TS and use them.
- SWC: library for catching data from server. In this proyect I use it for pagination and caching data for next pages in andavance to improve UI experience
- Styled-Componentes: CSS-in-JS library used for styling.
  -use-debounnce: hook used for debounnce

## Architecture

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe74ee1a9-6103-494c-ae69-2fdd762b3995%2FUntitled.png?table=block&id=9bcfba04-b166-4ea6-87bd-150eb0b3c410&spaceId=edc7e581-e050-4421-a5dd-441d70972874&width=2000&userId=8be32c3a-e00c-459a-a57c-9334f0c98d29&cache=v2)

## Instalation

Clone repository and and install dependencies:

```sh
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build:prod
```

Production files goes to /dist folder

### Production dev

```bash
npm run build:dev
```

Production files goes to /dist folder

### Bundler Analyzer

```bash
npm run build:perf
```

helps to inspect the bundle

## Author

- [Ramon Ruiz](https://github.com/ramonrp)

## License

This project is open source and available under the [MIT License](LICENSE).
