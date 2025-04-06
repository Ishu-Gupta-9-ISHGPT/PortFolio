import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core"
import { FormsModule, type NgForm } from "@angular/forms";
import { IonIconComponent } from "../ion-icon/ion-icon.component"
import { PortfolioService } from "../../services/portfolio.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [FormsModule, CommonModule, IonIconComponent, HttpClientModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  providers: [PortfolioService],

})
export class ContactComponent implements OnInit {
  formData = {
    fullname: "",
    email: "",
    message: "",
  }

  isFormValid = false

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}

  onInputChange(): void {
    this.isFormValid = !!this.formData.fullname && !!this.formData.email && !!this.formData.message
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.portfolioService.sendEmail(this.formData).subscribe((res) => {
        form.reset();
        this.isFormValid = false;
      },
      (err) => {
        // Handle error
      });
      
    }
  }
}

