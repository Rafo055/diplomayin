/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useCallback } from "react";

import axios from "axios";
import AC from "../pages/images/1x1/ac.svg";
import АМ from "../pages/images/1x1/am.svg";
import RU from "../pages/images/1x1/ru.svg";
import BJ from "../pages/images/1x1/bj.svg";
import AN from "../pages/images/1x1/tg.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import css from "../styles/second/SecondPage.module.css";
import img from "./images/search_3.png";
import Logo from "./images/Group-5.svg";
import Euro from "./images/icons/euro.svg";
import Back from "./images/icons/back.svg";
import News from "./images/icons/news.svg";
import Location from "./images/icons/map.svg";
import Link from "next/link";
import Doth from "./components/doth";
import Sidebar from "./sidebar";
import { slide as Menu } from "react-burger-menu";

const rates = () => {
  const router = useRouter();

  const [rate, setRate] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [currencyList, setCurrencyList] = useState([]);
  const [result, setResult] = useState(1);
  const [unit, setUnit] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("Bitcoin");
  const [fromCurrency, setFromCurrency] = useState("Bitcoin");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/exchange_rates"
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Error: ${response.status}`);
      }

      const responseData = await response.json();
      // responseData = { rates: {usd: {}, php: {}, gbp: {} } }
      // currencyList = [{}, {}, {}]
      const objectValues = Object.values(responseData.rates);
      setCurrencyList(objectValues);
      setFromCurrency(objectValues[0].name);
      setToCurrency(objectValues[0].name);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const callback = useCallback(() => {
    const calculate = () => {
      const obj1 = currencyList.find((cur) => cur.name === fromCurrency);
      let xToBTC = obj1.value;
      let BTCtoX = 1 / xToBTC;
      let obj2 = currencyList.find((cur) => cur.name === toCurrency);
      let yToBTC = obj2.value;
      let calc = BTCtoX * yToBTC * inputValue;
      let unit = obj2.unit;
      let result = { calc, unit };
      return result;
    };
    return calculate();
  }, [currencyList, fromCurrency, toCurrency, inputValue]);

  useEffect(() => {
    axios
      .get(
        // new key 300 request UNEqsTeNRuQOqbQnHYF9n4LdpusVFq5DGRqvRHSM
        // "https://api.currencyapi.com/v3/latest?apikey=jB3HVzcNdXRA92DH80cxbJTVVIfyx8YFefpDk7hi",
        "https://api.currencyapi.com/v3/latest?apikey="
      )
      .then((res) => setRate(res.data.data));
    if (currencyList.length !== 0) {
      const { calc, unit } = callback();
      setUnit(unit);
      setResult(calc);
    }
  }, [callback, currencyList.length]);

  if (!rate) return null;
  console.log(router.pathname);

  return (
    <div className={css.main}>
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
      <div
        className={css.secondPage}
        style={{ background: "#1a3a55e6" }}
      >
        <div>
          <h3
            style={{
              textAlign: "center",
              color: "white",
              margin: "0",
              paddingBottom: "1rem",
            }}
          >
            E X C H A N G E
          </h3>
          <div style={{ padding: "1rem" }}>
            <table style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr style={{ fontSize: "12px" }}>
                  <th
                    style={{
                      padding: "0 10px",
                      backgroundColor: "#84b1d0",
                      fontWeight: "100",
                    }}
                  >
                    Country
                  </th>
                  <th
                    style={{
                      padding: "0 10px",
                      backgroundColor: "#84b1d0",
                      fontWeight: "100",
                    }}
                  >
                    ISO(կոդ)
                  </th>
                  <th
                    style={{
                      padding: "0 10px",
                      backgroundColor: "#84b1d0",
                      fontWeight: "100",
                    }}
                  >
                    Արտարժույթ
                  </th>
                  <th
                    style={{
                      padding: "0 10px",
                      backgroundColor: "#84b1d0",
                      fontWeight: "100",
                    }}
                  >
                    Տատանում
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <АМ style={{ width: "30px" }} />
                  </td>
                  <td style={{ backgroundColor: "#dedede" }}>ARM</td>
                  <td style={{ backgroundColor: "#dedede" }}>
                    {rate.AMD?.value}
                  </td>
                  <td style={{ backgroundColor: "#dedede" }}>
                    <span style={{ color: "green", fontSize: "32px" }}>
                      &#8593;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <BJ style={{ width: "30px" }} />
                  </td>
                  <td style={{ backgroundColor: "#efefef" }}>BOB</td>
                  <td style={{ backgroundColor: "#efefef" }}>
                    {rate.BOB?.value}
                  </td>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <span span style={{ color: "red", fontSize: "32px" }}>
                      &#8595;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <RU style={{ width: "30px" }} />
                  </td>
                  <td style={{ backgroundColor: "#dedede" }}>RUB</td>
                  <td style={{ backgroundColor: "#dedede" }}>
                    {rate.RUB?.value}
                  </td>
                  <td style={{ backgroundColor: "#dedede" }}>
                    <span span style={{ color: "green", fontSize: "32px" }}>
                      &#8593;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <divC style={{ width: "30px" }} />
                  </td>
                  <td style={{ backgroundColor: "#efefef" }}>AED</td>
                  <td style={{ backgroundColor: "#efefef" }}>
                    {rate.AED?.value}
                  </td>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <span span style={{ color: "red", fontSize: "32px" }}>
                      &#8595;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <AN style={{ width: "30px" }} />
                  </td>
                  <td style={{ backgroundColor: "#efefef" }}>ANG</td>
                  <td style={{ backgroundColor: "#efefef" }}>
                    {rate.ANG?.value}
                  </td>
                  <td style={{ backgroundColor: "#efefef" }}>
                    <span span style={{ color: "red", fontSize: "32px" }}>
                      &#8595;
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="App">
            <div className="container">
              <div className="result">
                <p
                  style={{ fontFamily: "monospace", color: "white" }}
                >{`${Number(result.toFixed(2)).toLocaleString(
                  "en"
                )} ${unit}`}</p>
              </div>
              <label htmlFor="value__input" style={{ color: "white" }}>
                Քանակ:
                <input
                  style={{
                    padding: "0 18px",
                    color: "#9e9e9e",
                    border: "1px solid #F86070",
                    borderRadius: "8px",
                  }}
                  className="input"
                  id="value__input"
                  type="number"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
              </label>
              <label htmlFor="fromCurrency" style={{ color: "white" }}>
                Արտ. 1:
                <select
                  style={{
                    color: "#9e9e9e",
                  }}
                  id="fromCurrency"
                  className="input"
                  aria-label="select From Currency"
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencyList &&
                    currencyList.map((currency) => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name}
                      </option>
                    ))}
                </select>
              </label>
              <label htmlFor="toCurrency" style={{ color: "white" }}>
                Արտ. 2:
                <select
                  style={{
                    color: "#9e9e9e",
                  }}
                  id="toCurrency"
                  className="input"
                  aria-label="select To Currency"
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencyList &&
                    currencyList.map((currency) => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          </div>
          <div className={css.secondPageFooter}>
            <div>
              <Back onClick={() => router.back()} />
            </div>
            <div style={{ position: "relative" }}>
              <Link href="main">
                <Location />
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <Euro />
              <Doth left={-3} />
            </div>
            <div>
              <Link href="news">
                <News />
              </Link>
            </div>

            <span style={{ opacity: "0", width: "20px" }}>
              <Image src={img} alt="list" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rates;
