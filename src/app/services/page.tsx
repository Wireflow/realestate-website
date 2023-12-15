import PageBanner from '@/components/reuseable/PageBanner'
import ServicesPage from '@/components/services/Services-Components/ServicesPage'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <div>
      <PageBanner PageName='Services' PagePath='Home / Services'/>
      <ServicesPage/>
    </div>
  )
}
 
export default Services