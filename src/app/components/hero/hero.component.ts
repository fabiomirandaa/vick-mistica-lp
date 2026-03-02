import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1200ms 400ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroComponent {
  private config = inject(ConfigService);
  readonly spotsLeft = signal(3);

  get whatsappLink(): string {
    return this.config.getWhatsappLink('Olá, Vick! Gostaria de agendar minha leitura de tarô.');
  }
}
