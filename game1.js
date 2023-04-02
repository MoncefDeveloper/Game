var memoryGame = document.getElementById("memoryGame"),
  memoryGame2 = document.getElementById("memoryGame2"),
  memoryGame3 = document.getElementById("memoryGame3"),
  blocks = [...memoryGame.children],
  blocks2 = [...memoryGame2.children],
  blocks3 = [...memoryGame3.children],
  orderRange = [...Array(blocks.length).keys()],
  orderRange2 = [...Array(blocks2.length).keys()],
  orderRange3 = [...Array(blocks3.length).keys()],
  infoCountiner = document.getElementById("infoCountiner"),
  bar = document.getElementById("bar"),
  MO = document.getElementById("MO"),
  degrit = document.getElementById("degrit"),
  yourName = document.getElementById("name"),
  score = document.getElementById("score"),
  tries = document.getElementById("tries"),
  nuNumber = document.getElementById("Number"),
  reflesh = document.getElementById("reflesh"),
  endGame = document.getElementById("endGame"),
  startGame = document.getElementById("startGame"),
  colors = [...MO.children];

console.log(window.innerHeight);

blocks.forEach((block) => {
  block.addEventListener("click", function () {
    block.classList.add("backface");
    flipcard();
    let newBlock2 = blocks.filter((y) => y.classList.contains("backface2"));
    if (newBlock2.length === blocks.length) {
      setTimeout(function () {
        endGame.removeAttribute("style");
        blocks.forEach((block) => {
          block.classList.remove("backface2");
        });
      }, 1000);
    }
  });
});

randomArray(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
});
//-----------------------------------------------------------------//
blocks2.forEach((block) => {
  block.addEventListener("click", function () {
    block.classList.add("backface");
    flipcard2();
    let newBlock2 = blocks2.filter((y) => y.classList.contains("backface2"));
    if (newBlock2.length === blocks2.length) {
      setTimeout(function () {
        endGame.removeAttribute("style");
        blocks2.forEach((block) => {
          block.classList.remove("backface2");
        });
      }, 1000);
    }
  });
});

randomArray(orderRange2);

blocks2.forEach((block, index) => {
  block.style.order = orderRange2[index];
});
//-----------------------------------------------------------------//
blocks3.forEach((block) => {
  block.addEventListener("click", function () {
    block.classList.add("backface");
    flipcard3();
    let newBlock2 = blocks3.filter((y) => y.classList.contains("backface2"));
    if (newBlock2.length === blocks3.length) {
      setTimeout(function () {
        endGame.removeAttribute("style");
        blocks3.forEach((block) => {
          block.classList.remove("backface2");
        });
      }, 1000);
    }
  });
});

randomArray(orderRange3);

blocks3.forEach((block, index) => {
  block.style.order = orderRange3[index];
});
//-----------------------------------------------------------------//

function randomArray(array) {
  let number = array.length,
    random,
    keys;
  for (var i = number - 1; i > 0; i--) {
    random = Math.floor(Math.random() * i);
    keys = array[i];
    array[i] = array[random];
    array[random] = keys;
  }
  return array;
}

function flipcard() {
  let newBlock = blocks.filter((x) => x.classList.contains("backface"));
  if (newBlock.length === 2) {
    memoryGame.classList.add("remove");
    setTimeout(function () {
      memoryGame.classList.remove("remove");
    }, 1000);
    flipblock(newBlock[0], newBlock[1]);
  }
}

function flipcard2() {
  let newBlock = blocks2.filter((x) => x.classList.contains("backface"));
  if (newBlock.length === 2) {
    memoryGame2.classList.add("remove");
    setTimeout(function () {
      memoryGame2.classList.remove("remove");
    }, 1000);
    flipblock(newBlock[0], newBlock[1]);
  }
}

function flipcard3() {
  let newBlock = blocks3.filter((x) => x.classList.contains("backface"));
  if (newBlock.length === 2) {
    memoryGame3.classList.add("remove");
    setTimeout(function () {
      memoryGame3.classList.remove("remove");
    }, 1000);
    flipblock(newBlock[0], newBlock[1]);
  }
}

function flipblock(firstBlock, secondBlock) {
  if (firstBlock.dataset.face === secondBlock.dataset.face) {
    firstBlock.classList.remove("backface");
    secondBlock.classList.remove("backface");
    firstBlock.classList.add("backface2");
    secondBlock.classList.add("backface2");
    score.textContent = score.textContent * 1 + 100;
    nuNumber.textContent = nuNumber.textContent * 1 + 1;
  } else {
    tries.children[0].textContent = tries.children[0].textContent * 1 + 1;
    if (score.textContent == 0) {
    } else {
      score.textContent = score.textContent * 1 - 20;
    }
    setTimeout(function () {
      firstBlock.classList.remove("backface");
      secondBlock.classList.remove("backface");
    }, 1000);
  }
}

colors[0].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = "  #5FF6DC 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = "  #5FF6DC 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = "  #5FF6DC 5px solid";
  });

  infoCountiner.style.border = " #5FF6DC 5px solid";
};

colors[1].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = "  rgb(229, 255, 0) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = "  rgb(229, 255, 0) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = "  rgb(229, 255, 0) 5px solid";
  });
  infoCountiner.style.border = " rgb(229, 255, 0) 5px solid";
};

colors[2].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = " rgb(255, 72, 0) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = " rgb(255, 72, 0) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = " rgb(255, 72, 0) 5px solid";
  });
  infoCountiner.style.border = "rgb(255, 72, 0) 5px solid";
};

colors[3].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = "rgb(255, 8, 173) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = "rgb(255, 8, 173) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = "rgb(255, 8, 173) 5px solid";
  });
  infoCountiner.style.border = "rgb(255, 8, 173) 5px solid";
};

colors[4].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = " rgb(0, 110, 255) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = " rgb(0, 110, 255) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = " rgb(0, 110, 255) 5px solid";
  });
  infoCountiner.style.border = " rgb(0, 110, 255) 5px solid";
};

colors[5].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = "  rgb(225, 0, 255) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = "  rgb(225, 0, 255) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = "  rgb(225, 0, 255) 5px solid";
  });
  infoCountiner.style.border = " rgb(225, 0, 255) 5px solid";
};

colors[6].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = "rgb(117, 255, 112) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = "rgb(117, 255, 112) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = "rgb(117, 255, 112) 5px solid";
  });
  infoCountiner.style.border = "rgb(117, 255, 112) 5px solid";
};

colors[7].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = " #333 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = " #333 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = " #333 5px solid";
  });
  infoCountiner.style.border = "#333 5px solid";
};

colors[8].onclick = function () {
  blocks.forEach((block) => {
    block.style.border = " rgb(212, 1, 82) 5px solid";
  });
  blocks2.forEach((block) => {
    block.style.border = " rgb(212, 1, 82) 5px solid";
  });
  blocks3.forEach((block) => {
    block.style.border = " rgb(212, 1, 82) 5px solid";
  });
  infoCountiner.style.border = "rgb(212, 1, 82) 5px solid";
};

bar.onclick = function () {
  if (MO.getAttribute("style") === "display:none;") {
    MO.setAttribute("style", " ");
  } else {
    MO.setAttribute("style", "display:none;");
  }
};

degrit.children[0].onclick = function () {
  memoryGame3.removeAttribute("style");
  degrit.style.display = "none";
  startGame.children[0].style.display = "none";
  if (degrit.getAttribute("style") === "display: none;") {
    startGame.children[2].removeAttribute("style");
  }
};

degrit.children[1].onclick = function () {
  memoryGame2.removeAttribute("style");
  degrit.style.display = "none";
  startGame.children[0].style.display = "none";
  if (degrit.getAttribute("style") === "display: none;") {
    startGame.children[2].removeAttribute("style");
  }
};

degrit.children[2].onclick = function () {
  memoryGame.removeAttribute("style");
  degrit.style.display = "none";
  startGame.children[0].style.display = "none";
  if (degrit.getAttribute("style") === "display: none;") {
    startGame.children[2].removeAttribute("style");
  }
};

startGame.children[2].onclick = function () {
  let Name = prompt("What's Your Name?");
  if (Name == "") {
    yourName.textContent = "Player1";
  } else {
    yourName.textContent = Name;
  }
  startGame.style.display = "none";
};

function timer(blockt, time) {
  blockt.forEach(function (block) {
    setInterval(function () {
      block.classList.remove("backface2");
    }, time);
  });
}

timer(blocks, 100000);

reflesh.onclick = function () {
  endGame.style.display = "none";
  score.textContent = 0;
  nuNumber.textContent = 0;
  tries.children[0].textContent = 0;
  startGame.removeAttribute("style");
  degrit.removeAttribute("style");
  document.getElementById("start").style.display = "none";
  memoryGame.style.display = "none";
  memoryGame2.style.display = "none";
  memoryGame3.style.display = "none";
  startGame.children[0].removeAttribute("style");
};

/*

    blocks.forEach(function(block){
        let bestFunc= setInterval(function(){
            block.classList.remove("backface2")
           },100000);
    });
*/
