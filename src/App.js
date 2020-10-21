import React, { useState } from 'react'
import AccordionList from './AccordionList'
import AccordionContext from './context/accordions'
import './App.css'

const accordionItems = [
  {
    title: 'Accordion1',
    body: 'This is the body for the acordion 1',
    isOpen: false
  },
  {
    title: 'Accordion2',
    body: 'This is  body for the acordion2',
    isOpen: false
  },
  {
    title: 'Accordion3',
    body: 'This is the body for the acordion3',
    isOpen: false
  },
  {
    title: 'Accordion4',
    body: 'This is the body for the accordion4',
    isOpen: false
  }
]

function App() {
  const [items, setItems] = useState(accordionItems)

  return (
    <div className='App'>
      <AccordionContext.Provider value={{ items, setItems }}>
        <AccordionList />
      </AccordionContext.Provider>
    </div>
  )
}

export default App
