// Generated by CoffeeScript 2.1.0
var CFX;

import {
  storiesOf
} from '@storybook/react';

import {
  prefixDom
} from 'cfx.dom';

import 'antd-mobile/dist/antd-mobile.css';

import Input from '../../components/input';

CFX = prefixDom({Input});

export default function() {
  return storiesOf('TodosState', module).add('All', () => {
    var c_Input;
    ({c_Input} = CFX);
    return c_Input({
      filter: 'all',
      disable: false,
      selector: function(filter) {
        return console.log(filter);
      },
      blur: function(v) {
        return console.log(v);
      }
    });
  });
};