function openForm(formName, element, color) {
  var i, tabContents, tabLinks;
  tabContents = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.backgroundColor = "";
  }

  document.getElementById(formName).style.display = "block";

  element.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();