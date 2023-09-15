import Head from "next/head";
import blogPageStyles from "../styles/pages/blog.module.scss";
import Image from "next/image";
const blog = () => {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <section className= {blogPageStyles.blog} >
        <h2 className="blog-heading mb-5">Blog Posts</h2>
        <div className="blog-guide-box">
          <Image
            alt="guid image"
            height={350}
            width={800}
            src="/blog3.webp"
            loading="lazy"
          />
          <div className="blog-details ">
            <p className="label mb-1">Travel Guide</p>
            <p className="date mb-2">Mar. 31, 2021</p>
            <h3 className="blog-heading mb-3">
              Virtual Tours - Ways to Travel From Home
            </h3>
            <p className="blog-desc mb-3">
              Virtual tours can open up amazing and awe-inspiring locations
              around the world that may otherwise be inaccessible to you. You
              can experience the majesty of the Sistine Chapel, the wonder of
              the Great ...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
  
export default blog;
