import PgList from "../Components/PgList";
import SectionNav from "../Components/SectionNav";
import Head from "next/head";

export default function pgs() {
  return (
    <>
    <Head>
        <title>ACCOMO | PG&apos;S</title>
      </Head>
      <SectionNav title="PG's" link="/pgs" />
      <PgList />
    </>
  );
}