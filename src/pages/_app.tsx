import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.

import "tailwindcss/tailwind.css";
import 'react-awesome-slider/dist/styles.css';

import "../../public/styles/global.css";
import GlobalStyles from './../../public/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  )
}
