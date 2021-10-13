import React, {useLayoutEffect, useRef} from 'react'
//@ts-ignore

import Message from './Message'
import ReactAutoScrolling from '../utils/ReactAutoScrolling'
const Messages = ({messages, nickname}) => {
  const lastElement = useRef(null)
  const scrollToBottom = () => {
    lastElement.current.scrollIntoView({behavior: 'smooth'})
  }
  useLayoutEffect(scrollToBottom, [])
  return (
    <ReactAutoScrolling style={{padding: '5% 0', flexGrow: 1}}>
      <div>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} nickname={nickname} />
          </div>
        ))}
      </div>
      <div ref={lastElement} />
    </ReactAutoScrolling>
  )
}

export default Messages
