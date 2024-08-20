import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
  }
  .headImage {
    width: 100%;
    position: relative;
    .image {
      width: 100%;
    }
    .circle-1 {
      position: absolute;
      top: 35%;
      left: 22%;
    }
    .circle-2 {
      position: absolute;
      top: 38%;
      left: 48%;
    }
    .indicator {
      position: absolute;
      top: 30%;
      right: 15%;
      img:nth-child(2) {
        transform: translate(-49.5%, -40%);
      }
      .line {
        height: 1px;
        background-color: #fff;
        margin-top: -130px;
        transform: translateX(73%);
      }
      .box {
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transform: translate(130px, 20px);
        font-size: 9px;
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
      }
    }
  }
  .title {
    margin-top: 50px;
    font-size: 40px;
    font-weight: 100;
  }
  .filter {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    button {
      height: 30px;
      border: none;
      outline: none;
      padding-inline: 15px;
      border-radius: 35px;
      background-color: #fff;
      border: 1px solid;
      cursor: pointer;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .mobile {
      width: 100%;
      display: none;
      justify-content: space-between;
    }
    .active {
      background-color: #2c2d2d;
      color: #fff;
      border: none;
    }
    .column {
      display: flex;
      flex-direction: column;
      gap: 35px;
      .blog {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .items {
          display: flex;
          gap: 10px;
          .active {
            background-color: #2c2d2d;
            color: #fff;
            border: none;
          }
        }
      }
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-items: stretch;
    gap: 15px;
    padding-block: 40px;
    .card {
      width: 300px;
      box-shadow: 3px 3px 6px 0px #b5b5b533, -3px -3px 6px 0px #b5b5b533;
      border-radius: 15px;
      background-color: #fff;
      padding: 20px;
      .card-title {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
        button {
          height: 30px;
          border: none;
          outline: none;
          padding-inline: 15px;
          border-radius: 35px;
          background-color: #fff;
          border: 1px solid;
          cursor: pointer;
        }
      }
      img {
        margin-inline: 20px;
        margin-block: 30px;
      }
      .line {
        display: flex;
        justify-content: space-between;
        align-items: end;
        div {
          color: #757575;
        }
      }
      hr {
        margin-block: 10px;
      }
      a {
        color: #2c2d2d;
      }
    }
  }
  .first {
    display: flex;
    justify-content: space-between;
    gap: 130px;
    .blog {
      p {
        font-size: 13px;
        margin-top: 20px;
      }
    }
  }
  .second {
    display: flex;
    justify-content: space-between;
    gap: 130px;
    margin-block: 70px;
    .blog {
      p {
        font-size: 13px;
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    .title {
      font-size: 20px;
    }
    .headImage {
      .circle-1,
      .circle-2 {
        width: 40px;
      }
      .indicator {
        position: absolute;
        transform: scale(0.45) rotateY(180deg);
        top: 5%;
        right: 5%;
        .box {
          transform: translate(130px, 20px) rotateY(180deg);
        }
      }
    }
    .filter {
      .column {
        display: none;
      }
      .mobile {
        display: flex;
      }
    }
    .cards {
      .card {
        width: 100%;
        img {
          width: 80%;
        }
      }
    }
    .first,
    .second {
      flex-direction: column;
      img {
        width: 100%;
      }
    }
  }
`;
