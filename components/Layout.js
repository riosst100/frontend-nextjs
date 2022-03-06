import PropTypes from 'prop-types'
import Head from 'next/head'
// import Header from './header';
// import Footer from './footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, homepage }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link rel="shortcut icon" href="https://assets.inovasiaktif.com/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <Header />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs" style={{ "padding": 0 }}>
          {homepage &&
            <>
              <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                spaceBetween={0}
                loop={true}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <img src="https://assets.inovasiaktif.com/images/carousel/slide1.png" className="carousel-img" alt="Slide 1" />
                </SwiperSlide>
              </Swiper>

            </>
          }
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout