import React from 'react'
import { Appoint, Features, Header, Score, Services, Team } from '../components/HomeScreenComponents'

const HomeScreen = () => {
  return (
    <div className='min-h-screen dark:bg-black'>
    <Header />
    <Score />
    <Services />
    <Features />
    <Team />
    <Appoint />
    </div>
  )
}

export default HomeScreen