'use client'
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { signOut, useSession} from "next-auth/react"
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
 export function SideBar(){
    const {data : session} = useSession();

    const[chats,loading,error] = useCollection(
        session && query(collection(db, 'user',session.user?.email!,'chats'),orderBy("createdAt","asc"))
    )
    
    return(
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                <NewChat/>
                {/* <div>modelselection</div> */}
                {chats?.docs.map(chat => (
                    <ChatRow key={chat.id}
                    id={chat.id}/>
                ))}
                </div>

            </div>
            {session && (
                <img onClick={() => signOut()}
                src={session.user?.image!
                }
                alt="ProfilePic"
                className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"/>
            )}
        </div>
    )
}