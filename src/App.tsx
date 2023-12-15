import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Form} from "./component/form/Form.tsx";
import {TaskList} from "./component/tasklist/TaskList.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Form />
        <TaskList/>
    </>
  )
}

export default App
