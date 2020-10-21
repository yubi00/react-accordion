import React, { useContext } from 'react'
import AccordionContext from './context/accordions'

function Accordion({ item, index }) {
  const { items, setItems } = useContext(AccordionContext)

  const toggle = () => {
    const newItems = items.map((accItem, i) => {
      if (i === index) {
        return { ...accItem, isOpen: !item.isOpen }
      } else {
        return { ...accItem, isOpen: false }
      }
    })

    setItems(newItems)
  }
  return (
    <div className='accordion-container'>
      <div className='accordion'>
        {' '}
        <h1 className='accordion-title'>{item.title}</h1>
        <button className='btn-toggle' onClick={toggle}>
          {item.isOpen ? 'Less' : 'More'}
        </button>
      </div>
      {item.isOpen && <div className='accordion-body'>{item.body}</div>}
    </div>
  )
}

export default Accordion
