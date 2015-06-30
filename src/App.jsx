import React from 'react';
import SofarBox from 'components/SofarBox';


const App = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div className="App container">
        <h1>Sofar</h1>
        <SofarBox/>
      </div>
    );
  },

});

export default App;
