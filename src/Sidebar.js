import React from 'react'
import "./Sidebar.css"
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import SidebarChat from './SidebarChat';
function Sidebar() {
    return <div className='sidebar'>
    <div className='sidebar_header'>
        <Avatar src='https://lh3.googleusercontent.com/ogw/AOh-ky0DSze26RSTt43-NBdiRKFGSTRJv9w_jhZIkXXZ=s32-c-mo' />
        <div className='sidebar_right_header'>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>

    </div>
    <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
        <SearchIcon />
        <input placeholder='search or start a new' type="text" />

        </div>
     
    </div>
    <div className='sidebar_chat'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
    </div>
   
    </div>;

}

export default Sidebar;