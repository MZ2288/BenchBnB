var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app'),
    Index = require('./components/index'),
    Search = require('./components/search'),
    BenchStore = require('./stores/bench.js'),
    ApiUtil = require('./util/api_util.js'),
    routes = <Route path="/" component={Search}></Route>;

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
