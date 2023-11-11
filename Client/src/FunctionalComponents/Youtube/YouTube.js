import React, { useEffect, useState } from "react";
import css from "./YoutubeVideos..css";
const APIKEY = process.env.REACT_APP_APPLE_YOUTUBE_API_KEY;

function YouTube() {
  const [YoutubeVideos, setVideo] = useState([]);
  useEffect(() => {
    fetch`(
      "https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )`
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const YoutubeVideosData = data.items;
        setVideo(YoutubeVideosData);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper pt-4">
              Latest Videos <br />
              <br />
            </div>
          </div>
          {YoutubeVideos?.map((singleVideo, i) => {
            let VidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${VidId}`;
            let videoWrapper = (
              <div key={VidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTube;
