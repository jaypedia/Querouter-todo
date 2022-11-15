import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  margin: 3rem auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  width: 60vw;
  height: 100%;
  background-color: #f6cb01;
  box-shadow: 0 0 0 6px black, 0 0 0 12px #f6cb01;
  box-sizing: border-box;
  font-size: 1.5em;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 1em;
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1em;
`;

const MessageWrapper = styled.div`
  text-align: center;
`;

let countdownTimer: number;

export const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    countdownTimer = window.setInterval(() => {
      setCountdown(prevState => prevState - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(countdownTimer);
      navigate('/');
    }
  }, [navigate, countdown]);

  return (
    <NotFoundWrapper>
      <TextWrapper>
        <TitleWrapper>404 Not Found</TitleWrapper>
        <ContextWrapper>
          <MessageWrapper>페이지를 찾을 수 없어요.</MessageWrapper>
          <MessageWrapper>{countdown}초 후에 메인 페이지로 이동합니다.</MessageWrapper>
        </ContextWrapper>
      </TextWrapper>
    </NotFoundWrapper>
  );
};
