import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/BalsamiqSans-Bold.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/fonts/BalsamiqSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/fonts/fontello.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <meta name="description" content="Рыжий кот - детская игровая комната"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
