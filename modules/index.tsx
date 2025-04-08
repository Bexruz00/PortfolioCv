import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Blog from './Blog'

const Mains = () => {
  return (
    <main>
      <article>
        <Hero/>
        <Service/>
        <Skills/>
        <Portfolio/>
        <Blog/>
      </article>
    </main>

  )
}

export default Mains