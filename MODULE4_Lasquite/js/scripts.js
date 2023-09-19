function specialCharacter(n) {
  var regex = /[~`!#$%\^&*+=\-\[\]\';,/{}|\\":<>\?]/g;
  return regex.test(n);
}

function usernameCheck() {
  var n;

  n = document.myform.n.value;

  if (n.length >= 8) {
    if (specialCharacter(n)) {
      alert("Username has special characters.")
    } else {
      alert("Username is valid.")
    }
  } else {
    alert("Username must have 8 characters.")
  }
}