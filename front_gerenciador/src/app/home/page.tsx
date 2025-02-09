import React from 'react'

type Props = {
  text: string
}

const Home = (props: Props) => {
  return (
    <div>Home {props.text}</div>
  )
}

export default Home