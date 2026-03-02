import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from './config.service';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private document = inject(DOCUMENT);
  private config = inject(ConfigService);

  private readonly DEFAULT: SeoConfig = {
    title: 'Vick Mística | Leitura de Tarô Online e Presencial',
    description: 'Leitura de Tarô online e presencial com Vick Mística. Clareza, direcionamento e autoconhecimento em tiragens personalizadas de amor, carreira e muito mais. Agende sua leitura.',
    keywords: 'leitura de tarô online, tarô presencial, tarô intuitivo, Vick Mística, agendamento tarô, leitura espiritual, tiragem de tarô',
    ogImage: 'https://vickmistica.com.br/assets/og-image.webp',
    ogUrl: 'https://vickmistica.com.br',
    canonicalUrl: 'https://vickmistica.com.br',
  };

  updateSeo(config: SeoConfig = {}): void {
    const merged = { ...this.DEFAULT, ...config };

    this.titleService.setTitle(merged.title!);

    this.meta.updateTag({ name: 'description', content: merged.description! });
    this.meta.updateTag({ name: 'keywords', content: merged.keywords! });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: merged.title! });
    this.meta.updateTag({ property: 'og:description', content: merged.description! });
    this.meta.updateTag({ property: 'og:image', content: merged.ogImage! });
    this.meta.updateTag({ property: 'og:url', content: merged.ogUrl! });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Vick Mística' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: merged.title! });
    this.meta.updateTag({ name: 'twitter:description', content: merged.description! });
    this.meta.updateTag({ name: 'twitter:image', content: merged.ogImage! });

    this.setCanonical(merged.canonicalUrl!);
    this.injectJsonLd();
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private injectJsonLd(): void {
    const existingScript = this.document.getElementById('json-ld-schema');
    if (existingScript) return;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://vickmistica.com.br/#business',
          name: 'Vick Mística',
          description: 'Leitura de Tarô online e presencial com Vick Mística. Tiragens personalizadas para amor, carreira, mandala astrológica e muito mais.',
          url: 'https://vickmistica.com.br',
          telephone: `+55-${this.config.whatsappNumber.replace(/^55/, '').replace(/(\d{2})(\d{5})(\d{4})/, '$1-$2-$3')}`,
          image: 'https://vickmistica.com.br/assets/vick-mistica.webp',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'BR',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '20:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            reviewCount: '134',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Leituras de Tarô',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Tiragem Geral',
                  description: 'Visão geral da sua vida: amor, trabalho, saúde e espiritualidade.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Tiragem de Amor',
                  description: 'Foco total nos seus relacionamentos e vida afetiva.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Tiragem de Carreira',
                  description: 'Clareza sobre sua vida profissional e financeira.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Mandala Astrológica',
                  description: 'Leitura profunda integrando tarô e astrologia.',
                },
              },
            ],
          },
          review: [
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Ana Paula' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'A Vick tem um dom incrível! A leitura foi precisa e me deu a clareza que eu precisava.',
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Juliana Santos' },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: 'Consultei sobre meu relacionamento e tudo que ela disse se confirmou. Muito obrigada!',
            },
          ],
        },
      ],
    };

    const script = this.document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
