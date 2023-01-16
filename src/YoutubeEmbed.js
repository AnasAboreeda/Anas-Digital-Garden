import * as React from 'react';

const YoutubeEmbed = ({ link }) => (
    <div className="video-responsive">
      <iframe
        width="750"
        title="Youtube"
        height="422"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
       />
    </div>
  );

export default YoutubeEmbed;
