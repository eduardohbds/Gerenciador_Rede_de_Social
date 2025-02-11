import React from 'react'

type Props = {
  text: string
}

const About = (props: Props) => {
  return (
    <div>About {props.text}</div>
  )
}

export default About