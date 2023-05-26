import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main className={styles.blogpostMain}>
        <h1 className={styles.h1}>Title of the Page {slug}</h1>
        <p className={styles.p}>
          Sit rerum officiis soluta architecto necessitatibus quam molestias
          Molestiae natus corporis quaerat in aspernatur voluptatum! Aspernatur
          itaque beatae possimus minus
        </p>
      </main>
    </>
  );
};

export default slug;
