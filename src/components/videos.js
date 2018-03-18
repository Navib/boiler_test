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

const tilesData = [
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Breakfast",
    author: "jill111"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Tasty burger",
    author: "pashminu"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Camera",
    author: "Danson67"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Morning",
    author: "fancycrave1"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Hats",
    author: "Hans"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Honey",
    author: "fancycravel"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Vegetables",
    author: "jill111"
  },
  {
    video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    title: "Water plant",
    author: "BkrmadtyaKarki"
  }
];

const Videos = () => (
  <div className="video-wrapper">
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={1} cellHeight={"auto"}>
        {tilesData.map(tile => (
          <GridTile
            key={tile.title}
            title={tile.title}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            titlePosition={"top"}
          >
            <div className="video-player-wrap">
              <video controls>
                <source src={tile.video} type="video/mp4" />
              </video>
            </div>
          </GridTile>
        ))}
      </GridList>
    </div>
  </div>
);

export default Videos;
