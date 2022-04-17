import React, {useEffect, useState} from 'react';
import './css/style.css';
import  Title from './components/title.js';
import Menu from './components/Menu.js';
import Intrebari from './components/Intrebari';
import Loader from './components/Loader';
import Final from './components/Final';


export default function App() {
  let [displayInceput, setDisplayInceput] = useState('initial');
  let [informatiiExtrase, setInformatiiExtrase] = useState(0);
  let [dificulty, setDificulty] = useState('');
  let [nrIntrebari, setNrIntrebari] = useState(1);
  let [intrebari, setIntrebari]= useState();
  let [numarCorecte, setNumarCorecte] = useState();
  let [copieNext, setCopieNext] = useState();


  async function fetchData(){
    let rezultat = await fetch(`https://opentdb.com/api.php?amount=${nrIntrebari}&difficulty=${dificulty.toLowerCase()}`);
    let intrebari = await rezultat.json(); //.json()  the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
    setInformatiiExtrase(1);
    setIntrebari(intrebari);
  }


 useEffect(()=>{
  if(dificulty !== '' && nrIntrebari >= 1){
    fetchData();
  }
 },[dificulty])

  return (
    <div className='wrappperAll'>
      <div className='quizWrapper'>
        <div className='inceput' style={{display:displayInceput}}>
          <Title display={displayInceput} />
          <Menu display={displayInceput} 
          setDisplay={setDisplayInceput} 
          setDificulty={setDificulty}
          setNrIntrebari={setNrIntrebari} />
        </div>
        {displayInceput !== 'initial' && informatiiExtrase === 0 && intrebari === undefined && <Loader/>}
        {displayInceput !=='initial' && intrebari !==undefined &&
          <Intrebari intrebari={intrebari} setNumarCorecte={setNumarCorecte} setCopieNext = {setCopieNext} />
        }
        {numarCorecte === 'undefined' && setNumarCorecte(0)} 
        {copieNext && 
        <Final copieNext={copieNext} numarCorecte= {numarCorecte}  />
        }
       

      </div>
     
    </div>
  
  )
}
