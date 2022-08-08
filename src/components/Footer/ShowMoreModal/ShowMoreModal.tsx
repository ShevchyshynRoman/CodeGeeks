import React, { useState } from 'react';
import './ShowMoreModal.scss';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ListModal } from '../ListModal/ListModal';

const iconSize = {
  width: '24px',
  height: '24px',
};

type Props = {
  setModalVisible: (toggle: boolean) => void,
};

export const ShowMoreModal: React.FC<Props> = () => {
  const [showListModal, setShowListModal] = useState(false);
  const [listModalHeaderText, setListModalHeaderText] = useState('');

  const onListItemClick = (headerText: string) => {
    setListModalHeaderText(headerText);
    setShowListModal(true);
  };

  return (
    <div
      className="ShowMoreModal"
    >
      <ul className="list">
        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Дошка для конференцій')}
            onKeyDown={() => onListItemClick('Дошка для конференцій')}
          >
            <BorderColorOutlinedIcon
              style={iconSize}
              className="BorderColorOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Дошка для конференцій
              </span>
              <span
                className="list__item__text__description"
              >
                Відкрити файл Jam
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Записувати зустріч')}
            onKeyDown={() => onListItemClick('Записувати зустріч')}
          >
            <RadioButtonCheckedOutlinedIcon
              style={iconSize}
              className="RadioButtonCheckedOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Записувати зустріч
              </span>
            </p>
          </div>
        </li>

        <li className="list__item list__item--line" />

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Змінити макет')}
            onKeyDown={() => onListItemClick('Змінити макет')}
          >
            <DashboardOutlinedIcon
              style={iconSize}
              className="DashboardOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Змінити макет
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Повноекранний режим')}
            onKeyDown={() => onListItemClick('Повноекранний режим')}
          >
            <FullscreenOutlinedIcon
              style={iconSize}
              className="FullscreenOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Повноекранний режим
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Застосувати візуальні ефекти')}
            onKeyDown={() => onListItemClick('Застосувати візуальні ефекти')}
          >
            <AutoAwesomeIcon
              style={iconSize}
              className="AutoAwesomeIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Застосувати візуальні ефекти
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Увімкнути субтитри')}
            onKeyDown={() => onListItemClick('Увімкнути субтитри')}
          >
            <ClosedCaptionOffIcon
              style={iconSize}
              className="ClosedCaptionOffIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Увімкнути субтитри
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Використовувати телефон для передачі звуку')}
            onKeyDown={() => onListItemClick('Використовувати телефон для передачі звуку')}
          >
            <PhoneForwardedIcon
              style={iconSize}
              className="PhoneForwardedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Використовувати телефон для передачі звуку
              </span>
            </p>
          </div>
        </li>

        <li className="list__item list__item--line" />

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Повідомити про проблему')}
            onKeyDown={() => onListItemClick('Повідомити про проблему')}
          >
            <FeedbackOutlinedIcon
              style={iconSize}
              className="FeedbackOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Повідомити про проблему
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Повідомити про порушення')}
            onKeyDown={() => onListItemClick('Повідомити про порушення')}
          >
            <ReportOutlinedIcon
              style={iconSize}
              className="ReportOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Повідомити про порушення
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Вирішення проблем і довідка')}
            onKeyDown={() => onListItemClick('Вирішення проблем і довідка')}
          >
            <SearchIcon
              style={iconSize}
              className="RadioButtonCheckedOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Вирішення проблем і довідка
              </span>
            </p>
          </div>
        </li>

        <li>
          <div
            className="list__item"
            role="button"
            tabIndex={0}
            onClick={() => onListItemClick('Налаштування')}
            onKeyDown={() => onListItemClick('Налаштування')}
          >
            <SettingsOutlinedIcon
              style={iconSize}
              className="SettingsOutlinedIcon"
            />
            <p className="list__item__text">
              <span
                className="list__item__text__name"
              >
                Налаштування
              </span>
            </p>
          </div>
        </li>
      </ul>

      {showListModal && (
        <ListModal
          headerText={listModalHeaderText}
          showModal={setShowListModal}
        />
      )}
    </div>
  );
};
