import Head from "next/head";
import Header from "../components/Header/Header";
import { useState } from "react";
import BodyHeader from "../components/Body/BodyHeader";
import BodySidebar from "../components/Body/BodySidebar";
import BodyMain from "../components/Body/BodyMain";
import WithLoading from "../components/WithLoading";
import { getItemsInfo } from "../components/ItemData";
import Footer from "../components/Footer/Footer";

function Home({ data }) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="max-w-screen">
      <Head>
        <title>NIKE Clone Youtube!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <main className="mb-10">
        {/* Body-Header */}
        <BodyHeader setShowSidebar={setShowSidebar} />

        <div className="flex">
          {/* Sidebar */}
          {showSidebar && (
            <div className="hidden lg:block">
              <BodySidebar />
            </div>
          )}

          {/* Main */}
          <div className="flex-grow flex overflow-y-scroll h-screen max-w-5xl mx-auto">
            <BodyMain itemsInfo={data} />
          </div>
        </div>
        {/* Body-Sidebar */}
      </main>

      {/* Footer */}

      <Footer />
    </div>
  );
}

export default WithLoading(Home, getItemsInfo);
