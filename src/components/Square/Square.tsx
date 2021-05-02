import React, { useEffect } from 'react';
import './Square.scss'
import {renderTriangle} from '../../utils/WebGLInitializer'
import { ObjectList } from '../../models/ObjectList'

const SquareWebGL = () => {
  const objectId: ObjectList = 'square'

  const positions: number[] = [
    2.0,  2.0,
    -2.0,  2.0,
    2.0, -2.0,
    -2.0, -2.0,
  ];

  useEffect(() => {
    renderTriangle(objectId, positions)
  }, [])

  return (
    <canvas id={ objectId }>
      HTML 5 is not supported on your browser :(
    </canvas>
  )
}

export default SquareWebGL

