import MessList from "../Components/MessList";
import SectionNav from "../Components/SectionNav";
import Head from "next/head";

export default function pgs() {
  return (
    <>
    <Head>
        <title>ACCOMO | MESS</title>
      </Head>
      <SectionNav title="MESS" link="/mess" />
      <MessList />
    </>
  );
}