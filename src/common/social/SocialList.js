import React from 'react';

import EmailSvg from './EmailSvg';
import GithubSvg from './GithubSvg';
import LinkedinSvg from './LinkedinSvg';
import SocialLink from './SocialLink';

const socials = [
  {
    href: '',
    title: 'Mail',
    content: <EmailSvg />,
    onClickHandler: e => {
      e.preventDefault();
      window.location.href =
        'mailto:pobocekfrantisek@gmail.com?subject=enquiry from website&body=Hello Frantisek, ';
    }
  },
  { href: 'https://github.com/franzpe', title: 'Github', content: <GithubSvg /> },
  {
    href: 'https://linkedin.com/in/františek-poboček-06819913b',
    title: 'Linkedin',
    content: <LinkedinSvg />
  }
];

function SocialList() {
  return (
    <div>
      {socials.map((social, index) => (
        <SocialLink
          key={social.title}
          href={social.href}
          title={social.title}
          disableMargin={index === socials.length - 1}
          onClick={social.onClickHandler}
        >
          {social.content}
        </SocialLink>
      ))}
    </div>
  );
}

export default React.memo(SocialList);
