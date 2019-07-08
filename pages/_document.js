import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
            <link rel="icon" href="../static/favicon.ico" type="image/x-icon"/>
            <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
            <title>Rick Louie!</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;