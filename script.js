function mouse(x) {
  var displayDiv = document.getElementById("preview");
  var nameDiv = document.getElementById("name");
  var imgsrc = x.src;
  var fileid = imgsrc.split("/").pop();

  displayDiv.innerHTML = '<img src="' + imgsrc + '" >';
  nameDiv.innerHTML = getName(fileid.slice(0, -4));
  document.getElementById("label").src = "img/text" + fileid.slice(0, -5) + ".svg";
  document.getElementById("desc").innerHTML = getDesc(fileid.slice(0, -4));
}

function getName(id) {
  if (id == "ai1") {
    return "Andrew";
  }
  else if (id == "ba1") {
    return "Agent R";
  }
  else if (id == "ce1") {
    return "DEADBEEF";
  }
  else if (id == "sc1") {
    return "Edge";
  }
  else if (id == "ai2") {
    return "Singularity";
  }
  else if (id == "ba2") {
    return "/root";
  }
  else if (id == "ce2") {
    return "Raspberry";
  }
  else if (id == "sc2") {
    return "Fireshark";
  }
}

function getDesc(id) {
  if (id == "ai1") {
    return "<p>- has a magical black box </p> <p>- black box can see future </p> <p>- floats around because he can</p> <p> - famous in machine learning <br>circles</p>";
  }
  else if (id == "ba1") {
    return "<p>- excels in everything</p> <p>- over-optimizes her life</p> <p>- reaps rewards </p> <p>- spends her free time <br>data scraping</p>";
  }
  else if (id == "ce1") {
    return "<p>- thinks in 0s and 1s </p> <p>- has a 'there are 10 types of people <br>in the world...' shirt</p> <p>- makes things from <br>bits and pieces</p>";
  }
  else if (id == "sc1") {
    return "<p>- refuses to be called her old name</p><p>- recently upgraded her fox</p> <p>- sees everything</p> <p>- even your incognito</p>";
  }
  else if (id == "ai2") {
    return "<p>- experimented a little too much <br>with transhumanism </p> <p>- has holographic pupper </p> <p>- also floats around <br>because he can</p>";
  }
  else if (id == "ba2") {
    return "<p>- got lost in the <a href='https://en.wikipedia.org/wiki/Random_forest'>random forest</a></p> <p>- finds things fast</p> <p>- O(log n) <br>most of the time </p> <p>- 'leaf me alone'</p>";
  }
  else if (id == "ce2") {
    return "<p>- uploaded herself to the <br>internet of things </p> <p>- finished her <a href='https://github.com/wangjohn/mit-courses/tree/master/6.004/lab6'>lab 6</a> in<br>2 hours</p> <p>- can speak digital</p>";
  }
  else if (id == "sc2") {
    return "<p>- lost his white hat </p> <p>- considering getting <br>a black one</p> <p>- likes hash browns</p>";
  }
}

function isMobile() { 
  if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
    return true;
  }

  else if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  } else {
    return false;
  }
}


if (isMobile()) {
  document.getElementById("table-container").style.visibility = "visible";
}