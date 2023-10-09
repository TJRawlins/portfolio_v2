import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Tony Rawlins';
  title = "Software Engineer at CSC"
  address = 'Golden Valley, AZ';
  phone = '714-388-2054';
  email = 'tjrawlins.dev@gmail.com';
  locationUrl = "https://www.google.com/maps/search/golden+valley+az"
  linkedinUrl = "https://www.linkedin.com/in/tonyrawlins/";
  githubUrl = "https://github.com/TJRawlins";
  emailUrl = "mailto: tjrawlins.dev@gmail.com";
}
