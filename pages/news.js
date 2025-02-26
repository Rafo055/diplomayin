import React from "react";
import bbc from "./images/BBC.png";
import Image from "next/image";
import Pencil from "./images/pencil.svg";
import Share from "./images/share.svg";
import { mockData } from "../mockData";
import moment from "moment";
import Link from "next/link";
import Sidebar from "./sidebar";
import { slide as Menu } from "react-burger-menu";
import Doth from "./components/doth";
import { useRouter } from "next/router";
import css from "../styles/second/SecondPage.module.css";
import img from "./images/search_3.png";
import Euro from "./images/icons/euro.svg";
import Back from "./images/icons/back.svg";
import NewsIcon from "./images/icons/news.svg";
import Location from "./images/icons/map.svg";

console.log(mockData);
const News = () => {
  const router = useRouter();

  return (
    <div style={{ background: "#143047db" }}>
      <Sidebar outerContainerId={"App"} />
      <Menu right>
        <div
          style={{
            fontSize: "15px",
            display: "flex",
            top: "140px",
            position: "absolute",
          }}
          className="menu-item"
        >
          <Euro />
          <Link href="/main">Գլխավոր</Link>
        </div>
        <div
          style={{
            fontSize: "15px",
            display: "flex",
            top: "190px",
            position: "absolute",
          }}
          className="menu-item"
        >
          <Euro />

          <Link href="/main">Արտարժույթի փոխանակում</Link>
        </div>
        <div
          style={{
            fontSize: "15px",
            display: "flex",
            top: "240px",
            position: "absolute",
          }}
          id="about"
          className="menu-item"
          href="/news"
        >
          <Euro />

          <Link href="/news">Նորություններ</Link>
        </div>
      </Menu>
      <h3
        style={{
          paddingTop: "10px",
          textAlign: "center",
          color: "red",
          margin: "0",
        }}
      >
        N E W S ({mockData.totalResults})
      </h3>

      {mockData.articles.map((section) => (
        // eslint-disable-next-line react/jsx-key
        <div className="news">
          <div className="news__img">
            <img
              src={section.urlToImage}
              alt="news"
              className="news__img-img"
            />
          </div>
          <div className="news__info">
            <div className="top_part">
              <div className="warn mark top_part-level"></div>
              <div className=" mark time">
                {moment(section.publishedAt).format("MMM Do YY")}
              </div>
            </div>

            <div className="title">{section.title}</div>
            <div className="context">{section.description}</div>
            <div className="news__info-3 author">
              <span>
                <Pencil className="pencil" />
                {section.author}
              </span>
              {/* <span className="">Ruben Abelyan</span> */}

              <div className="center">
                <Share className="eye" width="16px" />
                <span>{Math.floor(Math.random() * 100)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={css.secondPageFooter}>
        <div>
          <Back onClick={() => router.back()} />
        </div>
        <div style={{ position: "relative" }}>
          <Link href="main">
            <Location />
          </Link>
        </div>
        <div>
          <Link href="rates">
            <Euro />
          </Link>
        </div>
        <div style={{ position: "relative" }}>
          <NewsIcon />
          <Doth left={-6} />
        </div>

        <span style={{ opacity: "0", width: "20px" }}>
          <Image src={img} alt="list" />
        </span>
      </div>
    </div>
  );
};

export default News;
