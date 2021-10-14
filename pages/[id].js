import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header/Header";
import WithLoading from "../components/WithLoading";
import ItemBody from "../components/Item/ItemBody";
import { getItemsInfo } from "../components/ItemData";
import Footer from "../components/Footer/Footer";

function Home({ data }) {
  const router = useRouter();
  const path = router.asPath.slice(1);

  return (
    <div className="max-w-screen">
      <Head>
        <title>NIKE Item! No.{path}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <main className="mb-10">
        <ItemBody itemInfo={data[path]} />
      </main>

      {/* Footer */}

      <Footer />
    </div>
  );
}

export default WithLoading(Home, getItemsInfo);
