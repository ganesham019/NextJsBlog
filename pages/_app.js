import Layout from "../components/Layout";
import '../styles/global.css';
import '../styles/index.scss';
import { Inter_Tight } from 'next/font/google';

const font = Inter_Tight({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
       <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
