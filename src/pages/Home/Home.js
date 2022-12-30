import React from 'react'


// images

//Components

import { Itsection } from '../../components/It-section'
import { TimingCourse } from '../../components/TimingCourse'
import Card from '../../components/Card/Card'
import { FeedbackStudent } from '../../components/FeedbackStudent'
import ResultStudents from '../../components/ResultStudents/ResultStudents'
import Subscribe from '../../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <div>
     
       <Itsection />
       <TimingCourse />
      <Card/>
      <FeedbackStudent />
      <ResultStudents />
      <Subscribe />

    </div>
  )
}

export default Home