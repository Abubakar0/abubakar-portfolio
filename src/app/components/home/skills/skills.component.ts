import { Component, OnInit } from "@angular/core";
import {
  trigger,
  query,
  stagger,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [
    trigger("skillsAnimation", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(100%)" }),
          stagger(15, [
            animate(
              "500ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skills = [
    {
      name: "Angular",
      icon: "fab fa-angular",
      description:
        "Expertise in building dynamic, component-based web applications.",
    },
    {
      name: "Ionic",
      icon: "fab fa-ubuntu",
      description:
        "Proficient in developing cross-platform mobile applications.",
    },
    {
      name: "ReactJS",
      icon: "fab fa-react",
      description: "Proficient in building interactive UI with React.",
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      description:
        "Proficient in server-side development using Node.js and Express.",
    },
    {
      name: "MongoDB",
      icon: "fas fa-database",
      description:
        "Skilled in working with MongoDB for efficient database management.",
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
      description: "Strong foundation in semantic and accessible HTML5.",
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      description: "Experienced in designing responsive layouts with CSS3.",
    },
    {
      name: "SCSS / SASS",
      icon: "fab fa-sass",
      description:
        "Experience with SCSS/SASS for modular and maintainable styling.",
    },
    {
      name: "Bootstrap",
      icon: "fab fa-bootstrap",
      description: "Proficient in using Bootstrap for responsive design.",
    },
    {
      name: "WordPress",
      icon: "fab fa-wordpress",
      description: "Experience in building and managing WordPress sites.",
    },
    {
      name: "TypeScript",
      icon: "fas fa-code",
      description:
        "Strong knowledge of TypeScript for scalable and maintainable code.",
    },

    {
      name: "Docker",
      icon: "fab fa-docker",
      description: "Experience in containerizing applications using Docker.",
    },
    {
      name: "Firebase",
      icon: "fas fa-cloud",
      description: "Experience in building real-time apps with Firebase.",
    },
    {
      name: "Agile / Scrum",
      icon: "fas fa-project-diagram",
      description:
        "Experienced in Agile and Scrum workflows for project management.",
    },
    {
      name: "Git & GitHub",
      icon: "fab fa-git-alt",
      description: "Version control and collaborative development expertise.",
    },
    {
      name: "UI/UX Design",
      icon: "fas fa-paint-brush",
      description:
        "Ability to create user-friendly interfaces with an emphasis on responsive design.",
    },
    {
      name: "Problem-Solving",
      icon: "fas fa-brain",
      description:
        "Adept at analyzing issues and delivering efficient and effective solutions.",
    },
    {
      name: "Adaptability",
      icon: "fas fa-sync-alt",
      description:
        "Quick learner who thrives in fast-paced, dynamic environments.",
    },
    {
      name: "Time Management",
      icon: "fas fa-clock",
      description:
        "Skilled in prioritizing tasks and delivering projects within deadlines.",
    },
    {
      name: "Team Collaboration",
      icon: "fas fa-users",
      description:
        "Experienced in working effectively within cross-functional teams.",
    },
    {
      name: "Communication Skills",
      icon: "fas fa-comments",
      description:
        "Strong verbal and written communication, facilitating clear and concise interactions.",
    },
    {
      name: "Leadership",
      icon: "fas fa-chalkboard-teacher",
      description:
        "Ability to guide and inspire teams to achieve common goals.",
    },
    {
      name: "Attention to Detail",
      icon: "fas fa-search",
      description:
        "Focused on producing high-quality work with minimal errors.",
    },
    {
      name: "Creativity",
      icon: "fas fa-paint-brush",
      description:
        "Innovative thinker with a knack for generating fresh ideas and solutions.",
    },
    {
      name: "Critical Thinking",
      icon: "fas fa-brain",
      description:
        "Logical reasoning and decision-making skills under pressure.",
    },
    {
      name: "Empathy",
      icon: "fas fa-heart",
      description:
        "Understanding and addressing the needs of team members and clients.",
    },
    {
      name: "Organization",
      icon: "fas fa-clipboard-list",
      description:
        "Proficient in managing multiple tasks and maintaining order.",
    },
    {
      name: "Cultural Awareness",
      icon: "fas fa-globe-americas",
      description:
        "Experienced in collaborating with people from diverse backgrounds.",
    },
  ];

  ngOnInit(): void {}
}
