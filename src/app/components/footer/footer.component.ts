import { Component, inject, signal } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private config = inject(ConfigService);
  readonly currentYear = signal(new Date().getFullYear());
  readonly instagramUrl = this.config.instagramUrl;
  readonly tiktokUrl = this.config.tiktokUrl;

  get whatsappLink(): string {
    return this.config.getWhatsappLink('Olá, Vick! Gostaria de saber mais sobre as leituras de tarô.');
  }
}
