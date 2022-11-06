function ShowNavBars() {
  document.getElementById("nav_top").style.display = "none";
  document.getElementById("nav_top2").style.display = "block";
  HideAll();
  document.getElementById("nav_side").style.display = "none";
  document.getElementById("nav_side2").style.display = "block";
  HideAll2()
  ThisPage();  
}

function ThisPage() {
  var thisName = document.location.pathname;
  if (thisName.indexOf("index") > -1 ) {
    document.getElementById("main_index").style.color = "yellow";
    document.getElementById("main_index2").style.color = "yellow";
  }
  else  if ((thisName.indexOf("feedback") > -1 ) || (thisName.indexOf("search") > -1 )) {
    document.getElementById("main_index").style.color = "orange";
    document.getElementById("main_index2").style.color = "orange";
  }
  else  if (thisName.indexOf("genesis") > -1 ) {
    if (thisName.indexOf("genesis.html") > -1) {
      document.getElementById("gen_main").style.color = "yellow";
      document.getElementById("gen_main2").style.color = "yellow";
    } else {
      document.getElementById("gen_main").style.color = "orange";
      document.getElementById("gen_main2").style.color = "orange";
    }
  }
  else  if (thisName.indexOf("ruth") > -1 ) {
    if (thisName.indexOf("ruth.html") > -1) {
      document.getElementById("rut_main").style.color = "yellow";
      document.getElementById("rut_main2").style.color = "yellow";
    } else {
      document.getElementById("rut_main").style.color = "orange";
      document.getElementById("rut_main2").style.color = "orange";
    }
  }
  else  if (thisName.indexOf("esther") > -1 ) {
    if (thisName.indexOf("esther.html") > -1) {
      document.getElementById("est_main").style.color = "yellow";
      document.getElementById("est_main2").style.color = "yellow";
    } else {
      document.getElementById("est_main").style.color = "orange";
      document.getElementById("est_main2").style.color = "orange";
    }
  }
  else  if (thisName.indexOf("proverbs") > -1 ) {
    if (thisName.indexOf("proverbs.html") > -1) {
      document.getElementById("pro_main").style.color = "yellow";
      document.getElementById("pro_main2").style.color = "yellow";
    } else {
      document.getElementById("pro_main").style.color = "orange";
      document.getElementById("pro_main2").style.color = "orange";
    }
  }
  else  if (thisName.indexOf("jonah") > -1 ) {
    if (thisName.indexOf("jonah.html") > -1) {
      document.getElementById("jon_main").style.color = "yellow";
      document.getElementById("jon_main2").style.color = "yellow";
    } else {
      document.getElementById("jon_main").style.color = "orange";
      document.getElementById("jon_main2").style.color = "orange";
    }
  }
}

function HideAll() {
  document.getElementById("ind").style.display = "none";
  document.getElementById("gen").style.display = "none";
  document.getElementById("rut").style.display = "none";
  document.getElementById("est").style.display = "none";
  document.getElementById("pro").style.display = "none";
  document.getElementById("jon").style.display = "none";
}

function HideAll2() {
  document.getElementById("ind2").style.display = "none";
  document.getElementById("gen2").style.display = "none";
  document.getElementById("rut2").style.display = "none";
  document.getElementById("est2").style.display = "none";
  document.getElementById("pro2").style.display = "none";
  document.getElementById("jon2").style.display = "none";
}

function ShowSubmenu(submenuName) {
  if (submenuName == 'index') {
    document.getElementById("ind").style.display = "block";
  }
  else if (submenuName == 'genesis') {
    document.getElementById("gen").style.display = "block";
  }
  else if (submenuName == 'ruth') {
    document.getElementById("rut").style.display = "block";  
  }
  else if (submenuName == 'esther') {
    document.getElementById("est").style.display = "block"; 
  }
  else if (submenuName == 'proverbs') {
    document.getElementById("pro").style.display = "block"; 
  }
  else if (submenuName == 'jonah') {
    document.getElementById("jon").style.display = "block";  
  }
}

function ShowSubmenu2(submenuName) {
  if (submenuName == 'index') {
    document.getElementById("ind2").style.display = "block";
  }
  else if (submenuName == 'genesis') {
    document.getElementById("gen2").style.display = "block";
  }
  else if (submenuName == 'ruth') {
    document.getElementById("rut2").style.display = "block";  
  }
  else if (submenuName == 'esther') {
    document.getElementById("est2").style.display = "block"; 
  }
  else if (submenuName == 'proverbs') {
    document.getElementById("pro2").style.display = "block"; 
  }
  else if (submenuName == 'jonah') {
    document.getElementById("jon2").style.display = "block";  
  }

  if (submenuName != 'index') {
    document.getElementById("ind2").style.display = "none";
  } 
  if (submenuName != 'genesis') {
    document.getElementById("gen2").style.display = "none";
  }
  if (submenuName != 'ruth') {
    document.getElementById("rut2").style.display = "none";  
  }
  if (submenuName != 'esther') {
    document.getElementById("est2").style.display = "none"; 
  }
  if (submenuName != 'proverbs') {
    document.getElementById("pro2").style.display = "none"; 
  }
  if (submenuName != 'jonah') {
    document.getElementById("jon2").style.display = "none";  
  }
}

