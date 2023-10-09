import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  name: string = "Technologies";
  technologies: string[] = [
    "Git",
    "Github",
    "HTML",
    "CSS",
    "Javascript",
    "C#",
    "EF",
    "Java",
    "Hibernate",
    "Spring",
    "WebApi",
    "Bootstrap",
    "SQL",
    "MySQL",
    "Microsoft Azure",
    "Typescript",
    "Angular",
    "Python"
  ];
}
