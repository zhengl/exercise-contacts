# Contacts [![Build Status](https://travis-ci.com/zhengl/exercise-contacts.svg?branch=dev)](https://travis-ci.com/zhengl/exercise-contacts)

an exercise of building a contact book with react and node
![app](https://user-images.githubusercontent.com/728854/41218965-7fa929da-6d8f-11e8-8f61-2f7567c6e9e5.png)
## How to start
```sh
npm install
npm run db:init
npm run build
npm run start
```

## How to develop
```sh
npmgithub
travis
mixpanel
app install
npm run dev
```

## How to deploy behind a proxy, like Heroku

In order to build the front end scripts with predefined information of target server, the following environment variables are required

```sh
CLIENT_PROTOCOL=https CLIENT_HOST=boiling-sea-76071.herokuapp.com CLIENT_PORT=443 npm run build
PORT=8080 npm run start
```
Also, you may choose other process management tools to start the application.
- forever
```
forever start -c "npm start"
```
- pm2
```
pm2 start npm" -- start
```


## Technical choices

According to the requirements of this exercise and the schedule, the following frameworks/libraries/tools are used to build the application

- [Next.js](https://github.com/zeit/next.js/) a React framework with server-side-rendering
- [Express.js](https://github.com/expressjs/express) a web framework for node
- [Styled Components](https://github.com/styled-components/styled-components) a library to write components withj scoped styles
- [Cypress](https://www.cypress.io/) a web end to end testing framework *NOT* on top of Selenium
- [Github](http://github.com/) a development platform to host the code and manage development process
![github](https://user-images.githubusercontent.com/728854/41218974-84f5c8c6-6d8f-11e8-8f5f-3d5db7e19ab7.png)
- [ESlint](https://github.com/eslint/eslint) a javascript linter
- [Travis](https://travis-ci.com/) a CI platform with nice integration with github
![travis](https://user-images.githubusercontent.com/728854/41218982-893d3fe0-6d8f-11e8-92bc-2ddc7dfbd04f.png)
- [Heroku](http://heroku.com/) a cloud application platform
- [Mixpanel](https://mixpanel.com/) a cloud user tracking platform
![mixpanel](https://user-images.githubusercontent.com/728854/41218978-87fbc566-6d8f-11e8-8d2d-2f6a3b236687.png)


## Architecture

Considering the low complexity of this application, I divided it into layers as follows

* Front-end
  * View (pages and components)
  * Store (the single source of truth)
  * DAO (abstraction of data fetching with API)
* Back-end
  * Server-rendering (render the page on initial request)
  * API (RESTful API's)
  * DAO (abstraction of data fetching with database)

## Development Process

In this task, I setup some processes to help the development and demonstrates some best practices
* Gitflow. A branching strategy to help development activities. All [feature and bugfixes](https://github.com/zhengl/exercise-contacts/pulls?utf8=%E2%9C%93&q=is%3Apr) and tracked in thie model.
* Continuous Integration/Delivery. Each new feature and bugfix are checked by CI (Travis) and deployed to target server if it passes (in progress)

## Performance Improvement

To avoid over-optimization, I list the steps of improvement (and the potential) on each layer with priority

* Front-end
  * Server-rendering. It accelerates the First Meaningful Paint
  * Input debounce. The amount of request is reduced on typing
  * Offline First (in progress). As all contacts received from back end are put into store and it can be cached on browser, we may lookup store first when it is disconnected
* Back-end
  * Keys and indexes. As there are only 10k records, introducing foreign keys is good enough after careful monitoring. If needed, we may have indexes and other improvements on database queries.
 * Monitoring and tracking
   * Beside Mixpanel, we can integrate a monitoring platform, e.g. [New Relic](https://newrelic.com/), to records metrics of the whole journey of each request and collect crash reports.


