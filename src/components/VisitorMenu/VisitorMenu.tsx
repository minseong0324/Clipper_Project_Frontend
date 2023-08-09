import React, { useEffect } from 'react';
import {s} from "./style";

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
}

const VisitorMenu: React.FC<MenuProps> = ({ onServiceDescription }) => { 
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <s.Wrapper>
    <s.SunWrapper>
    <s.SunButton onClick={handleMenuToggle} />
    {isOpen &&
      Array.from({ length: 70 }, (_, i) => (
        <s.SunRay
            key={i}
            style={{
                transform: `rotate(${-5 + i}deg)`,
                transformOrigin: 'top',
            }}
            isActive={isOpen}
        />
    ))
    }

      {isOpen && (
        <>
        <s.MenuWrapper>
        <s.StyledLinkContainer isActive={isOpen}>
          <s.StyledLink to="/">로그아웃</s.StyledLink>
          </s.StyledLinkContainer>
          <s.Break />
          <s.MenuItem onClick={onServiceDescription} isActive={isOpen}>이용안내</s.MenuItem>
        </s.MenuWrapper>
        </>
      )}
    </s.SunWrapper>
    </s.Wrapper>
  );
};

export default VisitorMenu;
