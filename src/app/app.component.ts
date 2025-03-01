import { Component, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SidebarComponent } from "./components/sidebar/sidebar.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent
  ],
  template: `
    <main>
      <!-- Sidebar -->
      <app-sidebar />

      <!-- Main Content -->
      <!-- <div class="main-content"> -->
        <!-- Navbar -->
        <!-- <app-navbar 
          [activePage]="activePage()" 
          (pageChange)="setActivePage($event)" />

        @if (activePage() === 'about') {
          <app-about />
        } @else if (activePage() === 'resume') {
          <app-resume />
        } @else if (activePage() === 'portfolio') {
          <app-portfolio />
        } @else if (activePage() === 'blog') {
          <app-blog />
        } @else if (activePage() === 'contact') {
          <app-contact />
        } -->
      <!-- </div> -->
    </main>
  `,
  styleUrl: "./app.component.css",
})
export class AppComponent {
  activePage = signal<string>("about")

  setActivePage(page: string) {
    this.activePage.set(page)
    window.scrollTo(0, 0)
  }
}

