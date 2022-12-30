import React from 'react';
import CourseFeedback from '../../components/CourseFeedback/CourseFeedback';
import Subscribe from '../../components/Subscribe/Subscribe'
import UserResearch from '../../components/UserResearch/UserResearch';


const CourseDetail = () => {
  return (
    <div>
       <UserResearch />
       <CourseFeedback />
       <Subscribe />
    </div>
  )
}

export default CourseDetail