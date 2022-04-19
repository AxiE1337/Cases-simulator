import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { MdExpandMore } from 'react-icons/md'

export default function AccordionComponent({ data }: any) {
  return (
    <div style={{ width: '90%' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls='panel1a-content'
          id='items'
        >
          <h2>Case items</h2>
        </AccordionSummary>
        <AccordionDetails>
          {data
            .sort((a: any, b: any) => {
              return b.price - a.price
            })
            .map((item: any) => (
              <h2 key={item.name} style={{ backgroundColor: item.ratityColor }}>
                {item.name}
              </h2>
            ))}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
