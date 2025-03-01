import { Component, computed, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PortfolioService } from "../../services/portfolio.service"
import { IonicModule } from "@ionic/angular"

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <aside class="sidebar" [class.active]="isActive()">
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img [src]="profile().avatar" [alt]="profile().name" width="80">
        </figure>

        <div class="info-content">
          <h1 class="name" [title]="profile().name">{{ profile().name }}</h1>
          <p class="title">{{ profile().title }}</p>
        </div>

        <button class="info_more-btn" (click)="toggleSidebar()">
          <span>{{ isActive() ? 'Hide Contacts' : 'Show Contacts' }}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>
              <a [href]="'mailto:' + profile().email" class="contact-link">
                {{ profile().email }}
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>
              <a [href]="'tel:' + profile().phone" class="contact-link">
                {{ profile().phone }}
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>
              <time>{{ profile().birthday }}</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>
              <address>{{ profile().location }}</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          @for (social of socialLinks(); track social.platform) {
            <li class="social-item">
              <a [href]="social.url" class="social-link">
                <ion-icon [name]="social.icon"></ion-icon>
              </a>
            </li>
          }
        </ul>
      </div>
    </aside>
  `,
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
  profile = computed(() => this.portfolioService.getProfile()())
  socialLinks = computed(() => this.portfolioService.getSocialLinks()())
  isActive = signal(false)

  constructor(private portfolioService: PortfolioService) {}

  toggleSidebar() {
    this.isActive.update((value) => !value)
  }
}

