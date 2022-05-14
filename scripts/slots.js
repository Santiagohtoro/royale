var number;
var positions = {
  9: 320,
  8: 280,
  7: 240,
  6: 200,
  5: 160,
  4: 120,
  3: 80,
  2: 40,
  1: 0
};

$("#scroll").on("click", function() {
  if ($(".carousel").hasClass("is-animating")) {
    for (i = 1; i <= 3; i++) {
      number = Math.floor(Math.random() * 9) + 1; // 1 to 9
      let element = $(".slot[data=" + i + "] .carousel");
      $(element).animateRotate(positions[number], {
        duration: 1000,
        easing: "ease-out",
        complete: function() {},
        step: function() {}
      });
    }
  }
  $(".carousel").toggleClass("is-animating");
});

// Function to roll 3 at once
// Call rollNumbers([1,2,3]) after event fires in contract
function rollNumbers(numbers) {
  let element;
  let pos = 0;
  for (i = 1; i <= 3; i++) {
    element = $(".slot[data=" + i + "] .carousel");
    $(element).animateRotate(positions[numbers[pos]], {
      duration: 1000,
      easing: "ease-out"
    });
    pos++;
  }
}

// https://stackoverflow.com/a/15191130
$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({ deg: 0 }).animate(
      { deg: angle },
      {
        duration: duration,
        easing: easing,
        step: function(now) {
          $elem.css({
            transform: "rotateX(-" + now + "deg)"
          });
        },
        complete: complete || $.noop
      }
    );
  });
};

$(document).ready(function() {
  // Calculate translateZ
  var sceneHeight = $(".scene").height();
  var cellSize = sceneHeight;
  var numberOfCells = 9;
  var tz = Math.round(cellSize / 2 / Math.tan(Math.PI / numberOfCells));

  // Rotate and translate carousel cells
  var count = 0;
  for (i = 1; i <= 9; i++) {
    $(".carousel__cell:nth-child(" + i + ")").css({
      transform: "rotateX(" + count + "deg) translateZ(" + tz + "px)"
    });
    count += 40;
  }
});