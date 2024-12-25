import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "abubakar-portfolio";

  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit(): void {
    this.titleService.setTitle("Muhammad Abubakar | Frontend Developer");
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          "Frontend, software, developer, wordpress, wordpress developer",
      },
      {
        name: "description",
        content:
          "With 4 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. In my work, I like to lead, propose, and execute ideas, write and refactor clean, reusable, and scalable code.",
      },
    ]);

    AOS.init();
  }
}
