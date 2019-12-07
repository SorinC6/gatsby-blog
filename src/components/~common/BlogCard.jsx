import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 10) / 500,
  (x - window.innerWidth / 10) / 500,
  1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card(p) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <CardWrapper>
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {p.children}
      </animated.div>
    </CardWrapper>
  )
}

export default Card

const CardWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  margin:20px 0;
  transition: box-shadow 1s;
  &:hover{
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.2);
      cursor:pointer;
  }

  .card {

    background: grey;
    border-radius: 5px;
    background:transparent;
    /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
    will-change: transform;
   
  }
`
