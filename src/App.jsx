import { useState } from 'react'
import { Header } from './components/Headers'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </>
  )
}

export default App
