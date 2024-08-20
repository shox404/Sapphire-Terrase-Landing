import React from "react";
import { Block } from "./style";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";

export default function Saved() {
  return (
    <Block>
      <h1 className="title">SAVED APARTMENTS</h1>
      <hr />
      <div className="cards">
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-9-2B</p>
            <button>
              <IoMdHeart />
            </button>
          </div>
          <img src={require("../../assets/apartments/project-1.png")} />
          <div className="line">
            <p>Price:</p>
            <p>45 700 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 9</p>
              <p>Rooms 2</p>
              <p>65,9 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-3-4A</p>
            <button>
              <IoMdHeart />
            </button>
          </div>
          <img src={require("../../assets/apartments/project-2.png")} />
          <div className="line">
            <p>Price:</p>
            <p>67 400 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 3</p>
              <p>Rooms 3</p>
              <p>80,7 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-7-2B</p>
            <button>
              <IoMdHeart />
            </button>
          </div>
          <img src={require("../../assets/apartments/project-3.png")} />
          <div className="line">
            <p>Price:</p>
            <p>80 200 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 7</p>
              <p>Rooms 3</p>
              <p>85,3 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-3-1B</p>
            <button>
              <IoMdHeart />
            </button>
          </div>
          <img src={require("../../assets/apartments/project-4.png")} />
          <div className="line">
            <p>Price:</p>
            <p>82 700 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 6</p>
              <p>Rooms 3</p>
              <p>85,3 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-5-4B</p>
            <button>
              <IoMdHeart />
            </button>
          </div>
          <img src={require("../../assets/apartments/project-5.png")} />
          <div className="line">
            <p>Price:</p>
            <p>124 700 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 5</p>
              <p>Rooms 4</p>
              <p>109 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <p>Apartments 3-4-1A</p>
            <button>
              <IoMdHeart />
            </button>
          </div>
          <img src={require("../../assets/apartments/project-6.png")} />
          <div className="line">
            <p>Price:</p>
            <p>132 400 USD</p>
          </div>
          <hr />
          <div className="line">
            <div>
              <p>Floor 5</p>
              <p>Rooms 4</p>
              <p>115 m2</p>
            </div>
            <Link to="/info">
              BOOK NOW <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </Block>
  );
}
