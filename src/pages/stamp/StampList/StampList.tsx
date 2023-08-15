import React, { useEffect, useState, useCallback } from 'react';
import Modal from '../../../components/Modal/Modal';
import axios from 'axios';
import StampDetail from '../StampDetail/StampDetail';
import disabledStamp from '../../../assets/stamp/disabledStamp.png';
import { s } from './style';

// 우표의 활성화 상태를 정의하는 타입입니다.
type StampStatus = {
  status: boolean; // 우표 활성화, 비활성화
};

// 현재 날짜의 속성을 정의하는 인터페이스입니다.
interface NowDateProps {
  nowDate: number | null;
}

// 사용자의 ID를 로컬 스토리지에서 가져옵니다.
const userId = localStorage.getItem("userId")

const StampList: React.FC<NowDateProps> = ({ nowDate }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const initialStampsStatus: StampStatus[] = Array(30).fill({ status: false });
  const [stampsStatus, setStampsStatus] = useState<StampStatus[]>(initialStampsStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const [isMissionModalOpen, setMissionModalOpen] = useState(false);
  const [isMissionCompleteModalOpen, setMissionCompleteModalOpen] = useState(false);
  const [missionComplete, setMissionComplete] = useState<boolean | null>(null);


  // 서버에서 우표 상태를 가져오는 함수입니다.
  const fetchStampStatus = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions`);
      if (nowDate !== null) {
        setStampsStatus(response.data.stampsStatus);
      }
    } catch (error) {
      console.error(error);
    }
  }, [nowDate]);

  // 컴포넌트가 마운트될 때 우표 상태를 가져옵니다.
  useEffect(() => {
      fetchStampStatus();
    }, [fetchStampStatus]);

  // 모달을 열고 해당 우표의 상세 정보를 보여주는 함수입니다.
  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setModalContent(<StampDetail index={index} onClose={handleCloseModal} />);
    setIsOpen(true);
  };

    // 미션 모달을 열 때, 미션의 완료 여부를 가져옵니다.
  const handleOpenMissionModal = async () => {
    setMissionModalOpen(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions/${nowDate}`);
      setMissionComplete(response.data.missionComplete);
    } catch (error) {
      console.error(error);
    }
  };

   // 미션 모달창 닫는 함수
   const handleCloseMissionModal = () => {
    setMissionModalOpen(false);
  };

  // 미션 완료하기 버튼 누르고 나서 api 호출 함수
  const handleMissionComplete = () => {
    setMissionModalOpen(false);
    setMissionComplete(true);  // 버튼을 클릭한 후 미션을 완료로 가정합니다.
  };


  // 모달을 닫는 함수입니다.
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
    setModalContent(null);
  };

  return (
    <s.Container>
      <s.ButtonTextWrapper>
        <s.TextWrapper>
          <s.TextsStyle>매일 하나씩</s.TextsStyle>
          <s.TextsStyle>모으는</s.TextsStyle>
          <s.TextsStyle>우표 컬렉션</s.TextsStyle>
        </s.TextWrapper>
        <s.MissionButton onClick={handleOpenMissionModal}>미션</s.MissionButton>
      </s.ButtonTextWrapper>
      
      <s.ButtonWrapper>
        {/* 각 우표 이미지를 매핑하여 버튼으로 표시합니다. */}
        {s.stampImages.map((image, index) => (
          <s.StampButton 
            key={index} 
            onClick={() => {
              const currentStatus = stampsStatus[index];
              currentStatus && currentStatus.status 
                ? handleOpenModal(index) 
                : alert("획득하지 않은 우표입니다.");
            }}
            stampImage={
              stampsStatus.length > 0 && !stampsStatus[index].status 
                ? disabledStamp 
                : image
            }
          ></s.StampButton>
        ))}
      </s.ButtonWrapper>

      {/* 우표 상세 정보를 보여주는 모달입니다. */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>

       {/* 오늘의 미션을 보여주는 모달 */}
    <Modal isOpen={isMissionModalOpen} onClose={() => setMissionModalOpen(false)}>
      <s.BackButton onClick={handleCloseMissionModal}>닫기</s.BackButton>
      <s.CenteredWrapper>
        <s.TextsStyle>오늘의 미션!</s.TextsStyle>
        <s.TextsStyle>어쩌고</s.TextsStyle>
        {/* 미션이 완료되지 않았다면 버튼을 비활성화합니다. */}
        <s.ModalButton 
          onClick={missionComplete ? handleMissionComplete : undefined}
          disabled={!missionComplete}
        >
          미션 완료하기!
        </s.ModalButton>
      </s.CenteredWrapper>
    </Modal>
    </s.Container>
  );
};

export default StampList;
