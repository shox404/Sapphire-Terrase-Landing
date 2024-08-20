import React from "react";
import { Block } from "./style";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";
import { FaFile, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";

export default function Info() {
  return (
    <Block>
      <div className="first">
        <div className="blog">
          <img src={require("../../assets/apartments/project.png")} />
          <div className="text">
            <p>Planner</p>
            <p>On the Floor</p>
          </div>
        </div>
        <div className="blog">
          <h1>Apartments 3-5-4B</h1>
          <p>
            Floor: 5 <br />
            <br /> Rooms: 4 <br />
            <br /> Square: 109 m2
          </p>
          <div>
            <b>Price:</b>
            <br />
            <b>124 700 USD</b>
          </div>
          <Link to="/info">
            BOOK NOW <GoArrowUpRight />
          </Link>
          <div className="btns">
            <button>
              <IoMdHeart />
            </button>
            <button>
              <FaFile />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h2>About Apartment</h2>
      <div className="second">
        <div className="box">
          <img src={require("../../assets/apartments/about.png")} />
          <div className="line">
            <p>
              Our hi-tech kitchen is equipped with cutting-edge appliances and
              smart features designed to elevate your cooking experience. From
              precision induction cooktops to intelligent ovens with built-in
              recipe guides, every detail is crafted to streamline your cooking
              process.
            </p>
            <div>
              <FaArrowLeft /> 01 / 05 <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="box">
          <p>bedroom</p>
          <p>Kitchen</p>
          <p>Living room</p>
          <p>bathroom</p>
          <p>Hall</p>
          <p>hallway</p>
          <p>Terrace</p>
          <p>Balcony</p>
        </div>
      </div>
      <hr />
      <div className="content">
        <p>Documentation</p>
        <FaPlus />
      </div>
      <hr />
      <div className="content">
        <p>Constuction Dynamics</p>
        <FaPlus />
      </div>
      <hr />
    </Block>
  );
}
