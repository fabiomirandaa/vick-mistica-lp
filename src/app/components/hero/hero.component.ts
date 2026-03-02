import { Component, OnInit, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

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
export class HeroComponent implements OnInit {
  readonly spotsLeft = signal(3);
  readonly whatsappNumber = signal('5511999999999');

  get whatsappLink(): string {
    const msg = encodeURIComponent('Olá, Vick! Gostaria de agendar minha leitura de tarô.');
    return `https://wa.me/${this.whatsappNumber()}?text=${msg}`;
  }

  ngOnInit(): void {
    // Could fetch real-time spots from a backend
  }
}
