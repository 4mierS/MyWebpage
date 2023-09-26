var projectArr = ["HM", "GIP", "TI", "ADS" , "TILO", "DNS", "HM2", "BWL" , "SWE", "OOS", "ARBK", "DBWT" ];
var projectArrLong = [
  "Höhere Mathematik", 
  "Grundlagen der Informatik und höhere Programmiersprachen", 
  "Technische Informatik",
 "Algorithmen und Datenstrukturen", 
 "Theoretische Informatik und Logik", 
 "Datennetze und IT-Sicherheit", 
 "Höhere Mathematik 2", 
 "Betriebs- und Wirtschaftslehre" , 
 "Software Engineering", 
 "Objektorientierte Programmiersprachen", 
 "ARBK", "DBWT" ];

var projectDiv;
var projectTitle;
var projectDescription;
var projectLink;
var projectImg;
var projectBtnDiv;
var projectBtn;

for (i = 0; i < projectArr.length; i++) {
  projectDiv = document.createElement('div');
  projectTitle = document.createElement('h3');
  projectDescription = document.createElement('p');
  projectLink = document.createElement('a');
  projectImg = document.createElement('img');
  projectBtn = document.createElement('button');
  projectBtnDiv = document.createElement('div');
  
  projectDiv.className = "project " + i;
  projectDiv.innerHTML = projectArr[i];
  projectDiv.id = "project-" + i;


  projectTitle.innerHTML = projectArrLong[i];
  projectBtn.innerHTML = "Read More";
  projectBtn.type = "button";

  projectBtnDiv.id = "readmore";
  projectBtnDiv.appendChild(projectBtn);
  projectLink.rel = "noopener";
  projectBtn.id = "btn-" + i;
  projectBtn.setAttribute("onclick", "opened()");
  
  document.getElementsByClassName("projects-container")[0].appendChild(projectDiv);
  document.getElementsByClassName("project")[i].appendChild(projectTitle);
  document.getElementsByClassName("project")[i].appendChild(projectDescription);  
  document.getElementsByClassName("project")[i].appendChild(projectLink);
  document.getElementsByClassName("project")[i].appendChild(projectImg);
  document.getElementsByClassName("project")[i].appendChild(projectBtnDiv); 
}