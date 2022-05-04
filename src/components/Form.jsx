//here's where we make our page dinamic, here we will create buttons and inputs for teh user to interact with
import React, {useContext, useRef, useState} from 'react'
import { Store } from '../stateManagement/StoreProvider';

const Form = () => {

    const formRef = useRef(null)
    //is this also a hook? it has been imported as well from react

const onAdd = (event) =>{
    event.preventDefault();
    if(title&&message){
        dispatch({
            type: 'add-note',
            payload: {
                category,
                title,
                message
            }
        })
        formRef.current.reset() //With these I clean the inputs after they've been used
    }
}

const{state, dispatch} = useContext(Store)

//With these we capture the input and set it to our note
//useState is another hook and you have to import it
const [title, setTitle] = useState('');

const [message, setMessage] = useState('');

const [category, setCategory] = useState('');



const addingTitle = (e)=>{
    setTitle(e.target.value)
}
const addingMessage = (e)=>{
    setMessage(e.target.value)
}
const addingCategory = (e)=>{
    setCategory(e.target.value)
}

  return (
    <form ref = {formRef}>
        <label>Category:</label>
        <input onChange={addingCategory}type="text" name="category"/>
        <label>Activity to do:</label>
        <input onChange={addingTitle} type="text" name="title"/>
        <label>Message:</label>
        <input onChange={addingMessage} type="text" name="message"/>
        <button onClick= {(e)=> onAdd(e)}>Add Note</button>
    </form>
  )
}

export default Form