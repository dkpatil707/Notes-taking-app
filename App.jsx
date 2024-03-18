import React from 'react'
import Navbar from './Navbar'
import './style.css'
import Form from './Form'
import TaskProvider from './TaskProvider'
import DispalyNotes from './DisplayNotes'


const App = () => {
  return (
    <>
        <Navbar/>


        <TaskProvider>

        <div className='mainContainer'>
        <Form/>
        <DispalyNotes/>
        </div>

        </TaskProvider>
      

    </>
  )
}

export default App