function ViewChechen() {
  var fileLoc = document.location.href;
  var fileNew = fileLoc.replace(".html", "che.html");
  document.getElementById("che").src = fileNew;
  che.style.display = "inline";
  
  if (rus.style.display == "none") {
    che.style.width = "90%";
  }
  else if (rus.style.display == "inline") {
    rus.style.width = "45%";
    che.style.width = "45%";
  }

  if (document.documentElement.clientHeight) {
    if (document.documentElement.clientHeight < 600) {
      var height = 0.5 * document.documentElement.clientHeight;
      che.style.height = height + "px";
    }
    else {
     che.style.height = "300px";
    }
  }
  else {
    che.style.height = "300px";
  }
}

function ViewRussian() {
  var fileLoc = document.location.href;
  var fileNew = fileLoc.replace(".html", "rus.html");
  document.getElementById("rus").src = fileNew;
  rus.style.display = "inline";

  if (che.style.display == "none") {
    rus.style.width = "90%";
  }
  else if (che.style.display == "inline") {
    che.style.width = "45%";
    rus.style.width = "45%";
  }

  if (document.documentElement.clientHeight) {
    if (document.documentElement.clientHeight < 600) {
      var height = 0.5 * document.documentElement.clientHeight;
      rus.style.height = height + "px";
    }
    else {
      rus.style.height = "300px";
    }
  }
  else {
    rus.style.height = "300px";
  }
}

function CloseChechen() {
  che.style.display = "none";
  if (rus.style.display == "inline") {
    rus.style.width = "90%";
  }
}

function CloseRussian() {
  rus.style.display = "none";
  if (che.style.display == "inline") {
    che.style.width = "90%";
  }
}
