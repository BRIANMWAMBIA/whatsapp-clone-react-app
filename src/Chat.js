import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import React from 'react'
import "./Chat.css"
function Chat() {

    function getAllMessages(){
        
    }
    return <div className='chat'>
       <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>Last seen at ...</p>
        </div>
        <div className='chat__headerRight'>
            <IconButton>
                <Search />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
        </div>
        <div className='chat__body'>
            <p className='chat__message'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message chat__receiver'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message chat__receiver'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message chat_receiver'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message chat__receiver'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Brian</span>
                This is crazy! It's working..
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>   
            </p>
          
          
            
        </div>
       <div className='chat__footer'>
        <InsertEmoticon />
        <form>
            <input type="text" placeholder='Type a message' />
            <button type='submit'>Send a message</button>
        </form>
        <Mic/>
       </div>
    </div>;
}

export default Chat;