import { Component, signal } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      ]),
    ]),
  ],
})
export class FaqComponent {
  readonly openIndex = signal<number | null>(null);

  readonly faqs: FaqItem[] = [
    {
      question: 'Leitura de tarô é uma forma de previsão do futuro?',
      answer: 'Não exatamente. O tarô não prevê o futuro de forma determinista. Ele revela as energias, tendências e padrões presentes no momento da leitura, ajudando você a tomar decisões mais conscientes. O futuro é moldado pelas suas escolhas.',
    },
    {
      question: 'Preciso ter experiência espiritual para fazer uma leitura?',
      answer: 'De forma alguma! Qualquer pessoa pode fazer uma leitura de tarô, independentemente de crenças religiosas ou experiência espiritual. A leitura é uma ferramenta de autoconhecimento e reflexão acessível a todos.',
    },
    {
      question: 'Como funciona a leitura online?',
      answer: 'A leitura online é realizada via videoconferência (Google Meet ou Zoom). A energia não tem limitações físicas — a qualidade da leitura é a mesma que a presencial. Você apenas precisa de um local tranquilo e conexão estável.',
    },
    {
      question: 'Minhas informações são mantidas em sigilo?',
      answer: 'Absolutamente. Tudo o que é compartilhado durante a leitura é completamente sigiloso. Jamais compartilho informações dos clientes com terceiros. Pode falar com total liberdade e honestidade.',
    },
    {
      question: 'Com que frequência posso fazer leituras?',
      answer: 'Recomendo aguardar pelo menos 30 dias entre leituras gerais. Isso permite que as energias se manifestem e que você possa acompanhar os processos indicados. Leituras sobre temas específicos diferentes podem ser feitas com menor intervalo.',
    },
    {
      question: 'Como me preparo para uma leitura?',
      answer: 'Venha com a mente aberta e, se puder, com uma pergunta ou área de vida em mente. Não é necessário nenhuma preparação especial. Apenas esteja em um local tranquilo, sem distrações, e permita-se ser honesto(a) consigo mesmo(a).',
    },
    {
      question: 'A leitura tem garantia?',
      answer: 'Ofereço uma leitura honesta, intuitiva e técnica. Se ao final da sessão você sentir que não recebeu o valor esperado, conversamos. Meu compromisso é com a sua satisfação e clareza. Mais de 98% das clientes ficam completamente satisfeitas.',
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceito Pix, transferência bancária e cartão de crédito (via link de pagamento). O pagamento é realizado antes da sessão para garantir seu agendamento.',
    },
  ];

  toggle(index: number): void {
    this.openIndex.update(current => (current === index ? null : index));
  }
}
