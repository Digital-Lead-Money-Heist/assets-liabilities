import {initializeApp} from "firebase/app"
import {getAuth, signOut} from "firebase/auth"
import firebaseConfig from "./config"
import { collection,doc,addDoc,getFirestore,collectionGroup, getDocs } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
const db = getFirestore()

export function currentUserName () {
    try{

        const outh = getAuth()
        const user = outh.currentUser;
         const userName = user.displayName
        return userName
    }catch(error){
       return console.error("no user found ", error)
    }
}

export function currentUid(){
    try{

        const outh = getAuth()
        const user = outh.currentUser
        return user.uid
    }catch(error){
       return console.error("no user found ", error)
    }
}

export function logOut() {
    const outh = getAuth()
    signOut(outh).then(()=>{
        console.log('signed out')
    }).catch((e)=>{
        console.log('error signing out: ', e)
    })
}

export async function getdeclarations(identifier){
    const query = await getDocs(collectionGroup(db,identifier))
    let data = []

    query.forEach((doc)=>{
        data.push(doc.data())
    })
    console.log('declarations',data)
    return data
}