
import React from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

const RiveAnimation = () => {
  const STATE_MACHINE_NAME = 'State Machine 1' // rename to match your Rive file
  
  const { rive, RiveComponent } = useRive({
    src: '/rive/6273-12187-a-moon.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  })

  // Optional: connect to triggers in Rive
  const hoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Hover')

  return (
    <div
      className="w-[300px] h-[300px] mx-auto"
      onMouseEnter={() => hoverInput?.fire()}
    >
      <RiveComponent />
    </div>
  )
}

export default RiveAnimation
