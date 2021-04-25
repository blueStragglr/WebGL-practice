import React, { useEffect } from 'react';
import './Triangle.scoped.scss'

const TriangleWebGL = () => {
  console.log('hej')

  useEffect(() => {
    const canvas = document.querySelector("#triangle");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 200.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, [])

  return (
    <canvas id="triangle">
      HTML 5 is not supported on your browser :(
    </canvas>
  )
}

export default TriangleWebGL

