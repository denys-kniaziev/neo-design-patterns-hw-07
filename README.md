# Woolf University. Design Patterns Course. Homework – Composite and Bridge Patterns

Practice structural design patterns in TypeScript.

## Topic

Build a document generation system using:

* Composite
* Bridge
* Factory
* Interface-based design

## Main Logic

The app should demonstrate:

* Building documents from paragraphs, lists, and nested sections
* Representing document structure as a tree
* Rendering the same document in different formats
* Supporting Markdown, HTML, and plain text
* Separating document structure from formatting logic
* Selecting renderers through a factory
* Printing the result or saving it to a file

## Run

```bash
npx ts-node src/main.ts markdown output.md
npx ts-node src/main.ts html output.html
npx ts-node src/main.ts plain output.txt
```
