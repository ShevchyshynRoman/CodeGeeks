import React from 'react';
import './Footer.scss';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CallEndIcon from '@mui/icons-material/CallEnd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const centralIconSize = {
  width: '40px',
  height: '40px',
};

const rightIconSize = {
  width: '48px',
  height: '48px',
};

const callEndIconSize = {
  width: '56px',
  height: '40px',
};

export const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__title">
        Team meeting
      </h1>

      <div className="footer__central-icons">
        <KeyboardVoiceIcon
          style={centralIconSize}
          className="centralIconStyle"
        />

        <VideocamOutlinedIcon
          style={centralIconSize}
          className="centralIconStyle"
        />

        <PanToolOutlinedIcon
          style={centralIconSize}
          className="centralIconStyle"
        />

        <PresentToAllIcon
          style={centralIconSize}
          className="centralIconStyle"
        />

        <MoreVertIcon
          style={centralIconSize}
          className="centralIconStyle"
        />

        <CallEndIcon
          style={callEndIconSize}
          className="CallEndIcon"
        />
      </div>

      <div className="footer__right-icons">
        <InfoOutlinedIcon
          style={rightIconSize}
          className="RightIconStyle"
        />

        <div className="PeopleAltOutlinedIcon-container">
          <div className="PeopleAltOutlinedIcon-container__ppl-count">12</div>
          <PeopleAltOutlinedIcon
            style={rightIconSize}
            className="RightIconStyle"
          />
        </div>

        <ChatOutlinedIcon
          style={rightIconSize}
          className="RightIconStyle"
        />

        <CategoryOutlinedIcon
          style={rightIconSize}
          className="RightIconStyle"
        />
      </div>
    </footer>
  );
};
