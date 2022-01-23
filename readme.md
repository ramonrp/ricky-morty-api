# Rick and Morty

## Description

This app is a proyect from React module of master frontend of lemoncode. Features:

- Get a list of characters from an API.
- Filter those characters by diferent properties.
- Pagination
- Debounnce filter by name

## Result

You can find live site in below link

[Ricky and Morty Character Searcher](https://rick-morty-api-dun.vercel.app/)

## Dependencies

- react-router-dom: how to setup rutes with TS and use them.
- SWC: library for catching data from server. In this proyect I use it for pagination and caching data for next pages in andavance to improve UI experience
- Styled-Componentes: CSS-in-JS library used for styling.
  -use-debounnce: hook used for debounnce

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
