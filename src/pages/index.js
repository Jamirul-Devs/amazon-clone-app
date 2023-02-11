import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductsFeed from "@/components/ProductsFeed";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/amazon.ico" />
      </Head>

      <Header />
      <Nav />
      <main className="max-w-screen-xl mx-auto ">
        {/* Banner Section */}
        <Banner />
        {/* Product Feed */}
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
// https://fakestoreapi.com/products