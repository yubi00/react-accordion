import React, { useContext } from 'react'
import Accordion from './Accordion'
import AccordionContext from './context/accordions'

function AccordionList() {
  const { items } = useContext(AccordionContext)

  return (
    <div>
      {items.map((item, i) => (
        <Accordion key={i} item={item} index={i} />
      ))}
    </div>
  )
}

export default AccordionList
