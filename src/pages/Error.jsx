import React from "react";

import { Link, useRouteError } from "react-router-dom";
import img from '../image/not-found.svg'
import styled from 'styled-components';

function Error() {

  

  const Wrapper = styled.div`
    min-height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 90vw;
      max-width: 600px;
      display: block;
      margin-bottom: 2rem;
      margin-top: -3rem;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
  
    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
    a {
      color: black;
      text-transform: capitalize;
      background:green;
      width:100px;
      font-size:35px;
      padding:5px;
    }

  `;
  

  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt={error.status} />
          <h3>Ohh!</h3>
          <p>We Can't seen to find page you are looking for</p>
          <Link to="/" className="btnn">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>SomeThing went wrong</h1>
    </Wrapper>
  );
}
export default Error;