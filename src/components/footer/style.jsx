import styled from "styled-components";

export const Block = styled.div`
  padding: 50px;
  color: #fff;
  background-color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #797979;
  }
  a {
    color: #fff;
  }
  .line {
    display: flex;
    justify-content: space-between;
    .links {
      display: flex;
      gap: 50px;
      .blog {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 15px;
        white-space: nowrap;
        p {
          margin-bottom: 10px;
          color: #5b5b5b;
        }
      }
      .blog:nth-child(1) {
        a {
          text-decoration: none;
        }
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      input {
        background-color: transparent;
        height: 35px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
      }
    }
    .languages {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        display: flex;
        gap: 15px;
        font-size: 12px;
        span {
          cursor: pointer;
        }
        :nth-child(2) {
          color: #b5b5b5;
        }
      }
    }
  }
  .title {
    color: #5b5b5b;
    width: 100%;
    font-size: 8vw;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    padding-bottom: 30px;
    .line,
    .links {
      gap: 50px;
      flex-wrap: wrap;
    }
    .languages {
      margin-top: 20px;
    }
  }
`;
