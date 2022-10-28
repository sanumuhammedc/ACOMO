import RestaurantsList from "../Components/RestaurantsList";
import SectionNav from "../Components/SectionNav";
import Head from "next/head";

export default function restaurants() {
  return (
    <>
    <Head>
        <title>ACCOMO | RESTAURANTS</title>
      </Head>
      <SectionNav title="RESTAURANTS" link="/restaurants" />
      <RestaurantsList />
    </>
  );
}