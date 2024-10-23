
import Head from 'next/head';
import SwiperComponent from '../components/SwiperComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Swiper Demo</title>
        <meta name="description" content="Swiper mousewheel demo on Vercel" />
      </Head>
      <main>
        <SwiperComponent />
      </main>
    </>
  );
}
