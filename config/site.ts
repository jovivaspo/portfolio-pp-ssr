import { SiteConfig } from '../models/config/site';

export const siteConfig: SiteConfig = {
  title: {
    default: 'Pablo Pocostales | Professional Photographer & Videographer',
    template: '%s | Pablo Pocostales',
  },
  description:
    'Explore the exciting world of Pablo Pocostales through his portfolio. This passionate audiovisual communicator, hailing from Badajoz, Spain, has built his career with a solid academic foundation and unwavering determination. From his early days in university television to his role as a photographer, motion graphic designer, video editor, filmmaker, and multimedia designer at Deloitte Luxembourg, Pablo has demonstrated his versatility and ability to adapt to different environments. With a deep passion for imagery and sound, his portfolio is a window into a journey of continuous growth and limitless opportunities. Discover his story and his talent today',
  keywords: ['photographer', 'videographer', 'Luxembourg', 'professional photography', 'commercial video', 'event photography'],
  creator: 'Pablo Pocostales',
  openGraph: {
    title: 'Pablo Pocostales | Professional Photographer & Videographer',
    description: 'Professional photographer and videographer based in Luxembourg, specializing in commercial, event, and creative photography and videography.',
    url: 'https://pablopocostales.com',
    siteName: 'Pablo Pocostales',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'My Work',
      href: '/dfasdf',
      children: [
        { label: 'Videography', href: '/videography' },
        {
          label: 'Photography',
          href: '/photography',
        },
        {
          label: 'Designs',
          href: '/designs',
        },
        {
          label: 'Feat/Colab',
          href: '/colab',
        },
      ],
    },
    {
      label: 'Who Am I',
      href: '/about',
    },

    {
      label: 'My gear',
      href: 'https://kit.co/pablopocostales/my-filming-equipment',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],

  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
