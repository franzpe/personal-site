import React, { Fragment } from 'react';

import EmailSvg from './EmailSvg';
import GithubSvg from './GithubSvg';
import LinkedinSvg from './LinkedinSvg';
import TwitterSvg from './TwitterSvg';

const linkedinUrl = 'https://linkedin.com/in/frantisek-pobocek-06819913b';
const twitterUrl = 'https://twitter.com/franzpeo';
const githubUrl = 'https://github.com/franzpe';
const mailToHref =
  'mailto:pobocekfrantisek@gmail.com?subject=enquiry from website&body=Hello Frantisek, ';

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
      window.location.href = mailToHref;
    }
  },
  {
    href: githubUrl,
    title: 'Github',
    content: (
      <Fragment>
        <GithubSvg /> <span style={{ verticalAlign: 'super' }}> - github.com</span>
      </Fragment>
    )
  },
  {
    href: linkedinUrl,
    title: 'Linkedin',
    content: (
      <Fragment>
        <LinkedinSvg /> <span style={{ verticalAlign: 'super' }}> - linkedin.com</span>
      </Fragment>
    )
  },
  {
    href: twitterUrl,
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
      window.location.href = mailToHref;
    }
  },
  { href: githubUrl, title: 'Github', content: <GithubSvg /> },
  {
    href: linkedinUrl,
    title: 'Linkedin',
    content: <LinkedinSvg />
  },
  {
    href: twitterUrl,
    title: 'Twitter',
    content: <TwitterSvg />
  }
];

export { homeSocials, aboutSocials };
