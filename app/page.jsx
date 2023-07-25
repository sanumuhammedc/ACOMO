import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Search & Choose
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> Ideal Accommodation</span>
    </h1>
    <p className='desc text-center'>
     Currently we are only supporting hostels near CUSAT. More locations will be added soon.
    </p>

    <Feed />
  </section>
);

export default Home;
