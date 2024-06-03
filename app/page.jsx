import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Prompt the future
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Unlock the power of AI</span>
    </h1>
    <p className='desc text-center'>
      Search existing prompts or add your own to expand the AI universe .
    </p>

    <Feed />
  </section>
);

export default Home;