import { defineType, defineArrayMember } from 'sanity'
import {AiOutlineHighlight, AiFillHighlight} from 'react-icons/ai'
import {
  CiTextAlignLeft,
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignJustify
} from 'react-icons/ci'
import ExternalLinkRenderer from './components/ExternalLinkRenderer'
// import Button from './components/Button';
import ButtonLink from './components/ButtonLink';
// import Table from './components/Table';
// import ColorSelector from './components/SelectColorText';

const HighlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>

const ButtonLinkIcon = () => <span style={{fontWeight: 'bold'}}>B</span>

const HighColorOrangeIcon = () => <span style={{fontWeight: 'bold'}}>L</span>

// const TableIcon = () => <span style={{fontWeight: 'bold'}}>tabela</span>

const HighlightDecorator = props => (
  <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
)

const HighOrange = props => (
  <span style={{backgroundColor: 'orange'}}>{props.children}</span>
)

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    { type: 'accordion' },
    { type: 'iframeEmbed' },
    { type: 'tableSchema' },
    defineArrayMember({
      title: 'Block',
      type: 'block',  
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Título', value: 'sectionTitle'},
        {title: 'Subtítulo', value: 'sectionSubTitle'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Início',
            value: 'start',
            icon: () => (
              <div>
                <CiTextAlignLeft />
              </div>
            )
          },
          {
            title: 'Centralizar',
            value: 'center',
            icon: () => (
              <div>
                <CiTextAlignCenter />
              </div>
            )
          },
          {
            title: 'Final',
            value: 'end',
            icon: () => (
              <div>
                <CiTextAlignRight />
              </div>
            )
          },
          {
            title: 'Justificado',
            value: 'justify',
            icon: () => (
              <div>
                <CiTextAlignJustify />
              </div>
            )
          },
          {
            title: 'Destaque azul',
            value: 'destaqueAzul',
            icon: () => (
              <div>
                <AiOutlineHighlight />
              </div>
            )
          },
          {
            title: 'Destaque cinza',
            value: 'destaqueCinza',
            icon: () => (
              <div>
                <AiFillHighlight />
              </div>
            )
          },
          {
            title: 'Marcador Amarelo',
            value: 'highYellow',
            icon: HighlightIcon,
            component: HighlightDecorator
          },
          {
            title: 'Marcador Laranja',
            value: 'highOrange',
            icon: HighColorOrangeIcon,
            component: HighOrange
          },
          {
            title: 'Botão',
            value: 'buttonLink',
            icon: ButtonLinkIcon,
            component: ButtonLink
          },
          
        ],
        // annotations: [
        //   {
        //     name: 'link',
        //     type: 'object',
        //     title: 'External link',
        //     fields: [
        //       {
        //         name: 'href',
        //         type: 'url',
        //         title: 'URL'
        //       },
        //       {
        //         title: 'Open in new tab',
        //         name: 'blank',
        //         description: 'Read https://css-tricks.com/use-target_blank/',
        //         type: 'boolean'
        //       }
        //     ]
        //   },
        //   {
        //     name: 'internalLink',
        //     type: 'object',
        //     title: 'Internal link',
        //     fields: [
        //       {
        //         name: 'reference',
        //         type: 'reference',
        //         title: 'Reference',
        //         to: [
        //           { type: 'noticias' },
        //         ]
        //       }
        //     ]
        //   }
        // ]
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              }
            ],
            components: {
              annotation: ExternalLinkRenderer,
            }
          },
        ]
      }
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'string'
        }
      ]
    }),
    // defineArrayMember({
    //   type: 'array',
    //   fields: [
    //     {
    //       title: 'Tabela',
    //       name: 'table',
    //       type: 'table'
    //     }
    //   ]
    // })
  ]
})
