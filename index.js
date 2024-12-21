const buttonColors = ["green", "red", "yellow", "blue"];
let pattern = [];
let i = 0;  //for  checking user clicked color with the correct pattern color


//key event
$(document).keydown(() => {
  if (pattern.length === 0) {
    nextPattern();
  }
});


//click event
$(".btn").click((e) => {
  if (pattern.length !== 0) {
    let clickedColor = e.target.id;
    animateClick(clickedColor);
    playSound(clickedColor);
    checkUserPattern(clickedColor);
  }
});



//chech user selected pattern with correct pattern

const checkUserPattern = (clickedColor) => {
  if (pattern[i] === clickedColor) {
    if (i === pattern.length - 1) {
      $("h2").html("Congratulation, you cleared this level🍾🎉🎊");
      setTimeout(() => {
        $("h2").text("");
      }, 2000);
      setTimeout(() => {
        nextPattern();
      }, 2500);
    }
    i++;
  } else {
    gameOver();
  }
}

//to continue the pattern for next level
const nextPattern = () => {
  chosenColor = buttonColors[Math.floor(Math.random() * 4)];
  pattern.push(chosenColor);
  playSound(chosenColor);
  $(`#${chosenColor}`).css("opacity", 0);
  setTimeout(() => {
    $(`#${chosenColor}`).css("opacity", 1);
  }, 100);
  console.log(pattern);
  $("h1").text(`level ${pattern.length}`);

  i = 0;
};



// game over 
const gameOver = () => {
  new Audio("./sounds/wrong.mp3").play();
  pattern.length = 0;
  i = 0;
  $("h1").text("Game Over, Press A Key To Start Again");
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 100);
};


// on color click animation

const animateClick = (clickedColor) => {
  $(`#${clickedColor}`).addClass("pressed");
  setTimeout(() => {
    $(`#${clickedColor}`).removeClass("pressed");
  }, 100);
};



// play the sound
const playSound = (name) => new Audio(`./sounds/${name}.mp3`).play();
