import React from 'react';
import './ListModal.scss';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  headerText: string;
  showModal: (toggle: boolean) => void;
};

export const ListModal: React.FC<Props> = ({
  headerText,
  showModal,
}) => {
  return (
    <div className="ListModal">
      <header className="ListModal__header">
        <div className="ListModal__header__text">
          {headerText}
        </div>
        <div
          className="ListModal__header__button"
          role="button"
          tabIndex={0}
          onClick={() => showModal(false)}
          onKeyDown={() => showModal(false)}
        >
          <CloseIcon />
        </div>
      </header>
    </div>
  );
};
