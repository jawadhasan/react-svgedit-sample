import React, { useRef, useEffect } from 'react'

export const BasicCanvas = props => {
  
  const canvasRef = useRef(null)

  
  const draw0 = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
  }

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = 'orange'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    //Our first draw
    // context.fillStyle = '#000000'
  //  context.fillRect(0, 0, context.canvas.width, context.canvas.height)



   let frameCount = 0
   let animationFrameId

     //Our draw came here
    const render = () => {
        frameCount++
        draw(context, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }

  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

