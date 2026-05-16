import React, { FC } from 'react';
import { socialLinks } from '@/data/socialLinks';

const SocialMediaLinks: FC = () => {
  return (
    <div className="fixed top-0 mx-auto text-center p-2 social-media-icons">
      <ul className="social-media-icons-list">
        {socialLinks.map((item) => (
          <li key={item.title}>
            <a href={item.url} target="_blank" title={item.title}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
