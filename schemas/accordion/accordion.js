import { defineField, defineType } from "sanity";

export default {
  name: "accordion",
  type: "object",
  title: "Acordeão",
  fields: [
    defineField({
      name: "accordionSection",
      title: "Adicionar, editar ou excluir acordeão",
      type: "array",
      of: [
        defineField({
          name: "postsAccordion",
          title: "Edição de acordeão",
          type: "object",
          fields: [
            defineField({
              name: "accordionTitle",
              title: "Título do item",
              type: "string",
            }),
            defineField({
              name: "accordionContent",
              title: "Conteúdo do item",
              type: "blockContent",
            }),
          ],
        }),
      ],
    }),
  ],
};
