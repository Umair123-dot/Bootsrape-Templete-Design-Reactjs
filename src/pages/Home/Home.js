import React from 'react'


// images

//Components

import { Itsection } from '../../components/It-section'
import { TimingCourse } from '../../components/TimingCourse'
import Card from '../../components/Card/Card'
import { FeedbackStudent } from '../../components/FeedbackStudent'

const Home = () => {
  return (
    <div>
     
       <Itsection />
       <TimingCourse />
      <Card/>
      <FeedbackStudent />

    </div>
  )
}

export default Home