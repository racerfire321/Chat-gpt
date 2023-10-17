import { adminDb } from '@/firebaseAdmin';
import { serverTimestamp } from 'firebase/firestore';
import query from '@/lib/queryApi';
import type {NextApiRequest , NextApiResponse} from 'next'

type Data ={
    answer : string
}

export default async function handler(
 req: NextApiRequest,
 res:NextApiResponse<Data>
){
    const {prompt , chatId, model, session} = req.body;
    

    if(!prompt){
        res.status(400).json({answer: "Please provide a prompt!"})
    }
    if(!chatId){
        res.status(400).json({answer : "Please provide a valid chat Id !"})
        return;
    }
    const response = await query(prompt,chatId,model)
    const message : Message={
        text : response,
        createdAt: serverTimestamp(),
        user:{
            _id: "ChatGpt",
            name : "chatgpt",
            avatar:"https://links.papareact.com/89k",
        }
    }

    await adminDb.collection("user").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message);

    res.status(200).json({answer: message.text})
}