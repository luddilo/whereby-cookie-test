import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  useEffect(() => {
    setCookie("foo", "bar", {
      secure: true,
      sameSite: "strict",
    });
  }, []);

  return (
    <div className={styles.container}>
      <head>
        <title>Whereby Y: Embedded</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className={styles.main}>
        <h1>One</h1>
        <a href="https://whereby-test-2.vercel.app/two">To two</a>
      </main>
    </div>
  );
}
