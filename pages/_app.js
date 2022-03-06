import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { useStore } from '../lib/redux'
import { useApollo } from '../lib/apollo'
import '../public/assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import NProgress from '../components/NProgress'
import { Router } from 'next/router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCamera, faChartLine, faCog, faHamburger, faHome, faMapMarkerAlt, faReceipt, faRocket, faShippingFast, faShoppingCart, faStore, faTshirt, faUserLock, faUsers } from '@fortawesome/free-solid-svg-icons'
import ReactModal from 'react-modal'
import React from 'react';

library.add(
  faBars,
  faCamera,
  faHome,
  faStore,
  faTshirt,
  faHamburger,
  faShippingFast,
  faMapMarkerAlt,
  faShoppingCart,
  faReceipt,
  faUserLock,
  faChartLine,
  faCog,
  faUsers,
  faRocket
)

ReactModal.setAppElement('#__next');

let timeout;
Router.events.on('routeChangeStart', () => {
  timeout = setTimeout(() => {
    NProgress.start()
  }, 100);
});
Router.events.on('routeChangeComplete', () => {
  clearTimeout(timeout);
  NProgress.done()
});
Router.events.on('routeChangeError', () => {
  clearTimeout(timeout);
  NProgress.done()
});

if (typeof window !== 'undefined') {
  NProgress.start();
  timeout = setTimeout(() => {
    NProgress.done();
  }, 1000);
}

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}
