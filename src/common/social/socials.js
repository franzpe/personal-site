import React, { Fragment } from 'react';

import EmailSvg from './EmailSvg';
import GithubSvg from './GithubSvg';
import LinkedinSvg from './LinkedinSvg';
import TwitterSvg from './TwitterSvg';

const aboutSocials = [
  {
    href: '',
    title: 'Mail',
    content: (
      <Fragment>
        <EmailSvg /> <span style={{ verticalAlign: 'super' }}> - pobocekfrantisek@gmail.com</span>
      </Fragment>
    ),
    onClick: e => {
      e.preventDefault();
      window.location.href =
        'mailto:pobocekfrantisek@gmail.com?subject=enquiry from website&body=Hello Frantisek, ';
    }
  },
  {
    href: 'https://github.com/franzpe',
    title: 'Github',
    content: (
      <Fragment>
        <GithubSvg /> <span style={{ verticalAlign: 'super' }}> - github.com</span>
      </Fragment>
    )
  },
  {
    href: 'https://linkedin.com/in/františek-poboček-06819913b',
    title: 'Linkedin',
    content: (
      <Fragment>
        <LinkedinSvg /> <span style={{ verticalAlign: 'super' }}> - linkedin.com</span>
      </Fragment>
    )
  },
  {
    href: 'https://twitter.com/franzpeo',
    title: 'Twitter',
    content: (
      <Fragment>
        <TwitterSvg /> <span style={{ verticalAlign: 'super' }}> - twitter.com</span>
      </Fragment>
    )
  }
];

const homeSocials = [
  {
    href: '',
    title: 'Mail',
    content: <EmailSvg />,
    onClick: e => {
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
  },
  {
    href: 'https://twitter.com/franzpeo',
    title: 'Twitter',
    content: <TwitterSvg />
  }
];

export { homeSocials, aboutSocials };
