import React from "react";
import css from "../styles/first/FirstPage.module.css";
import img from "./images/Group-5.png";
import Image from "next/image";
// import { RateApi, rateApi } from "../api/rate";
import { useState } from "react";
Loader;
import { useRouter } from "next/router";
import Loader from "./loader/Loader";
import Logo from "./images/discover-logo.svg";

const FirstPage = ({ setNextPage }) => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  setTimeout(() => setLoading(false), 2000);
  return (
    <div className={css.bg}>
      {}
      <div className={css.firstBLock}>
        <div>
          {}
        </div>
        <div className={css.image}>
          <Logo />
          {}
        </div>
      </div>

      <div className={css.secondBlock}>
        <div className={css.firstPageFooter}>
          {loading ? (
            <Loader />
          ) : (
            <button
              onClick={() => router.push("main")}
              className={css.PageButton}
            >
              Շարունակել
            </button>
          )}

          <p className={css.Pagetext}>
            Օգտագործելով տվյալ հավելվածը դուք <br /> ընդունում եք պայմանները
            համաձայն <span>օգտագոծողի</span> <br /> <span>համաձայնագրի</span> և{" "}
            <span>գաղտնիության քաղաքականություն</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
