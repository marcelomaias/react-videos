import React from 'react'

const VideoItem = ({ video, onSelect }) => {
  return (
    <div onClick={() => onSelect(video)} className="videoItem">
      <img src={video.snippet.thumbnails.medium.url} alt="Preview" />
      <h2>{video.snippet.title}</h2>
    </div>
  )
}

export default VideoItem
