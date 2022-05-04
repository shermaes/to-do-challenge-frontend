import { useState } from 'react'
import ListOfToDo from './components/ListOfToDo'
import StoreProvider from './stateManagement/StoreProvider'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StoreProvider>
      <h1 style={{backgroundColor: "orange"}}>My To-DoList</h1>
      <Form/>
      <ListOfToDo/>
    </StoreProvider>
  )
}

export default App
//As ListOfToDo is nested by our StoreProvider we will be able to access to the global state of the component ListOfToDo