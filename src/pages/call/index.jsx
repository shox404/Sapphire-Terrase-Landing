import React from "react";
import { Block } from "./style";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function Call() {
  return (
    <Block>
      <img src={require("../../assets/contacts/form.png")} />
      <div className="box">
        <div className="form">
          <p>
            Leave your contacts for <br /> more information
          </p>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your number" />
          <input type="text" placeholder="Your address" />
          <Link to="/call">
            SEND <GoArrowUpRight />
          </Link>
        </div>
        <div className="text">
          <h4>Office sales</h4>
          <p>Tashkent, Avliyo Ota street 128</p>
        </div>
      </div>
    </Block>
  );
}
