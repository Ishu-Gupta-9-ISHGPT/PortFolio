import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  bookOutline,
  businessOutline,
  calendarOutline,
  chevronDown,
  closeOutline,
  eyeOutline,
  locationOutline,
  logoFacebook,
  logoGithub,
  logoInstagram,
  logoLinkedin,
  logoStackoverflow,
  logoTwitter,
  mailOutline,
  paperPlane,
  phonePortraitOutline,
 } from 'ionicons/icons';

@Component({
  selector: 'app-ion-icon',
  standalone: true,
  imports: [ IonIcon ],
  templateUrl: './ion-icon.component.html',
  styleUrl: './ion-icon.component.scss'
})
export class IonIconComponent {
  @Input() name: string = '';
  constructor() {
    addIcons({ 
      calendarOutline,
      chevronDown,
      mailOutline,
      phonePortraitOutline,
      locationOutline,
      logoFacebook,
      logoTwitter,
      logoInstagram,
      logoStackoverflow,
      closeOutline,
      bookOutline,
      eyeOutline,
      paperPlane,
      businessOutline,
      logoGithub,
      logoLinkedin
    });
  }
}
