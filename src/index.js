import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css'
import {Auth} from 'Pages'


ReactDOM.render(
  <Auth />,
  document.getElementById('root')
);

module.hot.accept();