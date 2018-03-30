import React from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "rgb(255, 255, 255)",
    letterSpacing: "1px",
    textTransform: "uppercase"
  }
};

const MainVideo = props => {
  if (props.videos === undefined) return <div>loading...</div>;

  return (
    <div className="video-wrapper">
      <h1 className="section-header">Demo Reel</h1>
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={1} cellHeight={"auto"}>
          {props.videos.slice(0, 1).map(video => (
            <GridTile key={video.id}>
              <div className="video-player-wrap">
                <iframe
                  src={video.demo_video}
                  frameBorder="0"
                  allowFullScreen
                  style={}
                />
              </div>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

MainVideo.propTypes = {
  videos: PropTypes.array
};

MainVideo.defaultProps = {
  videos: [
    {
      title: "Default Title",
      id: "0",
      demo_video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
    }
  ]
};

export default MainVideo;
