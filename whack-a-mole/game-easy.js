window.onload = function() {
  const holes = document.querySelectorAll(".hole");
  const scoreBoard = document.querySelector(".score");
  const moles = document.querySelectorAll(".mole");
  const startBtn = document.getElementById("start_btn");
  let titleH1 = document.getElementById("title");

  let lastHole;
  let timeUp = false;
  let score = 0;
  let gameTime = 10000;

  startBtn.addEventListener(
    "click",
    function() {
      showBtnAnimation();
      startGame();
      peep();
    },
    false
  );

  function showBtnAnimation() {
    event.preventDefault();

    startBtn.classList.add("animate");
    // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
    setTimeout(() => {
      startBtn.classList.remove("animate");
      startBtn.style.display = "none";
    }, 700);
  }

  function startGame() {
    resetScoreAndTime();

    setTimeout(() => {
      startBtn.style.display = "inline-block";
      startBtn.innerHTML = "Replay";
      titleH1.innerHTML = "TIME-UP!";
      timeUp = true;

      // TODO: 写当游戏时间结束后要发生的事
    }, gameTime);
    return timeUp;
  }

  /**
   * 初始化设置.
   */
  function resetScoreAndTime() {
    scoreBoard.innerHTML = 0;
    titleH1.innerHTML = "WHACK-A-MOLE!";
    timeUp = false;
    return timeUp;

    // TODO: 写游戏的初始化设置
  }

  /**
   * 出洞.
   */
  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    comeOutAndStop(hole, time);
  }

  /**
   * 随机生成地鼠出洞的停留时间. 该时间其实是[min, max]间的随机数.
   *
   * @param min 随机数的下界.
   * @param max 随机数的上界.
   * @returns {number}
   */
  function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    // TODO: 写生成随机数的逻辑，
  }

  /**
   * 随机选择地鼠钻出的地洞，如果与上一个是相同地洞，则重新选择一个地洞.
   *
   * @param holes
   * @returns {*}
   */
  function randomHole(holes) {
    let hole;

    do {
      const holesIndex = randomTime(0, 5);
      hole = holes[holesIndex];
    } while (lastHole == hole);
    lastHole = hole;

    // TODO: 写地鼠随机选择钻出地洞的逻辑，如果与上一个是相同地洞，则重新选择一个地洞.
    return hole;
  }

  /**
   * 地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).
   *
   * @param hole 地鼠所出地洞.
   * @param time 地鼠停留时间.
   */
  function comeOutAndStop(hole, time) {
    hole.classList.add("up");

    setTimeout(() => {
      hole.classList.remove("up");
      if (!timeUp) {
        peep();
      }
    }, time);
  }

  // TODO: 写地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).

  /**
   * 打地鼠。为每个moles添加点击事件，点击后分数显示+1，地鼠入洞。
   */
  moles.forEach(mole =>
    mole.addEventListener("click", function(e) {
      scoreBoard.innerHTML++;
      moles.style.display = "none";

      // TODO: 在这里写用户点击地鼠发生的事.
    })
  );
};
