import { Component, type OnInit } from "@angular/core"
import type { Service, Testimonial, Client } from "../../models/models"
import { PortfolioService } from "../../services/portfolio.service"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  services: Service[] = []
  testimonials: Testimonial[] = []
  clients: Client[] = []

  selectedTestimonial: Testimonial | null = null
  isModalActive = false

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.services = this.portfolioService.getServices()()
    this.testimonials = this.portfolioService.getTestimonials()()
    this.clients = this.portfolioService.getClients()
  }

  openTestimonialModal(testimonial: Testimonial): void {
    this.selectedTestimonial = testimonial
    this.isModalActive = true
  }

  closeTestimonialModal(): void {
    this.isModalActive = false
  }
}

