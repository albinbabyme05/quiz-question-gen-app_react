import React, { useState } from 'react'
import { Data } from '../Data/Data'

function Quiz() {

    const [data] = useState([Data])   
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isQuizEnd, setIsQuizEnd] = useState(false)    

  return (
    <div>
      
    </div>
  )
}

export default Quiz
