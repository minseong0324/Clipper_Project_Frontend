import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TextsStyle = styled.div`
font-family: 'LeeSeoyun';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 17px; 
text-align: center;
`;

type LeafButtonProps = {
    leafImage: string;
};

const LeafButton = styled.button<LeafButtonProps>`
  font-family: 'EarlyFontDiary';
  font-size: 3px;
  color: rgb(0, 0, 0);
  position: relative;
  background: url(${props => props.leafImage}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  z-index: 2;
  padding: 0px;
  margin: 8px;
`;

export const s = {
    ButtonWrapper,
    TextsStyle,
    LeafButton
}