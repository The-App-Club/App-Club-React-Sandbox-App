import '../styles/index.css';
import dynamic from 'next/dynamic';
import React from 'react';

// https://stackoverflow.com/questions/53139884/next-js-disable-server-side-rendering-on-some-pages
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
