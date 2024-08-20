import React, { useState } from "react";
import { Block } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";
import { FaGripLines } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const obj = (path) => ({ onClick: () => setOpen(false), to: `/${path}` });

  return (
    <Block open={open}>
      <img
        src={require("../../assets/menu/logo.png")}
        onClick={() => navigate("/")}
      />
      <div className="line">
        <div className="links">
          <Link {...obj("apartments")}>Apartments</Link>
          <Link {...obj("gallery")}>Gallery</Link>
          <Link {...obj("about")}>About Us</Link>
          <Link {...obj("contacts")}>Contacts</Link>
        </div>
        <div className="socials">
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
        <div className="services">
          <Link to="/call">
            Request Call <GoArrowUpRight />
          </Link>
          <Link to="/apartments">
            Choose an apartment <GoArrowUpRight />
          </Link>
        </div>
        <div className="languages">
          <span>EN</span>
          <span>UZ</span>
        </div>
      </div>
      <div className="icons media-icons">
        <IoMdHeart onClick={() => navigate("/saved")} />
        <div onClick={() => setOpen(!open)}>
          {open ? <RxCross2 /> : <FaGripLines />}
        </div>
      </div>
      <div className="menu">
        <div className="video">
          <img src={require("../../assets/menu/video.png")} />
          <img src={require("../../assets/menu/play.png")} />
        </div>
        <div className="box">
          <div className="header">
            <img
              src={require("../../assets/menu/logo.png")}
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
            />
            <Link to="/call">
              Request Call <GoArrowUpRight />
            </Link>
            <div className="icons">
              <IoMdHeart />
              <div onClick={() => setOpen(!open)}>
                {open ? <RxCross2 /> : <FaGripLines />}
              </div>
            </div>
          </div>
          <div className="links">
            <Link {...obj("")}>Home</Link>
            <Link {...obj("apartments")}>Apartments</Link>
            <Link {...obj("gallery")}>Gallery</Link>
            <Link {...obj("about")}>About Us</Link>
            <Link {...obj("contacts")}>Contacts</Link>
          </div>
          <div className="footer">
            <div className="l">
              <div></div>
              <div>
                <p>+99895 055 00 00</p>
                <p>hello@sapphire.com</p>
              </div>
            </div>
            <div className="l">
              <p>Uzbekistan</p>
              <p>
                Tashkent, Avliyo Ota street 128 <br /> Mon-Sat: 10:00 AM - 20:00
                PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
}
