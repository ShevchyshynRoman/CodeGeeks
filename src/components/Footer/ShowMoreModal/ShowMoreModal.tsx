import React from 'react';
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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const iconSize = {
  width: '24px',
  height: '24px',
};

type Props = {
  setModalVisible: (toggle: boolean) => void,
};

export const ShowMoreModal: React.FC<Props> = () => {
  return (
    <div
      className="ShowMoreModal"
    >
      <ul className="list">
        <li className="list__item">
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
        </li>

        <li className="list__item">
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
        </li>

        <li className="list__item list__item--line" />

        <li className="list__item">
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
        </li>

        <li className="list__item">
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
        </li>

        <li className="list__item">
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
        </li>

        <li className="list__item">
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
        </li>

        <li className="list__item">
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
        </li>

        <li className="list__item list__item--line" />

        <li className="list__item">
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
        </li>

        <li className="list__item">
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
        </li>

        <li className="list__item">
          <RadioButtonCheckedOutlinedIcon
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
        </li>

        <li className="list__item">
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
        </li>
      </ul>
    </div>
  );
};
