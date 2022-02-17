import React, {useState} from 'react';
import LikeVideoItem from './LikeVideoItem/LikeVideoItem';
import {Link} from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed/YoutubeEmbed';
import './YoutubeEmbed/YoutubeEmbed.css'



const VideoItem = ({video}) => {
    
    console.log('video in videoItem', video);
    // const [turner, setTurner] = useState(true);
    return (
        
        <div key={video.id} className="displayArea">
            <h2>{video.title}</h2>
            <div className="toggleArea">
                < YoutubeEmbed embedId= {video.url} />
            </div>
            <LikeVideoItem
                video={video}
             />
        </div>
    )
}



export default VideoItem;