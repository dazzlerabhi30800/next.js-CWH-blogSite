import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((a) => setBlogData(a));
  }, []);
  return (
    <>
      <main className={`${styles.main}`}>
        <h1 style={{ fontSize: "2.5rem" }} className={styles.h1}>
          Blog Page
        </h1>
        <p className={styles.p}>This is the Blog Page of NewBie Coder.</p>
        <Image
          className={styles.homeImg}
          width={400}
          height={260}
          src="/blog-image.jpg"
          priority={true}
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

export default Blog;
