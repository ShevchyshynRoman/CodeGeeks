import React from 'react';
import './Person.scss';
import cn from 'classnames';
import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

type Props = {
  imgUrl: string,
  name: string,
  offVideo?: boolean,
  offMicro?: boolean,
  isSpeak?: boolean,
  personId: number,
  getRandomImage: (id: number) => void,
};

export const Person: React.FC<Props> = ({
  imgUrl,
  name,
  offVideo,
  offMicro,
  isSpeak,
  getRandomImage,
  personId,
}) => {
  return (
    <div
      onClick={() => getRandomImage(personId)}
      onKeyPress={() => false}
      tabIndex={0}
      role="button"
      className={cn(
        'person',
        { 'person--speak': isSpeak },
      )}
    >
      <img
        className={cn(
          'person__photo',
          { 'person__photo--off-video': offVideo },
          { 'person__photo-you': name === 'You' },
        )}
        src={imgUrl}
        alt="person"
      />

      {isSpeak && (
        <GraphicEqIcon className="isSpeakIcon" />
      )}

      {offMicro && (
        <MicOffIcon className="microOffIcon" />
      )}

      <h3 className="person__name">
        {name}
      </h3>
    </div>
  );
};
