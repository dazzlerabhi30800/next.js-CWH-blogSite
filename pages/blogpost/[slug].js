import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";

const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then((a) => a.json())
      .then((a) => setBlog(a));
  }, [router.isReady]);
  return (
    <>
      <main className={styles.blogpostMain}>
        <h1 className={styles.h1}>{blog && blog.title}</h1>
        <p className={styles.p}>{blog && blog.content}</p>
      </main>
    </>
  );
};

export default slug;
