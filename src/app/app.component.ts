import { Component, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SidebarComponent } from "./components/sidebar/sidebar.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { AboutComponent } from "./components/about/about.component"
import { ResumeComponent } from "./components/resume/resume.component"
import { HttpClientModule } from "@angular/common/http"
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ContactComponent } from "./components/contact/contact.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    HttpClientModule,
    ContactComponent,
  ],
  template: `
    <main>
      <!-- Sidebar -->
      <app-sidebar />

      <!-- Main Content -->
      <div class="main-content">
        <!-- Navbar -->
        <app-navbar 
          [activePage]="activePage()" 
          (pageChange)="setActivePage($event)" />

        @if (activePage() === 'about') {
          <app-about />
        } @else if (activePage() === 'resume') {
          <app-resume />
        } @else if (activePage() === 'contact') {
          <app-contact />
        }
      </div>
    </main>
  `,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  activePage = signal<string>("about")

  setActivePage(page: string) {
    this.activePage.set(page)
    window.scrollTo(0, 0)
  }
}

