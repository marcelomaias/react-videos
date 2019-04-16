import React from 'react'

const VideoDetail = ({ video }) => {
  return (
    <div>
      {video ? (
        <div>
          <div className="videoPlayer">
            <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="Video" />
          </div>
          <div className="videoInfo">
            <h1>{video.snippet.title}</h1>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default VideoDetail
