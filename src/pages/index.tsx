import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomeFeature2 = dynamic(() => import('../components/home/feature2'))
const DynamicHomeFeature3 = dynamic(() => import('../components/home/feature3'))
const DynamicHomeFeature4 = dynamic(() => import('../components/home/feature4'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeFeature />
      <DynamicHomeFeature2 />
      <DynamicHomeFeature3 />
      <DynamicHomeFeature4 />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
