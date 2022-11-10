import { HelmetServerState } from 'react-helmet-async';
import serialize from 'serialize-javascript';
import { RootState } from 'store/store';

type TTemplate = {
  header: string,
  footer: string,
}

export const getHtmlTemplate = (props: {
  preloadState: Partial<RootState>,
  helmetData: HelmetServerState,
  scriptTags: string,
  styleTags: string,
  nonce: string,
},
): TTemplate => ({
  header: `
    <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
            <meta property="csp-nonce" content="${props.nonce}">
            ${props.styleTags}
            ${props.helmetData.title.toString()}
            ${props.helmetData.meta.toString()}
        </head>
        <body>
          <noscript>
            <b>Enable JavaScript to run this app.</b>
          </noscript>
          <div id="root">`,
  footer: `</div>
          <script nonce="${props.nonce}">window.__PRELOADED_STATE__ = ${serialize(props.preloadState)}</script>
          ${props.scriptTags}
        </body>
      </html>
  `,
});
