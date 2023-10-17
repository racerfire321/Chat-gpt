import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'
type Props ={
  params :{
    id: string
  }
}
const Chatpage = ({params: {id}}: Props) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Chat chatId={id}/>
      <ChatInput chatId={id}/>
    </div>
  )
}

export default Chatpage