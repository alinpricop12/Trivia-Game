import React from 'react'
import logo from '../svg/undraw_quiz_nlyh.svg'

export default function title() {

  return (
    <div className='titleWrap'>
        <div className='titleWrap_c1'>Quizzically</div>
        <div className='titleWrap_c2'><img className='svg-logo' src={logo} alt="logo" /></div>
        <div className='titleWrap_c3'>Challenged</div>
    </div>
  )
}
