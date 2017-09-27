function squareOfStars([arg1]) {
    var a = Number(arg1)
    console.log("*".repeat(a));
      for (var i = 0; i < a-2 ; i++) {
          console.log("*".repeat(1) + " ".repeat(a - 2) + "*".repeat(1));
    }
    console.log("*".repeat(a))
    }
    squareOfStars(["7"]);
    