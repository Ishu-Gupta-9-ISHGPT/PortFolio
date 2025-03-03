import { Component, computed, signal } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { IonIconComponent } from '../ion-icon/ion-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IonIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  
})
export class SidebarComponent {
  profile = computed(this.portfolioService.getProfile())()
  socialLinks = computed(this.portfolioService.getSocialLinks())()
  isActive = signal(false)
  constructor(private portfolioService: PortfolioService) {}
  toggleSidebar() {
    this.isActive.update((value) => !value)
  }
}
