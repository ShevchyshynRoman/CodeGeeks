import React, { useState } from 'react';
import './VideoChat.scss';

import { Person } from './Person/Person';
import { getImgFromServer } from '../../api/api';

export const VideoChat = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      imgUrl: 'https://t3.ftcdn.net/jpg/02/20/62/06/360_F_220620690_pmuOtC0mEmv1pktHWJLmK0SGToQKyH2d.jpg',
      name: 'Gilian Garner',
    },
    {
      id: 2,
      imgUrl: 'https://media.istockphoto.com/photos/african-applicant-look-at-webcam-conference-calling-for-job-interview-picture-id1203044192?b=1&k=20&m=1203044192&s=170667a&w=0&h=iUucgmnIyLrhmTFe9trJGB39b_t-e8pMUqMEMApj6C0=',
      name: 'Joe Carlson',
    },
    {
      id: 3,
      imgUrl: 'https://media.istockphoto.com/photos/pleasant-girl-looking-at-camera-holding-video-call-with-parents-picture-id1203220290?k=20&m=1203220290&s=612x612&w=0&h=mTj36a2jltfrUQ_cdd29NbyfleR9ikRWUbvVp2pewsE=',
      name: 'Nina Dutyy',
    },
    {
      id: 4,
      isSpeak: true,
      imgUrl: 'https://media.istockphoto.com/photos/technology-makes-connecting-with-the-outside-world-so-much-easier-picture-id1254536871?k=20&m=1254536871&s=170667a&w=0&h=rF9kBDKl0u6YjpReghhQDsm2bBpoe9OxHdt41WCHSDc=',
      name: 'Jo Hall',
    },
    {
      id: 5,
      imgUrl: 'https://media.istockphoto.com/photos/happy-smiling-african-girl-looking-at-camera-making-video-call-picture-id1127950009?k=20&m=1127950009&s=612x612&w=0&h=hcFhIvCC4X7IJRkYpDM-yvwya6ECt8JjvJB7m4knlXE=',
      name: 'Mai Ohelli',
    },
    {
      id: 6,
      offVideo: true,
      offMicro: true,
      imgUrl: 'https://avatars.githubusercontent.com/u/438731?v=4',
      name: 'Jason Coleman',
    },
    {
      id: 7,
      imgUrl: 'https://us.123rf.com/450wm/fizkes/fizkes1907/fizkes190700126/126490146-smiling-african-american-business-woman-coach-teacher-hr-looking-at-camera-happy-black-lady-making-v.jpg?ver=6',
      name: 'Rosa Michelia',
    },
    {
      id: 8,
      imgUrl: 'https://media.istockphoto.com/photos/headshot-portrait-millennial-guy-sit-on-sofa-makes-video-call-picture-id1220790927?k=20&m=1220790927&s=612x612&w=0&h=UbCDyIO7d9GdFsYcmVNQcNrrIpH7sSVeCsQ0MEFVCPM=',
      name: 'Jad Rogers',
    },
    {
      id: 9,
      imgUrl: 'https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?k=20&m=1311084168&s=612x612&w=0&h=gclZozEGfK0eSUhKEE7RrUq8B5qDLvQTPrb0Vc-vEyI=',
      name: 'Lani Le',
    },
    {
      id: 10,
      imgUrl: 'https://media.istockphoto.com/photos/focused-young-african-american-male-speaker-recording-educational-picture-id1188929946?k=20&m=1188929946&s=612x612&w=0&h=Znd1p5JZPj7QvYup78XsF86ZpfLbsx6hf82ZVTGxqZY=',
      name: 'Hago Hovak',
    },
    {
      id: 11,
      imgUrl: 'https://media.istockphoto.com/photos/happy-teen-girl-waving-hand-saying-hello-looking-at-webcam-picture-id1126400356?k=20&m=1126400356&s=612x612&w=0&h=tpwnuQZlCqCzP5ARCUOsxgn5DND2PF2a28E66IinEnc=',
      name: 'Joe Carlson',
    },
    {
      id: 12,
      imgUrl: 'https://media.istockphoto.com/photos/young-man-waving-with-hand-on-video-call-at-home-office-picture-id1275842510?k=20&m=1275842510&s=612x612&w=0&h=RuCC7RjTQEZn6bzRbmmDmtmuKBW5LPCD8t4Gtv1IBuo=',
      name: 'You',
    },
  ]);

  const getRandomImage = async (id: number) => {
    try {
      const getImg = await getImgFromServer();

      const updatedPerson = [...persons];

      // eslint-disable-next-line no-restricted-syntax
      for (const person of updatedPerson) {
        if (person.id === id) {
          person.imgUrl = `http://localhost:3000/public/images/${getImg}`;
          break;
        }
      }

      setPersons(updatedPerson);
    } catch {
      alert('error');
    }
  };

  return (
    <div className="video-chat">
      {persons.map(person => (
        <Person
          key={person.id}
          personId={person.id}
          imgUrl={person.imgUrl}
          name={person.name}
          offVideo={person.offVideo}
          offMicro={person.offMicro}
          isSpeak={person.isSpeak}
          getRandomImage={getRandomImage}
        />
      ))}
    </div>
  );
};
