import axios from "axios";
import React from "react";

class WatchArea extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=${process.env.API_KEY}&id=${this.props.id}`
      )
      .then((res) => {
        const item = res.data.items[0];
        this.setState({
          title: item.snippet.title,
          views: item.statistics.viewCount,
          description: item.snippet.description,
          channel: item.snippet.channelTitle,
          like: item.statistics.likeCount,
          url: item.id,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.loading) {
      return <h1 className="loader">Loading...</h1>;
    }
    const { title, views, description, channel, like, url } = this.state;
    return (
      <div className="watch-area">
        <div className="player">
          <iframe
            src={`//www.youtube.com/embed/${url}`}
            title={title}
            frameBorder="0"
            allow="autoplay encrypted-media"
          ></iframe>
        </div>
        <h1>{title}</h1>
        <div className="video-status">
          <div className="">{views} Views 👀</div>
          <div className="">{like} Likes 👍</div>
        </div>
        <div className="channel-name">{channel} Channel</div>
        <p>{description}</p>
      </div>
    );
  }
}

export default WatchArea;
