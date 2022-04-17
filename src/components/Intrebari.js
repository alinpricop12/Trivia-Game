import React, {useEffect, useState} from 'react';
import Intrebare from './Intrebare.js';
import he from 'he';


export default function Intrebari({intrebari, setNumarCorecte, setCopieNext}) {
    let [next, setNext] = useState(0);
    let [curentQuestion, setCurentQuestion] = useState(1);
    let [opacity, setOpacity] = useState(0.5);
    let [pointerEvents, setPointerEvents] = useState('none');
    let [pointerEventsVariante, setPointerEventsVariante] = useState ('auto');
    let [culoareAlegere, setCuloareAlegere] = useState('white');
    let [control, setControl] = useState();
    let [nrRaspunsuriCorecte, setNrRaspunsuriCorecte] = useState(0);
    let [displayWrapper, setDisplayWrapper] = useState('flex');
    let [varianteRaspunsShuffle, setVarianteRaspunsShuffle] = useState([]);


    useEffect(()=>{
      if(control === intrebari.results[next].correct_answer)
      {
        setNrRaspunsuriCorecte(previousNr=>previousNr+1);
      }
    }, [control])

    
    useEffect(()=>{
      if(next + 1 > intrebari.results.length)
      {
        setDisplayWrapper('none');
        setCopieNext(next);
        setNumarCorecte(nrRaspunsuriCorecte);
      }
      
      setVarianteRaspunsShuffle(functie_shuffle(variante_raspuns))
      
    }, [next])


    
  //adaugarea tuturor variantelor de raspuns intr-un vector
    let variante_raspuns=[];
    if(next < intrebari.results.length){
      variante_raspuns[0] =  intrebari.results[next].correct_answer;
      for(let i=0; i<intrebari.results[next].incorrect_answers.length; i++){
        variante_raspuns[i+1] = intrebari.results[next].incorrect_answers[i];
      }
    }
  

    //functie de randomizare a variantelor de raspuns pt intrebare
    let functie_shuffle = (array)=>{
      let oldElement;
      for (let i = array.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        oldElement = array[i];
        array[i] = variante_raspuns[rand];
        array[rand] = oldElement;
    }
      return array;
    }


  
     
    //afisare variante de raspuns
      let componenta_intrebari = varianteRaspunsShuffle.map(varianta=>{
      return <Intrebare key={varianteRaspunsShuffle.indexOf(varianta)}
       index_varianta ={varianteRaspunsShuffle.indexOf(varianta)}
       varianta = {varianta}
       setOpacity = {setOpacity}
       setPointerEvents = {setPointerEvents}
       culoareAlegere = {culoareAlegere}
       setCuloareAlegere = {setCuloareAlegere}
       pointerEventsVariante = {pointerEventsVariante}
       setPointerEventsVariante = {setPointerEventsVariante}
       opacity = {opacity}
       setControl = {setControl}
       />
      })

    console.log(intrebari.results[next]);

  return (
    <div className='intrebariWrapper' style={{display:displayWrapper}}>
      <div className='child'>
        {next < intrebari.results.length && he.decode(intrebari.results[next].question)}
      </div>
      <div className='child'>
         {next < intrebari.results.length && varianteRaspunsShuffle != null && componenta_intrebari}
      </div>
      {next < intrebari.results.length && 
        <div  className='child'>
          <div className='nrIntrebare'>Question: {curentQuestion}/{intrebari.results.length}</div>
          <button id='buttonNext' className='next' style={{opacity: opacity, pointerEvents: pointerEvents}} onClick={()=>{ 
          setCurentQuestion(previousQuestionNr =>previousQuestionNr+1);
          setOpacity(0.5);
          setPointerEvents('none');
          setPointerEventsVariante('auto');
          setNext(previousNext => previousNext +1);
          }}>
            Next</button>
      </div>}
    </div>
  )
}
