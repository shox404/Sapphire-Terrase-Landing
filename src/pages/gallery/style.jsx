import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
  }
  .line {
    display: flex;
    gap: 35px;
    flex-wrap: wrap;
    font-weight: 100;
    margin-bottom: 40px;
    p {
      color: #8d8d8d;
      cursor: pointer;
      font-size: 13px;
    }
    p:nth-child(3) {
      color: #2c2d2d;
    }
  }
  .first {
    display: flex;
    justify-content: space-between;
    margin-block: 40px;
    .images {
      display: flex;
      gap: 20px;
    }
    .image {
      img {
        width: 100%;
      }
      p {
        margin-top: 20px;
      }
    }
  }
  .second {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-block: 40px;
    .image {
      img {
        width: 100%;
      }
      p {
        margin-top: 20px;
      }
    }
  }
  .third {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-block: 40px;
    .image {
      img {
        width: 100%;
      }
      p {
        margin-top: 20px;
      }
    }
    .image:nth-child(3) {
      .blog {
        position: relative;
        top: 100%;
        transform: translateY(-100%);
      }
    }
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    .first,
    .second,
    .third {
      flex-direction: column;
    }
    .first {
      gap: 20px;
    }
    .third {
      .image:nth-child(3) {
        .blog {
          top: 0;
          transform: translateY(0);
        }
      }
    }
  }
`;
