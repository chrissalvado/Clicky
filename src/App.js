import React, { useState, useEffect} from "react";
import Board from "./components/card"

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(intializeDeck())
  }), [])

  const handleClick = (id) => setFlipped([...flipped,id])
  
  return (
    <div>
      <h2>
        Can you match the simpson characters?? How many can times can you match them?
      </h2>
      <Board  cards={cards} flipped={flipped} handleClick={handleClick} />
     

      </div>
  )
}


