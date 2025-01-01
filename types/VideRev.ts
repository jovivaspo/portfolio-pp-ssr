import { CSSProperties, ReactNode } from 'react';

export interface VideoRevI {
  thumbnail: string;
  component: () => ReactNode;
  style?: CSSProperties;
  padding?: string;
  title?: string;
  subTitle?: string;
}
