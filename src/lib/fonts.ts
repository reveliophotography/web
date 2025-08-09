
import { Explora, Lato } from 'next/font/google';

export const explora = Explora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-explora',
  weight: '400',
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['300', '400', '700']
});
