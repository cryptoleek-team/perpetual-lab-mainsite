import styled from 'styled-components';

export const Button = styled.a`
  text-decoration: none;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#e2c3ff' : '#010606')};
  white-space: nowrap;
  padding: 10px 30px ;
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: 18px ;
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#e2c3ff')};
  }

  @media screen and (max-width: 768px) {
    padding: 8px 20px ;
    font-size: 16px ;
  }
`;