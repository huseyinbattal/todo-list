import React from 'react'
import './ListContent.css'
import ListContentFooter from './ListContentFooter'
import ListItem from './ListItem'

function ListContent(props) {
  return (
    <div className='item-content-wrapper'>
      <div className='content'>
        {
          new Array(20).fill("Selam").map((x, i) => {
            return (
              <ListItem key={i} />
            )
          })
        }
      </div>
      <ListContentFooter/>
    </div>
  )
}

export default ListContent