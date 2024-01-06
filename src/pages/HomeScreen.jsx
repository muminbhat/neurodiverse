import React from 'react'
import { Features, Header, Score, Services, Team } from '../components/HomeScreenComponents'

const HomeScreen = () => {
  return (
    <div className='min-h-screen'>
    <Header />
    <Score />
    <Services />
    <Features />
    <Team />
    </div>
  )
}

export default HomeScreen