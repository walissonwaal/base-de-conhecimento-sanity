export const deskStructure = (S) =>
  S.list()
    .title('Título do Sanity Studio')
    .items([
      S.listItem()
        .title('Página Inicial')
        .child(
          S.list()
            .title('Seções')
            .items([
              S.documentTypeListItem('schema01').title('Header'),
              S.documentTypeListItem('schema02').title('Hero'),
              S.documentTypeListItem('schema03').title('Sidebar'),
              S.documentTypeListItem('schema04').title('Cta'),
              S.documentTypeListItem('schema05').title('Footer'),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('singlePageSchema').title(
        'Páginas'
      ),
      S.divider(),
      S.documentTypeListItem('menuSchema').title('Menu'),
      S.divider(),
      S.documentTypeListItem('newsSchema').title('Notícias'),
      S.divider(),
    ]);
