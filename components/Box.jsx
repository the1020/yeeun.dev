//top이 있으면 bottom은 생략
//둘 다 들어오면 bottom 생략
//bottom 있으면 top 생략

const Box = ({ children, top, bottom, left, right, duration, direction }) => {
  const position = {
    top: top ? top : "auto",
    bottom: !top && bottom ? bottom : "auto",
    left: left ? left : "auto",
    right: !left && right ? right : "auto",
  };

  const animation = {
    "animation-duration": duration ? duration : "2s",
    "animation-direction":
      direction === "reverse" ? "alternate-reverse" : "alternate",
  };

  return (
    <div className="box" style={{ ...position, ...animation }}>
      {children}
    </div>
  );
};

export default Box;
