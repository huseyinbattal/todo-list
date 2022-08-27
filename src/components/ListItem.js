import React from 'react'
import { useDispatch } from 'react-redux'
import './ListItem.css'
import { deleteTodo, updateTodo } from '../store/actions/todoActions';

function ListItem(props) {
  const dispatch = useDispatch();
  return (
      <div className='list-item hover:bg-gray-200'>
          <div className={props.className}>
        <input className='mr-2' type='checkbox'
          checked={props.item.complete}
          onChange={() => {
            dispatch(updateTodo(props.item.id,!props.item.complete))
          }}
        />
        <span>{ props.item.text}</span>
      </div>
      {!props.item.complete && <div className='remove-list-item' onClick={() => {
        dispatch(deleteTodo(props.item.id))
      }}>
              Sil
          </div>}
    </div>
  )
}

export default ListItem