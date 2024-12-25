import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  @ViewChild("imgContainer") imgContainer: ElementRef;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  featureProjects = [
    {
      Title: "Oclass App",
      Description: `
       OClass is a powerful class management system tailored for dance studios, gyms, and educational centers.
        It streamlines scheduling, invoicing, and payments, offering features like real-time class adjustments
         and student self-service portals. OClass integrates with major payment systems like PayNow, providing
          business insights through advanced reporting on sales, expenses, and student data. The platform also
           automates administrative tasks such as class duplication and payroll tracking, reducing manual work
            and increasing operational efficiency for businesses.`,
      imgs: [
        "/assets/images/oclass-1.png",
        "/assets/images/oclass-2.png",
        "/assets/images/oclass-3.png",
        "/assets/images/oclass-4.png",
        "/assets/images/oclass-5.png",
        "/assets/images/oclass-6.png",
        "/assets/images/oclass-7.png",
        "/assets/images/oclass-8.png",
        "/assets/images/oclass-9.png",
      ],
      Technologies: ["Angular", "Ionic", "TypeScript", "SCSS", "Bootstrap"],
      Link: "https://oclass.app/",
      Date: "August 2024",
      Role: "Frontend Developer",
    },
    {
      Title: "Property Lim Brothers",
      Description: `
        A real estate platform built with <span class='underline'>Angular</span>, integrating
        Google Calendar and Tableau iframes for enhanced functionality and data visualization.
        The platform features a comprehensive suite of tools for buyers, sellers, and renters,
        including an intuitive property search engine, expert market insights, and personalized
        assistance from seasoned agents. Focused on creating a user-friendly and responsive experience.`,
      imgs: [
        "/assets/images/alana-1.png",
        "/assets/images/alana-2.png",
        "/assets/images/alana-3.png",
        "/assets/images/alana-4.png",
        "/assets/images/alana-5.png",
        "/assets/images/alana-6.png",
        "/assets/images/alana-7.png",
        "/assets/images/alana-8.png",
        "/assets/images/alana-9.png",
      ],
      Technologies: ["Angular", "Ionic", "TypeScript", "SASS"],
      Link: "https://www.propertylimbrothers.com/",
      Date: "March 2024",
      Role: "Lead Frontend Developer",
    },

    {
      Title: "Content Creator Portfolio",
      Description: `
      Developed and designed a personal portfolio website to showcase professional skills, projects, and achievements. The website features a clean, modern, and responsive design, ensuring seamless navigation across devices. Built using cutting-edge web technologies, it highlights key projects and expertise, providing visitors with an interactive and visually appealing experience`,
      imgs: [
        "assets/images/portfolio-1.png",
        "assets/images/portfolio-2.png",
        "assets/images/portfolio-3.png",
        "assets/images/portfolio-4.png",
      ],
      Technologies: ["Angular", "TypeScript", "SCSS", "Bootstrap"],
      Link: "https://fatima-saif-portfolio.vercel.app/",
      Date: "September 2024",
      Role: "Design & Development",
    },

    {
      Title: "Makeit (AR Based Recipe Application)",
      Description: `Developed a mobile and web application tailored for food enthusiasts, featuring an advanced recipe search, a diet planner, augmented reality (AR) viewing, and an interactive news feed. The app enables users to explore recipes in an immersive AR environment, enhancing the overall experience. An admin panel provides comprehensive control over recipes and key functionalities, ensuring seamless management. Users can access all features through the customer site, enjoying a smooth and engaging experience.`,
      imgs: ["/assets/images/recipe_app.gif"],
      Technologies: ["ReactJs", "Firebase", "Flutter", "ARCore", "Python"],
      Link: "https://makeit-4ee8e.web.app/Login",
      Date: "December 2023",
      Role: "Full Stack Developer",
    },
    {
      Title: "Movie Library",
      Description: `
        A dynamic movie search application built with <span class='underline'>Angular</span>,
        utilizing third-party APIs to fetch movie data. It includes search functionality,
        filtering, and detailed movie descriptions.`,
      imgs: ["assets/images/movie-1.png", "assets/images/movie-2.png"],
      Technologies: ["Angular", "TypeScript", "SCSS", "Bootstrap"],
      Link: "https://abubakar0.github.io/Movie_app_angular/",
      Date: "July 2024",
      Role: "Design & Development",
    },
  ];

  moreProjects = [
    {
      Title: "Beck Law NY",
      Description:
        "The Beck Law website is built using WordPress, with a custom theme tailored for legal services, featuring a responsive design and various practice areas.",
      imgs: ["assets/images/becklaw.png"],
      demoLink: "https://becklawny.com",
      Technologies: ["WordPress"],
    },
    {
      Title: "Visit Clothing",
      Description:
        "1Hub Fashion uses WooCommerce for its online store, offering various fashion products with integrated payment gateways and product management.",
      imgs: ["assets/images/visit.png"],
      demoLink: "https://visitclothing.com/",
      Technologies: ["WordPress", "WooCommerce"],
    },
    {
      Title: "Kilo Game",
      Description:
        "This Danish gaming store is powered by WordPress with WooCommerce for e-commerce functionality, offering gaming products and accessories.",
      imgs: ["assets/images/kilo_game.png"],
      demoLink: "https://kilogame.dk",
      Technologies: ["WordPress", "WooCommerce"],
    },

    {
      Title: "Ace Biomed",
      Description:
        "Ace Biomed Lab utilizes WordPress, focusing on medical and diagnostic services. It features sections for services, contact forms, and laboratory test bookings.",
      imgs: ["assets/images/acebio.png"],
      demoLink: "https://www.acebiomedlab.com.ng",
      Technologies: ["WordPress"],
    },
    {
      Title: "Visit Cosmetics",
      Description:
        "Visit Cosmetics an E-commerce Store, Selling beauty products specifically in Pakistan.",
      imgs: ["assets/images/visit_cos.png"],
      demoLink: "https://www.visitcosmetics.com",
      Technologies: ["WordPress", "WooCommerce"],
    },
    {
      Title: "Solar Choice",
      Description:
        "SolarChoice is built on WordPress, featuring renewable energy solutions with sections for service details and customer inquiries.",
      imgs: ["assets/images/solar_choice.png"],
      demoLink: "https://solarchoice.se",
      Technologies: ["WordPress"],
    },
  ];

  constructor(private router: Router) {}

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  redirect(route: string, event) {
    const id = event.target.id;
    if (id == "demoLink" || id == "ghLink") {
      return;
    }
    window.open(route, "_blank");
  }
}
