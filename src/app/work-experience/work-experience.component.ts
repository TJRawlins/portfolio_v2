import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkExperienceComponent {
  title: string = "Experience";
  experiences = [
    {
      dates: "NOV 2023 - Present",
      company: "CSC Global Inc.",
      role: "Software Engineer",
      location: "Remote",
      bullets: [
        "<i class='fa-solid fa-circle-chevron-right'></i> Build, test and maintain code for proprietary corporate tax software",
        "<i class='fa-solid fa-circle-chevron-right'></i> Works as a member of a <span class='tech'>Scrum</span> Team using <span class='tech'>Agile</span> principles.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Utilizing the following technologies and frameworks: <span class='tech'>C#</span>, <span class='tech'>.Net</span>, <span class='tech'>React</span> and <span class='tech'>Bootstrap</span>. ",
      ]
    },
    {
      dates: "AUG 2021 - NOV 2023",
      company: "CSC Global Inc.",
      role: "Application Support",
      location: "Remote",
      bullets: [
        "<i class='fa-solid fa-circle-chevron-right'></i> Provides technical and application support for proprietary real estate e-recording software.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Receives over 300 phone calls, chats, and email inquiries a month.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Troubleshoot, triage, and resolve technical issues using Salesforce Case Management.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Designed and built 2 web applications, an <span class='tech'>XML</span> parsing application and a PDF search application allowing employees to easily search for guides and documentation, both using <span class='tech'>JavaScript</span>, <span class='tech'>HTML</span>, and <span class='tech'>CSS</span>.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Wrote 5 <span class='tech'>JavaScript</span> user scripts that run in TamperMonkey to perform various tasks such as fetching data for custom reports."
      ]
    },
    {
      dates: "JAN 2021 - FEB 2021",
      company: "Hays",
      role: "Application Support",
      location: "Remote",
      bullets: [
        "<i class='fa-solid fa-briefcase'></i>Client: Atos",
        "<i class='fa-solid fa-circle-chevron-right'></i> Supported a major Cerner software migration.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Received over 100 inbound calls regarding application, hardware, access, and networking issues per week.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Performed password resets and account unlocks through Active Directory for over 1000 users.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Created and managed hundreds of IT incident and access control tickets for P1, P2, P3, and P4 incidents.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Remote accessed client devices to perform troubleshooting and access control tasks."
      ]
    },
    {
      dates: "FEB 2014 - NOV 2020",
      company: "ADR Inc.",
      role: "Manager & Tech Support",
      location: "Las Vegas, NV",
      bullets: [
        "<i class='fa-solid fa-circle-chevron-right'></i> Managed 10 staff members, overseeing administrative and dispatching operations.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Designed and built a <span class='tech'>Python</span> web data extracting application.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Provided internal IT support, troubleshooting both hardware and software issues.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Deployed and maintained network security on company modems, routers, and computers including configuring and deploying a VPN.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Receive and dispatch thousands of service calls using dispatching and case management software"
      ]
    },
    {
      dates: "DEC 2012 - DEC 2013",
      company: "Anthem Inc.",
      role: "Customer Care Advocate",
      location: "Thousand Oaks, CA",
      bullets: [
        "<i class='fa-solid fa-circle-chevron-right'></i> Responded to a 60 plus incoming customer calls per day regarding claims, payment, eligibility, and benefits using CSR software and call center telephone systems",
        "<i class='fa-solid fa-circle-chevron-right'></i> Received and processed insurance premium payments"
      ]
    },
    {
      dates: "JUN 2010 - DEC 2012",
      company: "Anthem Inc.",
      role: "Medical Claims Processor",
      location: "Camarillo, CA",
      bullets: [
        "<i class='fa-solid fa-circle-chevron-right'></i> Coded, processed, and adjusted over 500 health insurance claims for payments with WGS Claims and Mainframe systems based on CPT, ICD-9/ICD-10, and processing error codes per day.",
        "<i class='fa-solid fa-circle-chevron-right'></i> Handled medical records, legal documents, and other highly sensitive material",
        "<i class='fa-solid fa-circle-chevron-right'></i> Researched, analyzed, and resolved medical and dental claim issues using Mainframe systems, CCB CSR software and FileNet"
      ]
    }
  ]

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

}
