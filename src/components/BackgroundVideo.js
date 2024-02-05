import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline>
        <source src="https://player.vimeo.com/external/476642450.sd.mp4?s=ab80d3071fd28593a0aca4fb7747bbddef3e1fef&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
