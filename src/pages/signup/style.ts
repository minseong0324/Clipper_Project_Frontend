import styled from 'styled-components';
import button1 from '../../assets/button/button1.png'; 
import button4 from '../../assets/button/button4.png'; 
import modalButton from '../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../assets/button/button-midium-2.png'; 
import { isMobile } from 'react-device-detect';

const SignUpButton = styled.button`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  color: #444;
`;

const mobileStyles = `
  /* 모바일 스타일 */

  /* 모바일 모든 크기 가로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: landscape) {
    height: 320px;
  }

  /* 큰 태블릿 세로모드용 스타일 */
  @media screen and (min-width: 821px) and (orientation: portrait) {
    height: 1180px;
  }

  /* 큰 태블릿 제외 air, air mini 태블릿 모든 크기 세로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: portrait) {
    height: 950px;
  }

  /* 모바일 세로모드용 스타일 */
  @media screen and (max-width: 599px) and (orientation: portrait) {
    height: 820px;
  }
`;

export const SignUpWrapper = styled.div`
  font-family: 'BareunHipi';
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 820px;

  ${isMobile ? mobileStyles : ''}
`;

 const SignUpForm = styled.form`
  font-family: 'NanumBarunpenB';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SocialSignUpWrapper = styled.div`
  font-family: 'NanumBarunpenB';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const SignUpInput = styled.input`
  font-family: 'NanumBarunpenB';
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #777; // 아래쪽 테두리만 추가합니다.
  background-color: transparent;
  color: #222;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

const H1 = styled.h1`
  font-family: 'BareunHipi';
  font-size: 38px;
  margin-bottom: 24px;
`;

const ModalTextsWrapper = styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
justify-content: center;
`;

const ErrorModalTextsWrapper = styled.div`
position: relative;
display: flex;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ModalButton = styled.button`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: #444; 
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${modalButtonAfterClick}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
`;

const ErrorCenterModalWrapper = styled.div` //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const ErrorModalTextsWrapper1 = styled.div` // 한줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //두줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;


const PolicyTextsWrapper = styled.div`
  position: absolute;
  bottom: -20px;  // 화면 하단에 고정
  font-family: 'NanumBarunpenR';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
  z-index: 2;
  overflow: auto;

  // 반응형 디자인 (예: 미디어 쿼리를 사용하여 화면 크기가 768px 이상일 때 적용되는 스타일)
  @media (min-width: 768px) {
    bottom: -5%;  // 화면 하단에서 조금 더 아래로
    overflow: auto;
  }

  // 큰 태블릿 세로모드용 스타일
  @media screen and (min-width: 820px) and (orientation: portrait) {
    bottom: 50px;  // 화면 하단에서 조금 더 아래로
    overflow: auto;
  }

  /* 모바일 max, plus 가로모드용 스타일 */
  @media screen and (max-width: 899px) and (orientation: landscape) {
    bottom: -80%;  // 화면 하단에서 조금 더 아래로
    overflow: auto;
  }
`;

const PolicyTextsStyle = styled.p`
  margin-top: 6px;
  font-size: 9px;
  padding-bottom: 10px;
`;

const PolicyStyledLink = styled.a`
  color: #444;
  text-decoration: underline;  // 밑줄 추가

  &:hover {
    color: darkblue;  // 마우스 오버 시 색상 변경
  }
`;



export const s = {
  SignUpWrapper,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  H1,
  ModalTextsWrapper,
  ErrorModalTextsWrapper,
  ModalWrapper,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  SocialSignUpWrapper,
  PolicyTextsWrapper,
  PolicyTextsStyle,
  PolicyStyledLink
}