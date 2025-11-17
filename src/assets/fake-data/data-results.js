const AptiQuestImg = 'images2/resultimg/AptiQuest.webp';
const EducathonImg = '/images2/new/educathonPoster.webp'

const logo = '/images2/new/newlogo.webp';

const results = [
  {
    id: 1,
    img: AptiQuestImg,
    type: 1,
    title: 'AptiQuest',
    avt: logo,
    name: 'Team Samarth',
    tag: '@TechTeam',
    winners: [
      { position: '1st', name: 'Taha Abdullah (CSBS)' },
      { position: '2nd', name: 'Rupayam Dey (BCA)' },
      { position: '3rd', name: 'Aryan Shukla (CSE - IoT)' },
      { position: '4th', name: 'Harsh Kumar Shaw (CSE)' },
      { position: '5th', name: 'Srijeet Chatterjee (CSE)' },
      { position: '6th', name: 'MD Shakib (AIML)' },
    ],
  },
  {
    id: 2,
    type: 2,
    img: EducathonImg,
    title: 'Educathon 2.0',
    avt: logo,
    name: 'Team Samarth',
    tag: '@TechTeam',
    winners: [
    {
      position: "1st",
      name: "🥇 localhost",
      college: "Amrita Vishwa Vidyapeetham, Andhra Pradesh",
    },
    {
      position: "2nd",
      name: "🥈 KonisBerg",
      college: "Jadavpur University, Kolkata",
    },
    {
      position: "3rd",
      name: "🥉 Chakravyuh",
      college: "Adamas University, Kolkata",
    },
    {
      position: "Special Mention",
      name: "pnpm_build",
      college: "Techno Main Salt Lake, Kolkata",
    },
    {
      position: "Special Mention",
      name: "SheCodes",
      college: "Heritage Institute of Technology, Kolkata",
    },
    ],
  },
];

export default results;
