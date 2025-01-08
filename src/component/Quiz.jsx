import React, { useState } from 'react'
import { Data } from '../Data/Data'
import './Quiz.css'

function Quiz() {

    const [data] = useState(Data)   
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isQuizEnd, setIsQuizEnd] = useState(false)  
    
    const handleReset=()=>{
        setIndex(0)
        setScore(0)
        setIsQuizEnd(false)
    }
    const handleChange=(e)=>{
      const selectValue = e.target.value
      if(data[index].ans === selectValue){
        setScore(score+1)
      }
    } 

    const handleNext=()=>{
      if(index < data.length  -1){
        setIndex(index+1)
      }else{
        setIsQuizEnd(true)
      }
      document.querySelectorAll('.checked-value').forEach(currentValue => {
        currentValue.checked= false
      });
    }

  return (
    <div className='container'>
        {isQuizEnd ? (
            <div className='score'>
                <p>Your Score : {score} / {data.length}</p>
                <button onClick={handleReset}>Play Again</button>
            </div>
        ) : 
        (
            <div className='question'>
                <div>
                  <h2>{index + 1}.{data[index].q}</h2>  
                </div>
                {
                    ['a', 'b', 'c', 'd'].map((options)=>
                      <div key={options} className='options'>
                        <input 
                        className='checked-value'
                        name='select'
                        type="radio"
                        onChange={handleChange}
                        value={data[index][options]} />
                        <p>{`${options.toUpperCase()} : ${data[index][options]}`}</p>
                        
                      </div>  
                    )
                }
              <div className='btns'>
                            <button id='next' onClick={handleNext}>Next</button> 
              </div>
            </div>
        )
    }
      
    </div>
  )
}

export default Quiz
