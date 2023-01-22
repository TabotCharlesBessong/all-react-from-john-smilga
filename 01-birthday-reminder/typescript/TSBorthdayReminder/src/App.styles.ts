
import styled from 'styled-components'

export const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    width: 90vw;
    margin: 5rem 0;
    max-width: 450px;
    background: var(--clr-white);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  }

  h3{
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-size:1.75rem;
    line-height:1
  }
`;

export const Person = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;

  img{
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  h4{
    margin-bottom:0.35rem;
  }

  p{
    margin-bottom:0;
  }
`;

export const Button = styled.button`
  color: #fff;
  display: block;
  width: 100%;
  border-color: transparent;
  background: #f28ab2;
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: 0.05rem;
  border-radius: 0.25rem;
  outline: 1px solid rgba(242, 138, 178, 0.8);
  cursor: pointer;
`;