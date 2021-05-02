import React, { useEffect } from 'react';
import './Triangle.scoped.scss'
import {renderTriangle} from '../../utils/WebGLInitializer'

const TriangleWebGL = () => {
  const objectId = 'triangle'

  useEffect(() => {
    renderTriangle('triangle')
  }, [])

  return (
    <canvas id={ objectId }>
      HTML 5 is not supported on your browser :(
    </canvas>
  )
}

export default TriangleWebGL

