export default {
    name: 'accordionItem',
    type: 'object',
    title: 'Item do Acordeão',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
      },
      {
        name: 'content',
        type: 'blockContent',
        title: 'Conteúdo',
      },
    ],
  };
  