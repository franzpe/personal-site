import React from 'react';
import Helmet from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <title>Frantisek Pobocek - Web Application Developer</title>
      <meta
        property="description"
        content="Are you looking for new web site, web application or consulting? You are in the right place. I develop great user experience web apps in React."
      />
      <meta
        property="keywords"
        content="Website, Web Application, React, Frontend, Fullstack, Web Developer, IT"
      />
      <meta property="og:image" content="https://frantisekpobocek.com/preview.png" />
      <meta property="og:url" content="https://frantisekpobocek.com" />
      <meta
        property="og:description"
        content="Are you looking for new web site, web application or consulting? You are in the right place. I develop great user experience web apps in React."
      />
    </Helmet>
  );
}

export default Head;
