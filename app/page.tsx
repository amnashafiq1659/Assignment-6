import React from 'react';

import Header from '@/components/header';
import NavBar from '@/components/navBar';
import Hero from '@/components/hero';
import Companies from '@/components/companies';
import ExploreCourses from '@/components/exploreCourses';
import Acheivements from '@/components/acheivements';
import Courses from '@/components/courses';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

const MainPage = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Hero/>
      <Companies/>
      <ExploreCourses/>
      <Acheivements/>
      <div className='md:block hidden mt-[200px]'>
        <Acheivements></Acheivements>
      </div>
      <Courses/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default MainPage;