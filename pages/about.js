import Head from "next/head";
import aboutStyles from "../styles/pages/about.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <section className={aboutStyles.about}>
        <h2 className="about-heading mb-3">About Page</h2>
        <p className="desc mb-3">
          We are a travel blog featuring travel tips, guides, and photography
          from around the world. Whether you need guidance for your first trip,
          or you're a seasoned traveler looking for destination inspiration,
          you've come to the right place!
        </p>
        <span className="quotes mb-4">
          Jobs fill your pockets, adventures fill your soul.
        </span>
        <h3 className="sub-heading mb-3">Our Mission </h3>
        <p className="desc mb-4">
          Through our award-winning blog, we love to provide travelers with
          guidance and inspiration and connect them to meaningful experiences as
          they travel the world with curiosity!
        </p>
      </section>
    </>
  );
};

export default About;
