import React from 'react';

import classes from 'common/Post.module.scss';
import localization from '../_utils/localization';

function Policy() {
  return (
    <main className={classes.post}>
      <article>
        <h2 className={classes.title}>{localization.privacyHeading}</h2>
        <div className={classes.content}>
          <h4 className={classes.subtitle}>{localization.privacyWhoHeading}</h4>
          <p>{localization.formatString(localization.privacyWhoCont1, window.location.origin)}</p>
          <p>{localization.privacyWhoCont2}</p>
          <h4 className={classes.subtitle}>{localization.privacyDataStoreHeading}</h4>
          <p>{localization.privacyDataStoreContent}</p>
          <h4 className={classes.subtitle}>{localization.privacyCookiesHeading}</h4>
          <p>{localization.privacyCookiesContent}</p>
          <h4 className={classes.subtitle}>{localization.privacySafeHeading}</h4>
          <p>{localization.privacySafeContent}</p>
          <h4 className={classes.subtitle}>{localization.privacyRightsHeading}</h4>
          <p>{localization.privacyRightsContent1}</p>
          <ul>
            {localization.privacyRightsList.map(right => (
              <li>{right}</li>
            ))}
          </ul>
          <p>{localization.privacyRightsContent2}</p>
          <h4 className={classes.subtitle}>{localization.privacyThirdPartyHeading}</h4>
          <p>{localization.privacyThirdPartyContent}</p>
          <p>{localization.privacyValid}</p>
        </div>
      </article>
    </main>
  );
}

export default Policy;
