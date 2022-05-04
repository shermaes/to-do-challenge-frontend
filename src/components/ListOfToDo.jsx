import React, { useContext } from 'react'
import { Store } from '../stateManagement/StoreProvider'

const ListOfToDo = () => {

  const {state, dispatch} = useContext(Store)

  const onCheckbox = (event, note) => {
      const checked =event.currentTarget.checked;
        dispatch({
            type: 'update-note',
            payload: {...note,
            done: checked
        }
        })
  }
  

  return (
    <div>
        <h1 style={{backgroundColor: "orange"}}>Actions pending to be done</h1>
        <ul>
        {state.listOfNotes.map(note => {
                return <li style ={ note.done? {textDecoration: 'line-through', textDecorationColor:'orange'}: {}} key={note.id}> 
                {note.category} <br />
                {note.title} <br />
                {note.message} <br />
                <input onChange={(event) => onCheckbox(event, note)} type="checkbox" checked={note.done} />
                </li>
            })}
        </ul>
    </div>
  )
}
//onChange executes an action 
export default ListOfToDo 