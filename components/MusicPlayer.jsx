const MusicPlayer = () => {
  return (
    <section className="music-body">
      <div className="window">
        <div className="title-bar">
          <div>
            <span className="title-bar__title">Music player</span>
          </div>
          <div className="title-bar__controls">
            <button className="btn">
              <svg
                width="19"
                height="3"
                viewBox="0 0 19 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="19" height="3" fill="#353535" />
              </svg>
            </button>
            <button className="btn">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="16"
                  height="13"
                  stroke="#353535"
                  strokeWidth="3"
                />
              </svg>
            </button>
            <button className="btn">x</button>
          </div>
        </div>
        <div className="menu">
          <span className="menu__item">File</span>
          <span className="menu__item">View</span>
          <span className="menu__item">Playback</span>
          <span className="menu__item">Help</span>
        </div>
        <div className="music-container">
          <div className="display">
            <span data-track="Rick Astley - Never Gonna Give You Up">
              거북이 - 빙고(BINGO) ★쉽게만 살아가면 재미없어 빙고★
            </span>
          </div>
          <div className="controls">
            <button className="btn btn_auto">Prev</button>
            <button className="btn btn_auto">Pause</button>
            <button className="btn btn_auto">Stop</button>
            <button className="btn btn_auto">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
