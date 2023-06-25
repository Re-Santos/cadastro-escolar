import React from 'react'
import List from './List/List'
import Data from './Data/Data'
import{HomeStyle} from './homeStyle'

const Home = () => {
  return (
    <HomeStyle>
      <List/>
      <Data/>
    </HomeStyle>
  )
}

export default Home
