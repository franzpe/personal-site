import React from 'react';
import Helmet from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <title>Frantisek Pobocek - Web Application Developer</title>
      <meta
        name="description"
        content="Are you looking for new web site, web application or consulting? You are in the right place. I develop great user experience web apps in React."
      />
      <meta
        name="keywords"
        content="Website, Web Application, React, Frontend, Fullstack, Web Developer, IT"
      />
      <meta name="og:url" content={window.location.origin} />
      <meta
        name="og:description"
        content="Are you looking for new web site, web application or consulting? You are in the right place. I develop great user experience web apps in React."
      />
    </Helmet>
  );
}

export default Head;
