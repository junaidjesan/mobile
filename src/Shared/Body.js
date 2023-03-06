import React from 'react'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'
import Time from './Time'

export default function Body() {
  return (<>
  <div>
    <Time/>
    <div>
        <MessageLeft/>
        <MessageRight/>
        <MessageLeft text="mera babu re thana thaya"/>
        <Time date="22:23"/>
        <MessageRight/>
        <MessageRight text="?"/>
        <MessageLeft text="jai ghumai pori"/>
        <MessageRight text="who cares"/>
    </div>
  </div>
  </>
  )
}
