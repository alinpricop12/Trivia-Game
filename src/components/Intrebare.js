import React, {useEffect, useState} from 'react';
import he from 'he';

export default function Intrebare({setControl, opacity, pointerEventsVariante, setPointerEventsVariante, setCuloareAlegere, setOpacity, setPointerEvents, index_varianta, varianta}) {
let index =  String.fromCharCode(index_varianta + 65);
let [click, setClick] = useState();


useEffect(()=>{
  if(opacity === 0.5){
    setClick('white');
    setControl('');
  }
}, [opacity])


  return (
    <>
    <div className='intrebareWrapper' style={{backgroundColor:click, pointerEvents: pointerEventsVariante}} 
    onClick={()=>{ setCuloareAlegere('white'); setClick('rgb(237, 234, 222)'); setOpacity(1); setPointerEvents('auto'); setPointerEventsVariante('none'); setControl(varianta) }}>
      <div className='index'>{index}</div>
      <div className='intrebare'>{he.decode(varianta)}</div>
    </div>
    </>
  )
}
