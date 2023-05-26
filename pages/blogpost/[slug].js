import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div>Slug {slug}</div>
    </>
  );
};

export default slug;
