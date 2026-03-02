import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly currentYear = signal(new Date().getFullYear());
  readonly whatsappNumber = signal('5511999999999');

  get whatsappLink(): string {
    const msg = encodeURIComponent('Olá, Vick! Gostaria de saber mais sobre as leituras de tarô.');
    return `https://wa.me/${this.whatsappNumber()}?text=${msg}`;
  }
}
