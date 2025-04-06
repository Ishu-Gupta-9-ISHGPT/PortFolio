import { Component, type OnInit } from "@angular/core"
import type { TimelineItem, Skill } from "../../models/models"
import { PortfolioService } from "../../services/portfolio.service"
import { IonIconComponent } from "../ion-icon/ion-icon.component"
import { CommonModule } from "@angular/common"
import { IonIcon } from "@ionic/angular/standalone"

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule, IonIconComponent, IonIcon],
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  education: TimelineItem[] = []
  experience: TimelineItem[] = []

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.education = this.portfolioService.getEducation();
    this.experience = this.portfolioService.getExperience();
  }
}

