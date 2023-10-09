import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent {
  title: string = "Education";
  education = [
    {
      dates: "AUG 2023 - NOV 2023",
      company: "MAX Technical Training",
      role: "Software Engineer",
      degree: "Certificate",
      bullets: [
        "Rigorous 13 weeks of immersive Full Stack Software Development boot camp - Java and C# (.NET)",
        "<i class='fa-regular fa-window-maximize'></i><b>Front-End:</b><br><span class='tech-ed'>HTML</span><span class='tech-ed'>CSS</span><span class='tech-ed'>Bootstrap</span><span class='tech-ed'>JavaScript</span><span class='tech-ed'>jQuery</span><span class='tech-ed'>TypeScript</span><span class='tech-ed'>Angular</span>",
        "<i class='fa-solid fa-server'></i><b>Back-End:</b> <br><span class='tech-ed'>Java</span><span class='tech-ed'>C#</span><span class='tech-ed'>Entity Framework</span><span class='tech-ed'>.NET Framework</span><span class='tech-ed'>Hibernate</span><span class='tech-ed'>RESTful Web Services</span><span class='tech-ed'>Spring</span><span class='tech-ed'>Spring Boot</span><span class='tech-ed'>Spring MVC</span><span class='tech-ed'>Maven</span><span class='tech-ed'>T-SQL</span>",
        "<i class='fa-solid fa-database'></i><b>Database:</b> <br><span class='tech-ed'>Microsoft SQL Server</span><span class='tech-ed'>MySQL</span><span class='tech-ed'>SQLite</span>",
        "<i class='fa-solid fa-screwdriver-wrench'></i><b>Tools:</b><br><span class='tech-ed'>Visual Studio</span><span class='tech-ed'>VS Code</span><span class='tech-ed'>Spring Tool Suite 4</span><span class='tech-ed'>Git</span><span class='tech-ed'>GitHub</span><span class='tech-ed'>Git Bash</span><span class='tech-ed'>Postman</span><span class='tech-ed'>MySQL Workbench</span><span class='tech-ed'>Azure Data Studio</span><span class='tech-ed'>Microsoft Azure</span><span class='tech-ed'>Scrum"
      ]
    },
    {
      dates: "JAN 2016 - JAN 2018",
      company: "University Of Phoenix",
      role: "Information Technology",
      degree: "Associates",
      bullets: [
        "Associates Degree with Information Assurance & Security Certificate",
        "<i class='fa-solid fa-laptop-code'></i><b>Skills Obtained:</b> <br><span class='tech-ed'>Network Security</span><span class='tech-ed'>Data Security</span><span class='tech-ed'>HTML</span><span class='tech-ed'>Python</span><span class='tech-ed'>Data Assurance</span><span class='tech-ed'>Programming</span><span class='tech-ed'>Databases</span><span class='tech-ed'>Cybersecurity</span><span class='tech-ed'>Microsoft Server 2012</span><span class='tech-ed'>Risk Management</span><span class='tech-ed'>Agile</span>"
      ]
    }
  ]

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }
}
