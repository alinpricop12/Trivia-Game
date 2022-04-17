import React, { useState } from 'react'

export default function (props) {
    let{
        setDisplay,
        setDificulty,
        setNrIntrebari
     } = props;
    let dificultati = ['Easy','Medium','Hard'];
    let [dificulty,setDificultate] = useState(dificultati[0]);
    let [nrIntrebari,setNrQuestions] = useState(1);


  return (
    <div className='menuWrapper' >
        <div className='menu'>
            <button className='btn_menu' onClick={()=>{setDificulty(dificulty); setNrIntrebari(nrIntrebari); setDisplay('none');}}>Play</button>
            <div className='dificulty_menu'>
                <p className='dimensiune_culoare'>Dificulty:</p>
                <select onChange={(e)=>{setDificultate(e.target.value);}}>
                    <option value="Easy">{dificultati[0]}</option>
                    <option value="Medium">{dificultati[1]}</option>
                    <option value="Hard">{dificultati[2]}</option>
                </select>
            </div>
            <div className='nr_intrebari'>
                <p className='dimensiune_culoare'>Number of questions:</p>
                <input type="number" value={nrIntrebari} min={1} max={50}  onChange={(e)=>
                    {if(e.target.value >= 1 && e.target.value <= 50 )
                        setNrQuestions(e.target.value)
                        else
                        {
                            alert('Please insert a number between 1 and 50');
                        }
                    }
                    }/>
            </div>
            <div className='instructiuni'>
                <p className='intructiuni-child1'>Instructions</p>
                <p className='intructiuni-child2'> Try to answer to all the questions. The questions are from various fields and are in random order. At the end, the statistics of your answers will be displayed.</p>
            </div>
        </div>
    </div>
  )
}
