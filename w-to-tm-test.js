//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getSourceFromParsec() {

    let parsec = document.getElementById("fromParsec").value;

//    var textArea = document.getElementById("sourceFromParsec");
//    var arrayFromTextArea = textArea.value.split(String.fromCharCode(10));

    //alert("1");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (parsec.length == '8') {parsecToCalc = parsec;}
      if (parsec.length == '7') {parsecToCalc = '0' + parsec;}
      if (parsec.length == '6') {parsecToCalc = '00' + parsec;}

      //alert("2");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let hexLeft = parsecToCalc.slice(0, 4);
    let hexRight = parsecToCalc.slice(Math.max(parsecToCalc.length - 4, 0));

    let decLeft = parseInt(hexLeft, 16);
    let decRight = parseInt(hexRight, 16);

    var decLeftToCalc = decLeft.toString();
    var decRightToCalc = decRight.toString();

    //alert("3");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (decRightToCalc.length == '4') {decRightToCalc = '0' + decRightToCalc;}
      if (decRightToCalc.length == '3') {decRightToCalc = '00' + decRightToCalc;}

      //alert("4");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("intText").value = decLeftToCalc + decRightToCalc;
    //document.getElementById("toWtoTM").value = arrayFromTextArea;

    //alert(parsec);

  //var sample_text = "759ADB"

  // convert sample text to array of bytes
  var byte_array = parsec.split('').map(function(x){return x.charCodeAt(0)})
  var crc8 = new CRC8();
  var checksum = crc8.checksum(byte_array);
  //var checksum = '0BDAAE';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //document.getElementById("toBolid").value = ';;;;;; ' + checksum + ' 000000 ' + parsec + ' 01 ' + ';;;;';
    //document.getElementById("toBolid").value = checksum;

    alert(checksum);


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// "Class" for calculating CRC8 checksums...
function CRC8(polynomial) { // constructor takes an optional polynomial type from CRC8.POLY
  if (polynomial == null) polynomial = CRC8.POLY.CRC8_DALLAS_MAXIM
  this.table = CRC8.generateTable(polynomial);
}

// Returns the 8-bit checksum given an array of byte-sized numbers
CRC8.prototype.checksum = function(byte_array) {
  var c = 0

  for (var i = 0; i < byte_array.length; i++ ) 
    c = this.table[(c ^ byte_array[i]) % 256] 

  return c;
} 

// returns a lookup table byte array given one of the values from CRC8.POLY 
CRC8.generateTable =function(polynomial)
{
  var csTable = [] // 256 max len byte array
  
  for ( var i = 0; i < 256; ++i ) {
    var curr = i
    for ( var j = 0; j < 8; ++j ) {
      if ((curr & 0x80) !== 0) {
        curr = ((curr << 1) ^ polynomial) % 256
      } else {
        curr = (curr << 1) % 256
      }
    }
    csTable[i] = curr 
  }
    
  return csTable
}

// This "enum" can be used to indicate what kind of CRC8 checksum you will be calculating
CRC8.POLY = {
    //CRC8 : 0xd5,
    CRC8 : 0x8C,
    CRC8_CCITT : 0x07,
    CRC8_DALLAS_MAXIM : 0x31,
    CRC8_SAE_J1850 : 0x1D,
    CRC_8_WCDMA : 0x9b,
}