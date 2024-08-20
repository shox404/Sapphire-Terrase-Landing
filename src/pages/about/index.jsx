import React from "react";
import { Block } from "./style";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

export default function About() {
  return (
    <Block>
      <img src={require("../../assets/about/head.png")} className="head-img" />
      <h1 className="title">Sapphire Terrace</h1>
      <hr />
      <p>High Performance</p>
      <br />
      <br />
      <div className="line">
        <div>
          <h1>12</h1>
          <p>Years of Experience</p>
        </div>
        <div>
          <h1>134</h1>
          <p>Project Sold</p>
        </div>
      </div>
      <hr />
      <div className="line">
        <div>
          <h1>12,000</h1>
          <p>Suites Sold</p>
        </div>
        <div>
          <h1>$12 Billion</h1>
          <p>In Sales</p>
        </div>
      </div>
      <hr />
      <h3>About Company</h3>
      <div className="about">
        <img src={require("../../assets/about/about.png")} />
        <p>
          Sapphire Terrace are luxury apartments and penthouses in the city
          center with panoramic terraces and a beautiful facade. A square
          footage of apartments for every taste, smart houses, as well as hotels
          and offices in the complex itself. <br />
          <br />
          <br /> The complex has a guarded area, restaurants, business centers
          and fitness areas, underground and above-ground parking. The Sapphire
          Terrace residential complex is considered the best complex for family
          living.
        </p>
      </div>
      <hr />
      <div className="content">
        <p>Our Team</p>
        <FaPlus />
      </div>
      <hr />
      <div className="content">
        <p>Partners</p>
        <FaMinus />
      </div>
      <div className="logos">
        <img src={require("../../assets/about/logo-1.png")} />
        <img src={require("../../assets/about/logo-2.png")} />
        <img src={require("../../assets/about/logo-3.png")} />
        <img src={require("../../assets/about/logo-4.png")} />
        <img src={require("../../assets/about/logo-5.png")} />
        <img src={require("../../assets/about/logo-6.png")} />
        <img src={require("../../assets/about/logo-7.png")} />
        <img src={require("../../assets/about/logo-8.png")} />
      </div>
      <hr />
      <div className="content">
        <p>FAQ</p>
        <FaPlus />
      </div>
      <hr />
    </Block>
  );
}
