import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css'
import {Container} from 'Components/containers/Container'
import background from 'Images/background.png'

ReactDOM.render(
  <Container image={background}/>,
  document.getElementById('root')
);

module.hot.accept();