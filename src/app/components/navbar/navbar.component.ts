import { Component, input, output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { IonIconComponent } from "../ion-icon/ion-icon.component"

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <ul class="navbar-list">
        @for (item of navItems; track item.id) {
          <li class="navbar-item">
            <button 
              class="navbar-link" 
              [class.active]="activePage() === item.id"
              (click)="pageChange.emit(item.id)">
              {{ item.label }}
            </button>
          </li>
        }
      </ul>
    </nav>
  `,
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  activePage = input.required<string>()
  pageChange = output<string>()

  navItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "skill", label: "Skill" },
    { id: "contact", label: "Contact" },
  ]
}

