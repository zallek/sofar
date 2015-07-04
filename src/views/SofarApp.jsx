import React from 'react';
import SofarBox from 'views/SofarBox';


export default class SofarApp {

  static displayName = 'SofarApp';

  render() {
    return (
      <div className="SofarApp container">
        <h1>Sofar</h1>
        <SofarBox/>
      </div>
    );
  }

}
