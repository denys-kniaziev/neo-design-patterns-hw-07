import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const marker = level === 1 ? "=" : "-";

    return `${text}\n${marker.repeat(text.length)}\n\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  renderList(items: string[]): string {
    return `${items.map((item) => `* ${item}`).join("\n")}\n\n`;
  }
}