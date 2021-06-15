import React from 'react';
import ItenListConteiner from './components/ItenListConteiner';

import Navbars from './components/Navbars';
import ItemCount from './components/ItemCount';
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
    <br/>
    <h1>Tenemos un Stock de 10 botellas</h1>
    <ItemCount/>
    </>
  );
}

export default App;
