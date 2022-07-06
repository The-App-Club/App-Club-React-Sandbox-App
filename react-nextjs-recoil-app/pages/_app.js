import '../styles/index.css';
import { RecoilRoot } from 'recoil'; //追加

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
