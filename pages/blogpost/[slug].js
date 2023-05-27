import React, { useState } from "react";
import styles from "../../styles/blogpost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <>
      <main className={styles.blogpostMain}>
        <h1 className={styles.h1}>{blog && blog.title}</h1>
        <p className={styles.p}>{blog && blog.content}</p>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "anime-blog" } },
      { params: { slug: "manga-blog" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
