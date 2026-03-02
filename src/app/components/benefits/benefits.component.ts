import { Component } from '@angular/core';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
  animations: [
    trigger('staggerFade', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class BenefitsComponent {
  readonly benefits: Benefit[] = [
    {
      icon: '🌟',
      title: 'Clareza Mental',
      description: 'Quando a mente está confusa, as cartas iluminam o caminho. Tome decisões com mais segurança e confiança.',
    },
    {
      icon: '🧭',
      title: 'Direcionamento de Vida',
      description: 'Entenda para onde sua energia está fluindo e como redirecionar seus passos em direção aos seus objetivos.',
    },
    {
      icon: '💡',
      title: 'Autoconhecimento Profundo',
      description: 'As cartas refletem sua essência. Descubra padrões inconscientes e liberte-se do que te impede de crescer.',
    },
    {
      icon: '💜',
      title: 'Cura Emocional',
      description: 'Um espaço seguro, acolhedor e sem julgamentos para processar emoções e encontrar paz interior.',
    },
    {
      icon: '🔮',
      title: 'Validação Espiritual',
      description: 'Conecte-se com sua intuição e sinta que não está sozinho(a) nesta jornada.',
    },
    {
      icon: '✨',
      title: 'Ação Concreta',
      description: 'A leitura não é apenas sobre revelar — é sobre agir. Cada sessão termina com orientações práticas.',
    },
  ];
}
