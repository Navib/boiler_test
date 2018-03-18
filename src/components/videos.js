import React from "react";
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

const Videos = props => {
  console.log(props);
  if (props.videos === undefined) return <div>loading...</div>;

  return (
    <div className="video-wrapper">
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={1} cellHeight={"auto"}>
          {props.videos.map(video => (
            <GridTile
              key={video.id}
              title={video.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              titlePosition={"top"}
            >
              <div className="video-player-wrap">
                <video controls>
                  <source src={video.demo_video} type="video/mp4" />
                </video>
              </div>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default Videos;
