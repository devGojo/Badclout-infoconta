import './App.scss';
import { useState } from 'react';
import smirk from '../src/assets/images/bad-yellow.png';
import slogann from '../src/assets/images/yellow bad 1.png';
import profile from '../src/assets/images/profile.png';
import black from '../src/assets/images/profileblack.png';
import edit from '../src/assets/images/edit.png';
import pending from '../src/assets/images/pending.png';
import axios from 'axios';


function App() {
  return (
     <main>
      <header>
        <img src={smirk} className='smirk' />
        <img src={slogann} className='slogan'/>
        <img src={black} className='Black'/>
        <button className='acess'>Acessar a loja</button>
      </header>
      <section>
          <div className='info'>
            <p>Informações da conta</p>
          </div>

          <div className='left'> 
          <img src={profile} className='profile'/> <h1>Perfil</h1>
          
            <h1>Pedidos</h1><img src={pending} className='pending'/>
          </div>
          
                <div className='domo'>
                  <span>Nome: </span> <br />
                  <span>Tel: </span> <br />
                 <span>CEP: </span> <br />
                <span>Email: </span> <br />
                <span>Senha: </span><br />
                </div>

          <div>
            <button className='GetOff'>Sair</button>
          </div>

      </section>
    </main>
  );
}

export default App;
