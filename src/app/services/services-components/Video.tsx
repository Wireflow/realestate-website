import Section from '@/components/reuseable/Section';
import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <Section>
        <div>
            <video className='rounded-2xl ' controls width="100%">
                <source src="your-video-source.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </Section>
  )
}

export default Video;
