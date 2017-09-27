function triangleFace([arg1,arg2,arg3]) {
    let a = Number(arg1);
    let b = Number(arg2);
    let c = Number(arg3);
    var p = (a + b + c) / 2;
    var e = Math.sqrt((p * (p - a) * (p - b) * (p - c)));
    console.log("SIDE A IS: " + a + "cm" + "| SIDE B IS: " + b + "cm" + "| SIDE C IS: " + c + "cm");
    console.log("p = " + (a + b + c) / 2);
    console.log("AREA OF TRIANGLE IS : " + e + "cm");

    // console.log("p = " + (a + b + c) / 2);
    //let z = p * (p - a) * (p - b) * (p - c);
}
triangleFace(["10", "13", "17"]);
triangleFace(["3", "3", "2"]);
triangleFace(["1", "1", "1"]);