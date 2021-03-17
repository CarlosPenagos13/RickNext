import Document, { Html, Head, Main, NextScript } from "next/document";
import { Body } from "./Styled";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;
