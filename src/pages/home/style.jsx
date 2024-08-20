import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  .services {
    display: none;
    flex-direction: column;
    gap: 5px;
    font-size: 10px;
    margin-bottom: 20px;
    a {
      color: #2c2d2d;
      white-space: nowrap;
    }
  }
  .head-img {
    width: 100%;
  }
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
  }
  .first {
    margin-top: 70px;
    width: 100%;
    h1 {
      text-transform: uppercase;
      font-size: 50px;
    }
  }
  .second {
    width: 100%;
    display: flex;
    margin-top: 40px;
    .space {
      width: 50%;
    }
    .content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
      a {
        color: #2c2d2d;
      }
      p {
        font-size: 15px;
      }
      img {
        margin-top: 20px;
      }
    }
  }
  .third {
    margin-top: 70px;
    text-transform: uppercase;
    h1,
    h2 {
      font-weight: 100;
    }
    h2 {
      color: #8d8d8d;
    }
  }
  .fourth {
    display: flex;
    justify-content: space-between;
    gap: 15%;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .image {
      width: 60%;
    }
  }
  .fifth {
    margin-top: 70px;
    font-weight: 100;
    font-size: 35px;
    text-transform: uppercase;
  }
  .sixth {
    display: flex;
    img {
      width: 50%;
    }
    .content {
      margin-left: 150px;
      padding-block: 50px;
      display: flex;
      flex-direction: column;
      gap: 50px;
      .lines {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        .line {
          display: flex;
          align-items: center;
          gap: 100px;
          color: #b5b5b5;
          text-transform: uppercase;
          white-space: nowrap;
        }
        :nth-child(6) {
          color: #2c2d2d;
        }
      }
      a {
        color: #2c2d2d;
        text-align: start;
      }
    }
  }
  .seventh {
    .line {
      display: flex;
      justify-content: space-between;
      p {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      h1 {
        font-weight: 100;
      }
    }
    a {
      color: #2c2d2d;
    }
  }
  .eightth {
    display: flex;
    margin-block: 70px;
    img {
      width: 50%;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 150px;
      h1 {
        text-transform: uppercase;
      }
      div {
        p {
          color: #b5b5b5;
        }
      }
      .places {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        :nth-child(3) {
          color: #2c2d2d;
        }
      }
      a {
        color: #2c2d2d;
      }
    }
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    .services {
      display: flex;
    }
    .head-img {
      width: 100%;
      height: calc(100dvh - 140px);
      object-fit: cover;
    }
    .first {
      h1 {
        width: 75%;
        font-size: 23px;
      }
    }
    .second {
      .space {
        width: 40%;
      }
    }
    .third {
      font-size: 13px;
    }
    .fourth {
      display: flex;
      flex-direction: column-reverse;
      gap: 20px;
      .content {
        gap: 20px;
      }
      .image {
        width: 100%;
      }
    }
    .fifth {
      font-size: 25px;
    }
    .sixth {
      flex-direction: column;
      img {
        width: 100%;
      }
      .content {
        margin-left: 0;
      }
    }
    .seventh {
      .line {
        flex-direction: column;
        gap: 10px;
        p {
          width: 100%;
        }
      }
    }
    .eightth {
      flex-direction: column;
      gap: 20px;
      img {
        width: 100%;
      }
      .text {
        gap: 20px;
        padding-left: 0;
        h1 {
          font-size: 20px;
        }
      }
    }
  }
`;
