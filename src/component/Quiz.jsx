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
        ()
    }
      
    </div>
  )
}

export default Quiz
