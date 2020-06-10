import React from 'react'
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";


// immediate
// successive
const Layout = ({
  location, data, children
}) => {
  
  return (
    <TransitionProvider
      location={location}
      mode='immediate'
      enter={{
        opacity: 0,
        transform: 'translate3d(0vh,80vh,0) scale3d(1, 1, 1) rotate(0deg)',
        //config: { duration: 10 },
        config: { clamp: true },
        onStart: () => {
          console.log('HELLO WORLD!')
        }
      }}
      usual={{
        opacity: 1,
        transform: 'translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)'
      }}
      leave={{
        opacity: 0,
        transform: 'translate3d(0vh,80vh,0) scale3d(1, 1, 1) rotate(0deg)',
        //config: { duration: 10 },
        config: { clamp: true }
      }}
    >
      <TransitionViews>
        {children}
      </TransitionViews>
    </TransitionProvider>
  )
}

export default Layout
