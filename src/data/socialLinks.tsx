import { FaGithub, FaInstagram, FaUnsplash, FaLinkedin } from 'react-icons/fa';

export interface SocialMediaLink {
  title: string;
  url: string;
  icon: React.ReactElement;
}

export const socialLinks: SocialMediaLink[] = [
  { title: 'GitHub', url: 'https://github.com/gen035', icon: <FaGithub /> },
  { title: 'Instagram', url: 'https://www.instagram.com/gen035/', icon: <FaInstagram /> },
  { title: 'Unsplash', url: 'https://unsplash.com/@gen035', icon: <FaUnsplash /> },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/gen035/', icon: <FaLinkedin /> },
];
