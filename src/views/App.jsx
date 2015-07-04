import React from 'react';
import SofarApp from './SofarApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from 'stores';


const redux = createRedux(stores);

export default class App {

  static displayName = 'App';

  render() {
    return (
      <Provider redux={redux}>
        {() => <SofarApp />}
      </Provider>
    );
  }

}
