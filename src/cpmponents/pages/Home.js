import React from 'react'
import './Home.css'
import Projects from './Projects'
import './Home.css'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div className='home-page-container'>
      <h1>Home</h1>
      <p>Id occaecat cupidatat nisi eu ut eiusmod pariatur. Voluptate do ut voluptate voluptate non labore magna duis sit tempor fugiat eiusmod anim irure. Ipsum sint officia sint est labore.</p>
      <p>Voluptate nostrud aliqua cupidatat commodo nostrud. Ipsum est culpa Lorem pariatur Lorem consectetur duis laborum fugiat pariatur minim laboris voluptate. Tempor amet proident dolor tempor. Elit consectetur voluptate minim irure nulla pariatur ipsum deserunt ex dolore sunt. Lorem mollit velit eu ullamco dolore elit dolor cupidatat.</p>
    </div>
    <Projects />
    <Contact />
    </>
  )
}

export default Home