# Electron React Application

A template for creating application based on TypeScript, Electron, React.js, Material-UI and FontAwesome.

## How to use

Apparently, you have to clone the repository before you take any steps.

### Installing dependencies

Run `npm i --development .` to install dependencies. However if you just want
to build a standalone application and `electron-build` has already been
installed globally, you can run `npm i .` to skip the installation of
`electron` and `electron-builder`.

### Preview

If you have made some modification to source files in `src/`, run `npm start`
to preview in your web browser. In this circumstance, `preload.ts` will not
be executed and functions exposed to the renderer process will not be
available.

### Lint

Run `npm run lint` to perform a style check. If you want the source to be
auto-fixed, run `npm run lint:fix` instead.

ESLint and StyleLint are used to lint source files. Configure rules in
`eslintrc.js` and `stylelintrc.json`.

### Build

1. Run `npm run build` to re-compile the project.
2. Run `npm run launch` to launch the application.

### Distribute

Run `npm run dist` to create a distributable installer. File are emitted to
`dist/`

## License

MIT License

## Credit

The template is created by `create-react-app` according to tutorial [React + Electron + Typescript — a dev experience (part 1)](https://medium.com/@SzybkiSasza/react-electron-typescript-a-dev-experience-part-1-f507e98dd4d9) and [React + Electron + Typescript — A Dev Experience (part 2)](https://medium.com/swlh/react-electron-typescript-a-dev-experience-part-2-1dbbce43fcee) by [@SzybkiSasza](https://github.com/SzybkiSasza)
