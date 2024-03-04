export const deskStructure = (S) =>
  S.list()
    .title('Portal Assefaz')
    .items([
      S.listItem()
        .title('Página Inicial')
        .child(
          S.list()
            .title('Seções')
            .items([
              S.documentTypeListItem('heroSchema').title('Banners'),
              S.documentTypeListItem('calltoAction').title('CTAs'),
              S.documentTypeListItem('cardInfo').title('Cards 1'),
              S.documentTypeListItem('cardInfo2').title('Cards 2'),
              S.documentTypeListItem('appAssefaz').title('App Assefaz'),
              S.documentTypeListItem('downloads').title('Conteúdos de Apoio'),
              S.documentTypeListItem('footer').title('Rodapé'),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('singlePageSchema').title(
        'Páginas'
      ),
      S.divider(),
      S.documentTypeListItem('menuItem').title('Menu'),
      S.divider(),
      S.documentTypeListItem('noticias').title('Notícias'),
      S.divider(),
    ]);
