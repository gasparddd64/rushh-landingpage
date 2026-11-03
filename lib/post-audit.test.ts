import { describe, it, expect } from 'vitest';
import { ARTICLES } from './articles';
import { getMarkdownPage } from './agent-content';
import { readFileSync } from 'node:fs';

describe('cohérence après audit', () => {
  it('conditionne les opérations CRM dans le miroir des intégrations', () => {
    const md = getMarkdownPage('/integrations')!.markdown;
    for (const name of ['Apimo', 'Whise']) {
      const line = md.split('\n').find(line => line.startsWith(`- **${name}**`))!;
      expect(line).toContain('API');
      expect(line).toContain('autorisations');
    }
  });
  it('distingue le test téléphonique de la réservation dans tous les articles', () => {
    for (const article of ARTICLES) {
      const buttons = article.sections.flatMap(section => section.blocks).filter(block => block.t === 'button');
      for (const button of buttons) {
        if (button.t === 'button' && button.href === '/demonstrations') {
          expect(button.label).not.toMatch(/réserver/i);
          expect(getMarkdownPage(article.path)?.markdown).toContain(button.label);
        }
      }
    }
  });
  it('ne confirme pas une réservation par une simple représentation statique', () => {
    const markdown = getMarkdownPage('/confirmation')!.markdown;
    expect(markdown).not.toMatch(/rendez-vous confirmé|bien été prise en compte/i);
    expect(markdown).toContain('Calendly');
    const page = readFileSync('app/confirmation/page.tsx', 'utf8');
    expect(page).not.toMatch(/C’est réservé|Rendez-vous confirmé/);
  });
  it('reflète le consentement dans la confidentialité Markdown', () => {
    const markdown = getMarkdownPage('/privacy')!.markdown;
    expect(markdown).toContain('Google Analytics 4');
    expect(markdown).toContain('Avant votre choix, aucun script');
    expect(markdown).toContain('Gérer les cookies');
    expect(markdown).not.toContain("n'utilise aucun outil");
  });
  it('conserve les dates de publication et les deux formats pour les 25 articles', () => {
    expect(ARTICLES).toHaveLength(25);
    for (const article of ARTICLES) {
      expect(article.datePublished).toMatch(/^2026-\d{2}-\d{2}$/);
      expect(getMarkdownPage(article.path)?.markdown).toContain(article.h1);
    }
  });
});
