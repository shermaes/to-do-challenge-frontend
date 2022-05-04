import React, { useContext } from 'react'
import { Store } from '../stateManagement/StoreProvider'

const ListOfToDo = () => {

  const {state, dispatch} = useContext(Store)
  console.log(state);

  return (
    <div>
        <h1 style={{backgroundColor: "orange"}}>Actions pending to be done</h1>
        <ul>
        {state.listOfNotes.map(note => {
                return <li style ={ note.done? {textDecoration: 'line-through', textDecorationColor:'orange'}: {}} key={note.id}> 
                {note.category} <br />
                {note.title} <br />
                {note.message} <br />
                </li>
            })}
        </ul>
    </div>
  )
}

export default ListOfToDo 