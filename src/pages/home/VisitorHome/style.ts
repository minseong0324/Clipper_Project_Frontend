import styled from 'styled-components';

 const Button = styled.button`
  font-family: 'LeeSeoyun';
  width: 200px; // 버튼 너비를 조정
  height: 35px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 1px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
      background: rgb(255, 157, 0); // 눌렸을 때의 배경색을 변경
  }
`;
  
 const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

 const TextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
`;

 const ModalTextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  font-size: 15px;
  height: 10%; 
`;

 const ModalTextsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// 캐릭터 이미지 위치 스타일링 (위치 변경 시 이 부분을 수정)
 const CharImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 77%; // top offset from tree image
  right: 25%; // right offset from tree image
`;

 const TreeImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
    z-index: 2;

`;

// 기존의 HTML 태그를 styled-components로 변경합니다.
const StyledImg = styled.img`
  position: relative;
  z-index: 2;
  width: 160px;
  height: 40px;
`;

const StyledH3 = styled.h3`
  // 여기에 필요한 스타일을 추가하세요.
`;

const StyledH1 = styled.h1`
  // 여기에 필요한 스타일을 추가하세요.
`;

const StyledP = styled.p`
  // 여기에 필요한 스타일을 추가하세요.
`;

const StyledDiv = styled.div`
  // 여기에 필요한 스타일을 추가하세요.
`;

const TreeImg = styled.img`
  width: 300px;
  height: 300px;
`;

const TreeFragmentImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 300px;
  height: 300px;
`;

const GinkgoCharImage = styled.img`
position: absolute;
z-index: 2;
top: 77%; // top offset from tree image
right: 25%; // right offset from tree image
`;


const NameInput = styled.input`
font-family: "LeeSeoyun";
width: 200px;
height: 30px;
margin-bottom: 20px;
`;

const LetterArea = styled.textarea`
font-family: "LeeSeoyun";
width: 200px;
height: 200px;
overflow: auto;
margin-bottom: 20px;
resize: none;
`;

const H3 = styled.h3`

`;

const H2 = styled.h2`

`;

const H1 = styled.h1`

`;

const P = styled.p`

`;

const Form = styled.form`

`;

export const s = {
    Button,
    CenteredWrapper,
    TextsStyle,
    ModalTextsStyle,
    ModalTextsWrapper,
    CharImage,
    TreeImageWrapper,
    StyledImg,
    StyledH3,
    StyledH1,
    StyledP,
    StyledDiv,
    TreeImg,
    TreeFragmentImg,
    GinkgoCharImage,
    NameInput,
    LetterArea,
    H3,
    H2,
    H1,
    P,
    Form,
}