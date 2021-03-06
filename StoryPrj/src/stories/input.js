// Generated by CoffeeScript 2.1.0
var CFX, todosStore;

import {
  storiesOf
} from '@storybook/react';

import {
  prefixDom
} from 'cfx.dom';

import 'antd-mobile/dist/antd-mobile.css';

import Todos from '../components';

import {
  Provider
} from 'cfx.react-redux';

import {
  store
} from 'ReduxServ';

todosStore = store.store;

CFX = prefixDom({Todos, Provider});

export default function() {
  return storiesOf('Todos', module).addDecorator(function(story) {
    var c_Provider;
    ({c_Provider} = CFX);
    return c_Provider({
      store: todosStore
    }, story());
  }).add('Todos', () => {
    var c_Todos;
    ({c_Todos} = CFX);
    return c_Todos({});
  });
};
