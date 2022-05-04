import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'

const initialState = {
    note: {
        id:'',
        title: '',
        message:'',
        category: '',
        done: false
    },
    listOfNotes: {
        id:'0',
        title: 'title by default',
        message:'message by default',
        category: 'category1',
        done: true
    },
}

const Store = createContext(initialState)

const StoreProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialState)
//useReducer is a hook and you have to import it
// dispatch is the trigger that we will be using to generate the state changes

    return(
        <Store.Provider value ={{state, dispatch}}>
            {children}
        </Store.Provider>)
}

export default StoreProvider