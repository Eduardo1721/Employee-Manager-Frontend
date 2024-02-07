import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      {/* Video element with autoPlay, loop, muted, and playsInline attributes */}
      <video autoPlay loop muted playsInline>
        {/* Source tag specifying the video source and type */}
        <source src="https://player.vimeo.com/external/476642450.sd.mp4?s=ab80d3071fd28593a0aca4fb7747bbddef3e1fef&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        {/* Fallback text in case the browser doesn't support the video tag */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;