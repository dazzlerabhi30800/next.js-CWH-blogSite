import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Dummy from "@/Components/Dummy";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          .mySpan {
            color: rebeccapurple;
            font-weight: 800;
            font-size: 1.5rem;
            margin: 0 auto;
          }
        `}
      </style>
      <Head>
        <title>NewBie Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="nextjs, newbie coder blog, newbie coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <span className={styles.logo}>newbieCoder</span>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main className={`${styles.main} ${inter.className}`}>
        <Dummy />
        <h1 className={styles.h1}>Newbie Coder</h1>
        <p className={styles.p}>
          This a Project by Newbie Coder - Abhishek Choudhary
        </p>
        <span className="mySpan">This the colored span</span>
      </main>
    </>
  );
}
