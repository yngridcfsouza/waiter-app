import styled from 'styled-components'

export const Container = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
  padding: 0 8px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      font-size: 32px;
      color: #fff;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      margin-top: 6px;
      opacity: 0.9;
    }
  }
`;
