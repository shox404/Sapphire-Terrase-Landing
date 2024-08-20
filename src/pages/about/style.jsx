import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
  }
  .head-img {
    width: 100%;
  }
  .title {
    margin-top: 30px;
  }
  .line {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    p {
      color: #8d8d8d;
      margin-top: 10px;
      white-space: nowrap;
    }
  }
  .about {
    display: flex;
    gap: 30px;
    margin-block: 30px;
    img,
    p {
      width: 45%;
    }
    p {
      padding: 50px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      font-size: 30px;
    }
  }
  .logos {
    display: grid;
    padding-block: 40px;
    gap: 50px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    .head-img {
      width: 100%;
      height: 55vh;
      object-fit: cover;
    }
    .line {
      gap: 20px;
    }
    .about {
      flex-direction: column;
      img,
      p {
        width: 100%;
      }
      p {
        padding: 0;
      }
    }
    .logos {
      gap: 20px;
      grid-template-columns: repeat(3, 1fr);
      img {
        height: 20px;
      }
    }
  }
`;
