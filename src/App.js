import React from 'react';
import ItenListConteiner from './components/ItenListConteiner';

import Navbars from './components/Navbars';

function App() {
  const nombre='Diego';
  return (
    <>
    <div>
     <header>
     <Navbars/>
     
     </header>
     <ItenListConteiner greeting={nombre}></ItenListConteiner>
    </div>
    </>
  );
}

export default App;
