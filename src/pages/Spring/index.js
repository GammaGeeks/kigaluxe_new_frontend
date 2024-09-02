import React from 'react'
import { useSpring, animated } from '@react-spring/web'

function Spring() {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 800 },
  // })

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }




  return (
    <>
    <div style={{marginTop: '500px'}}>
      {/* <h2>Spring Animation</h2>
      <p>Move the box by dragging it around.</p> */}
    </div>
    <animated.div
    onClick={handleClick}
    style={{
      width: 80,
      height: 80,
      background: '#ff6d6d',
      borderRadius: 8,
      ...springs,
    }}
    />
    </>
  )
}

export default Spring