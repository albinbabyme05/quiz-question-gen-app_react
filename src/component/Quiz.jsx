import React, { useState } from 'react'
import { Data } from '../Data/Data'

function Quiz() {

    const [data] = useState([Data])   
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isQuizEnd, setIsQuizEnd] = useState(false)  
    
    const handleReset=()=>{
        setIndex(0)
        setScore(0)
        isQuizEnd(false)
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
                        <p>{`${options.toUpperCase()} : ${data[index][options]}}`}</p>
                      </div>  
                    )
                }

            </div>
        )
    }
      
    </div>
  )
}

export default Quiz
