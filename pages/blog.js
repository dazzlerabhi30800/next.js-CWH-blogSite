import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  const [blogData, setBlogData] = useState(props.allData);
  return (
    <>
      <main className={`${styles.main}`}>
        <h1 style={{ fontSize: "2.5rem" }} className={styles.h1}>
          Blog Page
        </h1>
        <p className={styles.p}>This is the Blog Page of NewBie Coder.</p>

        <img
          className={styles.homeImg}
          width={400}
          height={260}
          src="/blog-image.jpg"
          alt="home-background"
        />
        <div className={styles.blogGrid}>
          {blogData.map(
            ({ title: title, content: content, slug: slug }, index) => {
              return (
                <Link href={`/blogpost/${slug}`} key={index}>
                  <div className={styles.blog}>
                    <h2>{title}</h2>
                    <p>{content.substring(0, 130)}...</p>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allData = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allData.push(JSON.parse(myFile));
  }
  return {
    props: { allData },
  };
}

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let response = await data.json();
//   return {
//     props: { response },
//   };
// }

export default Blog;
