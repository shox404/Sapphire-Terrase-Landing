import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
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
          width: 30px;
          border: none;
          outline: none;
          padding-inline: 15px;
          border-radius: 35px;
          cursor: pointer;
          background-color: #2c2d2d;
          color: #fff;
          border: none;
          padding: 8px;
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
