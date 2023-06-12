/**
 * Wrapper around all app pages.
 * Here - you can import global css.
 *
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
