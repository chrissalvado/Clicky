// function shuffle(array){
//     const _array = array.slice(0)
//     for(let i = 0; i < array.length -1; i++){
//         let randomindex = Math.floor(Math.random() * (i + 1))
//         let temp = array[i]
//         _array[i] = _array[randomIndex]
//         -array[randomIndex] = temp

//      }

//      return _array
// }

export default function intializeDeck() {
    let id = 0
    const cards = ["pj1", "pj22", "pj3", "pj4", "pj5","pj6", "pj7", "PJ8", "PJ9", "PJ10"].reduce((acc, type) =>{
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id:id++
            type
        })
        return acc 
    }, [])

return shuffle(cards)
}