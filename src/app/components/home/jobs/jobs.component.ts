import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  active = 0;
  experiences = [
    {
      Tab: 'Omni App Solutions',
      Title: 'Frontend Developer',
      Date: 'Sept 2022 - Present',
      Description: [
        'Developed and maintained enterprise-level web applications using Angular and Ionic.',
        'Collaborated closely with UX/UI designers to create responsive and user-friendly interfaces.Implemented state management using NgRx to handle complex application states.',
        'Worked with RESTful APIs and integrated third-party services to enhance application functionality.',
        'Conducted code reviews and provided mentorship to junior developers.',
        'Utilized Agile methodologies and participated in daily stand-ups, sprint planning, and retrospectives.',
        'Optimized application performance and implemented best practices for code quality and maintainability.',
      ],
    },

    {
      Tab: 'Fiverr',
      Title: 'Freelancer',
      Date: 'Jan 2020 - Present',
      Description: [
        'Delivered high-quality web development services to clients worldwide.',
        'Specialized in WordPress development, Web Development, Graphic design, and eCommerce solutions.',
        'Built custom websites and themes according to client specifications',
      ],
    },
    {
      Tab: 'Social B',
      Title: 'Web Development Intern',
      Date: 'Jan 2021 - Mar 2021',
      Description: [
        'Assisted in developing and maintaining websites using HTML, CSS, and JavaScript.',
        'Collaborated with the development team to implement new features and fix bugs.',
        'Gained practical experience in web development and enhanced problem-solving skills.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
