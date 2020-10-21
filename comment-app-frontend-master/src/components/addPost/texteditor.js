import EditorJS from '@editorjs/editorjs';

import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import Gist from 'editorjs-github-gist-plugin';
import SocialPost from 'editorjs-social-post-plugin';
//import InlineImage from 'editorjs-inline-image';
import Underline from '@editorjs/underline';
import EditorJSStyle from 'editorjs-style'
import DragDrop from 'editorjs-drag-drop';
//import Undo from 'editorjs-undo';

//const ImageTool = window.ImageTool;
const Header = require('editorjs-header-with-anchor');
const Paragraph = require('editorjs-paragraph-with-alignment');
const AttachesTool = require('@editorjs/attaches');
const Embed = require('@editorjs/embed');
const Table = require('@editorjs/table');
//const SimpleImage = require('@editorjs/simple-image');

const editor = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */
  holderId: 'editorjs',

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link'],
      config: {
              placeholder: 'Enter a header',
              levels: [1,2, 3, 4,5,6],
              defaultLevel: 3,
              allowAnchor: true,
              anchorLength:500,
            }
    },

    paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },

    underline: Underline,

    list: {
      class: List,
      inlineToolbar: ['link','bold']
    },

    quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
    },

    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    },

    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 2,
      },
    },
    attaches: {
          class: AttachesTool,
          config: {
            endpoint: 'http://localhost:8008/uploadFile'
          }
    },
//image: SimpleImage,
    embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
    },

    linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
          }
        },

    gist: Gist,
    socialPost: SocialPost,
    editorJSStyle: EditorJSStyle,
  },
  /** onReady: () => {
    const undo = new Undo({ editor });
    //undo.initialize(initialData);
   },**/
   onReady: () => {
       new DragDrop(editor);
   },

})
