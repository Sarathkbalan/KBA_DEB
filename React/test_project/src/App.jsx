import React from 'react'
import Demo from './Demo.jsx'
import Card from './Card.jsx'

const App = () => {
  const cardsdata=[
    {
      title:"card 1",
      text:"This is the first card",
      customClasses:"bg-green-300"
    },
    {
      title:"card 2",
      text:"This is the Second card",
      customClasses:"bg-blue-300"
    },
    {
      title:"card 3",
      text:"This is the third card",
      customClasses:"bg-red-300"
    }
  ];
  return (
    <>
   <Demo/>
   {cardsdata.map((card,index)=>(
   <Card key={index}
         title={card.title}
         text={card.text}
         customClasses={card.customClasses}/>
         
        ))}
    </>
  )
}

export default App
