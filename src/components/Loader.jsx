import React from 'react'
import { Html } from '@react-three/drei'
function Loader() {
  return (
      <Html>
          <div className="flex justify-center items-center">
              
              <div className='h-20 w-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin' />
        </div>
      </Html>
  )
}

export default Loader