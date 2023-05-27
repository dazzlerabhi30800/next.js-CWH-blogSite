import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.response);
  return (
    <>
      <main className={styles.blogpostMain}>
        <h1 className={styles.h1}>{blog && blog.title}</h1>
        <p className={styles.p}>{blog && blog.content}</p>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  let response = await data.json();
  return {
    props: { response },
  };
}

export default slug;
