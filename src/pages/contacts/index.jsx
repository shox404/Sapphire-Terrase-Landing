import React from "react";
import { Block } from "./style";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function Contacts() {
  return (
    <Block>
      <h1 className="head-title">Contacts</h1>
      <hr />
      <div className="box">
        <div className="line">
          <div className="links">
            <div className="blog">
              <p>Call-center</p>
              <b>+99895 055 00 00</b>
              <b>+99890 450 55 00</b>
              <b>HELLO.SAPPHIRE.@GMAIL.COM</b>
            </div>
            <div className="blog">
              <p>Social media</p>
              <Link to="https://t.me" target="_blank">
                Telegram
              </Link>
              <Link to="https://instagram.com" target="_blank">
                Instagram
              </Link>
              <Link to="https://youtube.com" target="_blank">
                Youtube
              </Link>
            </div>
          </div>
          <div className="form">
            <p>
              Leave your contacts for <br /> more information
            </p>
            <input type="text" placeholder="Abdurashid Zukhuri" />
            <input type="text" placeholder="+998 94 200 20 02" />
            <Link to="/">
              SEND <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <img src={require("../../assets/contacts/map.png")} />
      </div>
      <hr />
      <div className="title">SAPPHIRE TERRACE</div>
    </Block>
  );
}
