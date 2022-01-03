import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import firebase from 'firebase'

import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    const sendPost = e => {
        e.preventDefault()
        db.collection('posts').add({
            name: 'Rino Kitimbo',
            description:'This is a test',
            mesage: 'input',
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="Feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input value  type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            <Post name="Dominic Emma" description="This is a test"
                message="This is awesome thing to do" />
        </div>
    )
}
export default Feed