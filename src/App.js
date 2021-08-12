import React, { useRef, useState } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyAjy6-8GoX8wIh2lARIda7tRfc26HSM870",
  authDomain: "superchat-cbc41.firebaseapp.com",
  projectId: "superchat-cbc41",
  storageBucket: "superchat-cbc41.appspot.com",
  messagingSenderId: "806540170195",
  appId: "1:806540170195:web:ee847903011d57353cd526",
  measurementId: "G-Z3TH9W9LNP"
})
const auth=firebase.auth();
const firestore=firebase.firestore();
function App() {
  const [user]=useAuthState(auth);

  return (
    <div >
     <header>
    <SignOut/>
     </header>
     <section>
       {user?<ChatRoom/>:<SignIn/>}
     </section>
    </div>
  );
}

function SignIn(){
  const SignInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={SignInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>
      Sign Out
    </button>
  );
}

function ChatRoom() {
  const dummy=useRef()
  const messagesRef=firestore.collection('messages');
  const query=messagesRef.orderBy('createdAt').limit(25);
  const [messages]=useCollectionData(query,{idField:'id'});
  const [formValue,setFormValue]=useState('');
  const sendMessage=async(e)=>{
    e.preventDefault();
    const {uid,photoURL}=auth.currentUser;
    await messagesRef.add({
      text:formValue,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({behavior:'smooth'});
  }
  return (
    <div>
      <main>
        {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg}/>)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
        <button type="submit">🚀Send</button>
      </form>
    </div>
  );
}
function ChatMessage(props)
{
  const {text,uid,photoURL}=props.message;
  const messageClass=uid===auth.currentUser.uid?'sent':'recieved';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>
    </div>
  )
}
export default App;
