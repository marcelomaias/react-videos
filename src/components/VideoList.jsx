import React from 'react'

import VideoItem from './VideoItem'

const VideoList = ({ videos, onSelect }) => {
  const videosList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onSelect={onSelect} />
  })
  return <div>{videosList}</div>
}

export default VideoList
