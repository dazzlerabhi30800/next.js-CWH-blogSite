import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
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
          <Link href={"/blogpost/anime-blog"}>
            <div className={styles.blog}>
              <h2>Anime Blog</h2>
              <p>This is the blog Based on Anime</p>
            </div>
          </Link>
          <Link href={"/blogpost/movie-blog"}>
            <div className={styles.blog}>
              <h2>Movie Blog</h2>
              <p>This is the blog Based on Movie</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Blog;
