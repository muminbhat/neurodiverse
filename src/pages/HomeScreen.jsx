import React from 'react'
import { Appoint, Features, Header, Score, Services, Team, Testimonials } from '../components/HomeScreenComponents'

const HomeScreen = () => {
  return (
    <div className='min-h-screen dark:bg-black'>
    <Header />
    <Score />
    <Services />
    <Features />
    <Team />
    <Testimonials />
    <Appoint />
    </div>
  )
}

export default HomeScreen