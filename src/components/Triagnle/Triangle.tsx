import React, { useEffect } from 'react'
import './Triangle.scoped.scss'
import { renderTriangle } from '../../utils/WebGLInitializer'
import { ObjectList } from '../../models/ObjectList'

const TriangleWebGL = () => {
  const objectId: ObjectList = 'triangle'

  const positions: number[] = [
    1.0, 2.0,
    -1.0, 1.0,
    2.0, -2.0,
    1.0, -1.0
  ]

  useEffect(() => {
    renderTriangle(objectId, positions)
  }, [])

  return (
    <canvas id={ objectId }>
      HTML 5 is not supported on your browser :(
    </canvas>
  )
}

export default TriangleWebGL

