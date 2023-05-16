import { useEffect } from "react";

const Typing = () => {
  const TYPING_SPEED = 50;
  let $targetList;

  const init = () => {
    $targetList = document.querySelectorAll('[data-js="typing"]');

    setup();
    run();
  };

  const setup = () => {
    for (const $dom of $targetList) {
      const textList = $dom.innerText.split("");
      let html = "";

      for (const char of textList) {
        html += `<span>${char}</span>`;
      }

      $dom.innerHTML = html;
    }
  };

  const run = () => {
    let delay = 0;

    for (let i = 0; i < $targetList.length; i++) {
      const $target = $targetList[i];
      const $chars = $target.querySelectorAll("span");

      for (let l = 0; l < $chars.length; l++) {
        const $char = $chars[l];
        const text = $char.textContent;

        delay += TYPING_SPEED;
        if (text === " ") delay += TYPING_SPEED * 2;

        const animate = () => {
          $char.style.display = "inline-block";
        };

        setTimeout(animate, delay);

        if ($chars.length - 1 <= l) {
          delay += TYPING_SPEED * 4;
          setTimeout(() => ($target.style.display = "block"), delay);
        }
      }
    }
  };

  useEffect(() => {
    //document.addEventListener("DOMContentLoaded", init, false);
    init();
  }, []);

  return (
    <div className="typing-outer">
      <div className="typing-main">
        <div className="typing-inner">
          <p data-js="typing">Hello world.</p>
          <p data-js="typing">I am interested in many things.</p>
          <p data-js="typing">I want to get to know you.</p>
          <p data-js="typing">
            I am doing Twitter with GitHub, so please follow me if you like.
          </p>
          <p data-js="typing">
            I am doing Twitter with GitHub, so please follow me if you like.
          </p>
          <div style={{ display: "inline" }}>
            <p data-js="typing">Thanks.</p>
            <p className="cursor"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
