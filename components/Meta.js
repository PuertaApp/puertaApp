import Head from 'next/head';

const Meta = () => (
  <Head>
    <title>NEXT JS PWA App</title>
    {/* <link rel="manifest" href="/static/manifest.json" />     */}
    <link rel="manifest" href="/static/manifest.webmanifest" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
    <meta name="viewport" content="width=device-width, height=device-height"></meta>
    <link rel="icon" type="image/png" href="/static/196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/static/96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/static/32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/static/16x16.png" sizes="16x16" />
    
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <meta
      name="description"
      content="Next JS PWA"
    />
  </Head>
);

export default Meta;