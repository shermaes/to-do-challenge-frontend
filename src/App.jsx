import { useState } from 'react'
import StoreProvider from './stateManagement/StoreProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StoreProvider>
      <h1>My To-DoList</h1>
    </StoreProvider>
  )
}

export default App
