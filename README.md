![cypress](https://github.com/developer239/node-typescript-react-web/workflows/cypress/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/6d7b91d3589966a95878/maintainability)](https://codeclimate.com/github/developer239/node-typescript-react-web/maintainability)
[![Dependabot](https://badgen.net/dependabot/developer239/node-typescript-react-web/166889445?icon=dependabot)](https://dependabot.com/)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://www.typescriptlang.org/)

## Node Typescript React Web

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Demo application is running [here](https://node-typescript-react-web.herokuapp.com).

📘 Backend API is running [here](https://node-typescript-api.herokuapp.com/). You can find the source code of the backend application [here](https://github.com/developer239/node-typescript-api).

## Development

1. Install dependencies: `yarn install`
2. Start development server: `yarn dev`

## Useful Commands

- `yarn format` Prettify source code
- `yarn lint:ts` Show ts errors
- `yarn lint:css` Show css errors
- `yarn test` Run tests
- `cypress:open` open cypress client
- `cypress:run` run cypress

## Deployment on Heroku

This application is Heroku ready.

1. Install Heroku CLI: `brew tap heroku/brew && brew install heroku`
2. Login: `heroku login`
3. Go to your app folder: `cd ~/node-typescript-react-web`
4. Create new project on Heroku `heroku create`

You can find more information [here](https://devcenter.heroku.com/articles/heroku-cli).
