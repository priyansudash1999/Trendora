import React from 'react'
import { Hero } from '../components'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import CompanyPolicy from "../components/CompanyPolicy"
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <CompanyPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home