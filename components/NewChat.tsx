import { db } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React from 'react'

const NewChat = () => {
  const router = useRouter();
  const {data : session} = useSession()
  
  const createNewChat = async() =>{
    const doc = await addDoc(
      collection(db,"user", session?.user?.email!,"chats"),{
        messages : [],
        userId: session?.user?.email!,
        createdAt : serverTimestamp()
      }
    );
    router.push(`/chat/${doc.id}`)
  }
  
  
  return (
    <div onClick={createNewChat}  
    className='boder-gray-700 border chatRow'>
        <PlusIcon className='h-4 w-4'/>New Chat
    </div>
  )
}

export default NewChat