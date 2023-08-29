import React from 'react'
import Carousel from './Carousel'
import { projects } from '../data/projectList';

const HomePage = () => {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-8/12 h-1/2 mx-auto'>
      <Carousel data={projects} />
    </div>
  )
}

export default HomePage