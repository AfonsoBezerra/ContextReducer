import Header from '@components/header';
import ItemList from '@components/ItemList';
import Layout from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ProductProvider } from '../context/ProductContext';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ip Tracker</title>
      <meta name="description" content="Creating Ip Adress Tracker" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Layout>
      <ProductProvider>
        <Header />
        <ItemList />
      </ProductProvider>
    </Layout>
  </>
);

export default Home;
