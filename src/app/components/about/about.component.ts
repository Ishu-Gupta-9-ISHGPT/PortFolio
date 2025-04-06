import { Component, type OnInit } from "@angular/core"
import type { Service, Testimonial, Client } from "../../models/models"
import { PortfolioService } from "../../services/portfolio.service"
import { CommonModule } from "@angular/common"
import { IonIconComponent } from "../ion-icon/ion-icon.component"
import { IonIcon } from '@ionic/angular/standalone';
import { cPlus } from "../../../assets/svg"
import { typescript } from "../../../assets/svg"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, IonIconComponent, IonIcon],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  services: Service[] = []
  testimonials: Testimonial[] = []
  clients: Client[] = []

  selectedTestimonial: Testimonial | null = null
  isModalActive = false

  typescriptSrc = typescript;
  cPlusSrc = cPlus;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.services = this.portfolioService.getServices()()
  }

  openTestimonialModal(testimonial: Testimonial): void {
    this.selectedTestimonial = testimonial
    this.isModalActive = true
  }

  closeTestimonialModal(): void {
    this.isModalActive = false
  }
}

