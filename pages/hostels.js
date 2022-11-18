import HostelList from "../Components/HostelList";

import SectionNav from "../Components/SectionNav";
import Head from "next/head";
import Footer from "../Components/Footer";

export default function hostels() {
  return (
    <>
    <Head>
        <title>ACCOMO | Hostels</title>
      </Head>
      <SectionNav title="Hostels" link="/hostels" />
      <div className="p-4">
      <HostelList />
      </div>
      <Footer/>
    </>
  );
}
