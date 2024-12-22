export type SiteConfig = {
  title: {
    default: string;
    template: string;
  };
  description: string;
  links: SiteLinks;
  keywords: string[];
  creator: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
  };
  verification: {
    google: string;
  };
  navItems: NavItem[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type NavItemWithChildren = NavItem & {
  children: NavItem[];
};

export type SiteLinks = {
  [key: string]: string;
};
