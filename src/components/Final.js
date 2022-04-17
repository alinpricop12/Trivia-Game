import React from 'react'
import 'chart.js/auto';
import {Pie} from 'react-chartjs-2'

export default function Final({copieNext, numarCorecte}) {
    let graph = {
        labels: ['Correct', 'Wrong'],
        datasets: [
            {
                label: 'Graph for answers',
                data: [numarCorecte, copieNext-numarCorecte],
                backgroundColor:[
                    'rgb(80, 200, 120)',
                    'rgb(255, 99, 132)'
                ],
                hoverOffset: 4,
            }
        ],
        
    };
  return (
    <div className='ultimaParte'>
        <div className='results'>Results</div>
        <div className='graph'>
            <div className='scrisGrafic'>
                Statistics of answers:
            </div>
            <div className='pieChart'>
                <Pie
                data={graph}
               
                options={{
                    plugins:{
                    maintainAspectRatio:false,
                    legend:{
                        display:true,
                        position:'bottom'
                          },
                    responsive:true
                    }
                }
                }
                />
            </div>
        </div>
        <div className='score'>
            <div className='scoreTitle'>Score:</div>
            <div className='nr_raspunsuri'>{numarCorecte*50}/{copieNext*50}</div>
        </div>
       <button onClick={()=>window.location.reload()} className='playAgain'>Play Again</button>
      </div>
  )
}
