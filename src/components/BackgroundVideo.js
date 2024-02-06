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

// Functional Component:

// BackgroundVideo is a functional component that represents the background video.
// HTML Structure:

// The component returns a div element with the class name "background-video."
// Video Element:

// Inside the div, there's a video element with several attributes:
// autoPlay: Automatically starts playing the video.
// loop: Makes the video loop continuously.
// muted: Mutes the audio of the video.
// playsInline: Allows the video to play inline on mobile devices.
// The video element contains a source element specifying the source (src) and type (type) of the video.
// The source is a Vimeo video URL in MP4 format.
// If the browser doesn't support the video tag, the text "Your browser does not support the video tag." is displayed.
// Export:

// The component is exported to be used in other parts of the application.



