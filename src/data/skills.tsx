import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaAngular, FaVuejs } from 'react-icons/fa';

export interface Skill {
  name: string;
  icon: React.ReactElement;
}

export const skillsData: Skill[] = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Sass', icon: <FaSass /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Vue', icon: <FaVuejs /> },
];
