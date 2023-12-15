import React from 'react'
import Discover from './Discover'
import Sell from './Sell'
import Video from './Video'
import Agents from './Agents'
import Featured from './Featured'

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <div>
      <Discover/>
      <Sell/>
      <Video/>
      <Agents/>
      <Featured/>
    </div>
  )
}

export default ServicesPage