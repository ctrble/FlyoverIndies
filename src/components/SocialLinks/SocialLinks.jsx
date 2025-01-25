import React from 'react';
import {
  SiAnchor,
  SiDiscord,
  SiInstagram,
  SiItchDotIo,
  SiGithub,
  SiBandcamp,
  SiGooglecalendar,
} from 'react-icons/si';

import SiteLink from 'src/components/global/SiteLink';

import styles from './SocialLinks.module.scss';

const SocialLinks = () => (
  <div className={styles.social}>
    <SiteLink className={styles.social__link} href="https://discord.gg/8JdcrkR">
      <SiDiscord title="Discord" />
    </SiteLink>
    <SiteLink
      className={styles.social__link}
      href="https://flyoverindies.itch.io/"
    >
      <SiItchDotIo title="Itch.io" />
    </SiteLink>
    <SiteLink
      className={styles.social__link}
      href="https://github.com/FlyoverIndies"
    >
      <SiGithub title="GitHub" />
    </SiteLink>
    <SiteLink
      className={styles.social__link}
      href="https://flyoverindies.bandcamp.com/releases"
    >
      <SiBandcamp title="Bandcamp" />
    </SiteLink>
    <SiteLink
      className={styles.social__link}
      href="https://anchor.fm/flyover-indies"
    >
      <SiAnchor title="Anchor" />
    </SiteLink>
    <SiteLink
      className={styles.social__link}
      href="https://www.instagram.com/flyoverindies"
    >
      <SiInstagram title="Instagram" />
    </SiteLink>
    <SiteLink
      className={styles.social__link}
      href="https://calendar.google.com/calendar/u/0?cid=MW8zZnJnc2pvOGpzZmdyZXVxOGQ4bnE5ajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
    >
      <SiGooglecalendar title="Google Calendar" />
    </SiteLink>
  </div>
);

export default SocialLinks;
