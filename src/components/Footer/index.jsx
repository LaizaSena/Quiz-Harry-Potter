import React from 'react';

import GitHub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';

import './style.css';

function Index() {
  return (
    <footer className='container-footer'>
      <h3>Desenvolvido por Laiza Sena</h3>
      <div>
        <a href='https://github.com/LaizaSena' target='blank'><img src={GitHub} width='40px' /></a>
        <a href='https://www.linkedin.com/in/laiza-sena-ds/' target='blank'><img src={Linkedin} width='40px' /></a>
      </div>
    </footer>
  )
}

export default Index
