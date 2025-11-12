import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  padding: 0 8px;
  gap: 32px;
  display: flex;
`;

export const Board = styled.div`
  background-color: #fff;
  border: 1px solid rgba(204, 206, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  header {
    padding: 8px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin-top: 24px;


  button {
    background-color: #fff;
    border: 1px solid rgba(204, 206, 204, 0.4);
    border-radius: 16px;
    height: 128px;
    width: 100%;
    padding: 8px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;

