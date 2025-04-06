import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { typescript } from '../../../assets/svg';
import { cPlus } from '../../../assets/svg';
import {
  bookOutline,
  businessOutline,
  calendarOutline,
  chevronDown,
  closeOutline,
  eyeOutline,
  locationOutline,
  logoAngular,
  logoCss3,
  logoGithub,
  logoHtml5,
  logoJavascript,
  logoNodejs,
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoStackoverflow,
  logoTwitter,
  mailOutline,
  paperPlane,
  phonePortraitOutline,
  logoSass
} from 'ionicons/icons';

@Component({
  selector: 'app-ion-icon',
  standalone: true,
  imports: [IonIcon],
  templateUrl: './ion-icon.component.html'
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
      logoAngular,
      logoJavascript,
      logoHtml5,
      logoCss3,
      logoGithub,
      logoNodejs,
      logoFacebook,
      logoTwitter,
      logoInstagram,
      logoStackoverflow,
      closeOutline,
      bookOutline,
      eyeOutline,
      paperPlane,
      businessOutline,
      logoLinkedin,
      logoSass
    });
  }
}
