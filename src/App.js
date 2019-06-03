import React, { useState, useEffect} from "react";
import Board from "./components/card"

import intializeDeck from "./deck"

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(300)

  useEffect(() => {
    resizeBoard()
    setCards(intializeDeck())
  }), [])

  const handleClick = (id) => setFlipped([...flipped,id])
   const resizeBoard = () => {
     setDimension(Math.min(
       documnet.documentElement.clientWidth,
       document.documentElement.clientHeight,

     ),
     )
   }
  return (
    <div>
      <h2>
        Can you match the simpson characters?? How many can times can you match them?
      </h2>
      <Board  cards={cards} flipped={flipped} handleClick={handleClick} />
     

      </div>
  )
}


