'use strict'
import React, {Component} from 'react';
import App from './App.jsx';
import Geosuggest from 'react-geosuggest';
console.log("rendering <searchBar/>");
const searchBar = React.createClass({
  render: function () {
    return (
      <div>
        <Geosuggest />
      </div>
    );
  }
});
export default searchBar