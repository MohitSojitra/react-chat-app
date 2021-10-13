import React, {useLayoutEffect, useRef} from 'react'

function ReactAutoScrolling({children, style, scrollBehaviour = 'auto'}) {
  const lastElement = useRef(null)
  const scrollToBottom = () => {
    lastElement.current.scrollIntoView({behavior: scrollBehaviour})
  }
  useLayoutEffect(scrollToBottom, [children, scrollBehaviour])

  return (
    <div style={{...style, overflow: 'auto'}}>
      {children}
      <div ref={lastElement} />
    </div>
  )
}

export default ReactAutoScrolling
