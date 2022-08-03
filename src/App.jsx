import { useState } from 'react'
import { Header } from './components/Headers'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mabson.png",
      name: "Mábson Vinicius",
      role: "Developer"
    },
    content: [
      {type: 'paragraph', content: 'Meu primeiro commit !'},
      {type: 'paragraph', content: 'Vitae perspiciatis aliquid quaerat, sunt incidunt reprehenderit dolorem accusamus ipsam. Eligendi dolorem ipsum cum ipsa quia sed, porro possimus voluptatem totam amet.'},
      {type: 'link', content: 'Lorem Ipsum', href: 'https://google.com.br'}
    ],
    publishedAd: new Date('2022-07-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Developer"
    },
    content: [
      {type: 'paragraph', content: 'Meu primeiro commit !'},
      {type: 'paragraph', content: 'Vitae perspiciatis aliquid quaerat, sunt incidunt reprehenderit dolorem accusamus ipsam. Eligendi dolorem ipsum cum ipsa quia sed, porro possimus voluptatem totam amet.'},
      {type: 'link', content: 'Lorem Ipsum', href: 'https://google.com.br'}
    ],
    publishedAd: new Date('2022-08-01 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          {posts.map((post) => 
            <Post 
            author={post.author}
            content={post.content}
            publishedAd={post.publishedAd}
            />
          )}
        </main>
      </div>
    </>
  )
}

export default App
