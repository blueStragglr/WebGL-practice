import React, { useState } from 'react'
import './WebGLLayout.scoped.scss'
import TriangleWebGL from './Triagnle/Triangle'
import { ObjectList } from '../models/ObjectList'
import SquareWebGL from './Square/Square'

const WebGLLayout = () => {
  const ObjectList: ObjectList[] = [ 'triangle', 'square' ]
  const [ selectedObject, setSelectedObject ] = useState(ObjectList[0])

  return (
    <div className="Layout">
      <div className="Layout__mode-selector">
        { ObjectList.map((element, index) => {
          return (
            <button
              className={ element === selectedObject ? 'selected' : '' }
              key={ index }
              onClick={ () => {
                setSelectedObject(element)
              } }>
              { element }
            </button>
          )
        }) }
      </div>
      <div className="Layout__web-gl-object">
        { selectedObject === 'triangle' &&
          <TriangleWebGL/>
        }
        { selectedObject === 'square' &&
          <SquareWebGL/>
        }
      </div>
    </div>
  )

}

export default WebGLLayout
