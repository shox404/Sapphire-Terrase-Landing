import React from "react";
import { Block } from "./style";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  return (
    <Block>
      <div className="line">
        <div className="links">
          <div className="blog">
            <p>Pages</p>
            <Link to="/apartments">Apartments</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contacts">Contacts</Link>
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
          <div className="blog">
            <p>Call-center</p>
            <b>+99895 055 00 00</b>
            <b>+99890 450 55 00</b>
            <b>HELLO.SAPPHIRE.@GMAIL.COM</b>
          </div>
        </div>
        <div className="second">
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
          <div className="languages">
            <div></div>
            <div>
              <span>EN</span>
              <span>UZ</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="title">SAPPHIRE TERRACE</div>
    </Block>
  );
}
