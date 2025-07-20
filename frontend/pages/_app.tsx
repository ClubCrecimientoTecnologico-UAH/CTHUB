import '../styles/theme.css';
import '../styles/EnglishClub.css';
import '../styles/CodeLink.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
//aqui bueno, te lleva que si al club de ingles al codelink (que le quiero cambiar el nombre mrc no se, hmmm )