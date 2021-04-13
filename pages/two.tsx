import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "../styles/Home.module.css";

export default function Two() {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  useEffect(() => {
    console.log("Two. Cookies: ", cookies);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Two. Cookies: {JSON.stringify(cookies)}</h1>
        <a href="https://whereby-test-2.vercel.app/">To one</a>
      </main>
    </div>
  );
}
