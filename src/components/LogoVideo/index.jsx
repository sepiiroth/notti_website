function isVideoUrl(url) {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

function LogoVideo({ video }) {
  return (
    <video
      className="d-block mx-auto w-100"
      autoplay=""
      loop
      playsinline=""
      muted=""
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}

LogoVideo.propTypes = {
  video: function (props, propName, componentName) {
    const url = props[propName];
    if (typeof url !== "string" || !isVideoUrl(url)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Expected a video URL, got ${url}`
      );
    }
  },
};

export default LogoVideo;
