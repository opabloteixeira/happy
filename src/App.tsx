import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';

import 'leaflet/dist/leaflet.css';

function App() {
   return (
      <>
      <Routes />
      <GlobalStyle />
      </>
   );
}

export default App;
