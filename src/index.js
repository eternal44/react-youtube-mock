import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDytR0Dz4b-fX6MsfHIpC_v7PQeqaJh2m0'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
