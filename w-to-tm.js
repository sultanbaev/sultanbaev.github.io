//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getSourceFromParsec() {

    let parsec = document.getElementById("sourceFromParsec").value;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (parsec.length == '8') {
        parsecToCalc = parsec;
      }

      if (parsec.length == '7') {
        parsecToCalc = '0' + parsec;
      }

      if (parsec.length == '6') {
        parsecToCalc = '00' + parsec;
      }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let hexLeft = parsecToCalc.slice(0, 4);
    let hexRight = parsecToCalc.slice(Math.max(parsecToCalc.length - 4, 0));

    let decLeft = parseInt(hexLeft, 16);
    let decRight = parseInt(hexRight, 16);

    var decLeftToCalc = decLeft.toString();
    var decRightToCalc = decRight.toString();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//      if (decRightToCalc.length == '5') {
//        inTxt = decLeft + '' + decRight;
//        decRight = decRight;
//          decRightToCalc = decRight;
//      }

      if (decRightToCalc.length == '4') {
//        inTxt = decLeft + '0' + decRight;
        decRightToCalc = '0' + decRightToCalc;
//        decLeftToCalc = '0' + decRight;
      }

      if (decRightToCalc.length == '3') {
//        inTxt = decLeft + '00' + decRight;
//        decRight = '00' + decRight;
        decRightToCalc = '00' + decRightToCalc;
      }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    document.getElementById("toWtoTM").value = parsecToCalc;
//    document.getElementById("toWtoTM").value = hexLeft;
//    document.getElementById("toWtoTM").value = hexRight;
//    document.getElementById("toWtoTM").value = hexLeft + ' / ' + hexRight;

//    document.getElementById("toWtoTM").value = decLeft;
//    document.getElementById("toWtoTM").value = decRight;
//    document.getElementById("toWtoTM").value = decLeft + ' /0/ ' + decRight;

//    document.getElementById("toWtoTM").value = inTxt;
    document.getElementById("toWtoTM").value = decLeftToCalc + decRightToCalc;
//    document.getElementById("toWtoTM").value = decLeftToCalc;
//    document.getElementById("toWtoTM").value = decRightToCalc;
//    document.getElementById("toWtoTM").value = decLeft + '/' + decRightToCalc;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////