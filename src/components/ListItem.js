import React from 'react'
import './ListItem.css'

function ListItem(props) {
  return (
      <div className='list-item hover:bg-gray-200'>
          <div>
              <input type='checkbox' />
              <span>Görev 1</span>
          </div>
          <div className='remove-list-item'>
              Sil
          </div>
    </div>
  )
}

export default ListItem