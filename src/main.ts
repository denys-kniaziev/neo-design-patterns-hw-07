import { writeFileSync } from 'fs';
import { RendererFactory } from './factories/RendererFactory';
import { Section } from './nodes/Section';
import { Paragraph } from './nodes/Paragraph';
import { List } from './nodes/List';
import { DocRenderer } from './interfaces/DocRenderer';

function createDocument(renderer: DocRenderer): string {
  const doc = new Section("Структурні патерни", renderer, [], 1);

  const patterns = new Section("Основні патерни", renderer, [
    new Paragraph("Розглянемо два важливих структурних патерни.", renderer),
    new Section("Composite", renderer, [
      new Paragraph("Дозволяє створювати деревоподібні структури об'єктів.", renderer),
      new List(["Спрощує структуру", "Гнучкий код", "Легка підтримка"], renderer)
    ], 2),
    new Section("Bridge", renderer, [
      new Paragraph("Розділяє абстракцію та реалізацію.", renderer),
      new List(["Незалежні зміни", "Краща масштабованість"], renderer)
    ], 2)
  ], 2);

  doc.add(patterns);
  return doc.render();
}

const { format, output } = {
  format: process.argv[2] || 'markdown',
  output: process.argv[3]
};

const renderer = RendererFactory.create(format);
const content = createDocument(renderer);
const result = renderer.wrapDocument(content);

output ? writeFileSync(output, result) : console.log(result); 