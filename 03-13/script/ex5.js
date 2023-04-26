function ex() {
  var x = 1;
  let y = 2;

  if (true) {
    var x = 3;
    let y = 4;
    console.log(x); // value 3
    console.log(y); // value is 4
  }

  console.log(x); // value 3
  console.log(y); // value 2
}

ex();
