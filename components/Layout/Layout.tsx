import { ReactNode } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import s from './Layout.module.css';

type TProps = {
  children: ReactNode;
  className?: string;
};

export const Wrapper = ({ children }: TProps): JSX.Element => (
  <div className={s.container}>
    <Header className={s.wrapper} />
    <main className={`${s.wrapper} ${s.main}`}>{children}</main>
    <Footer className={s.wrapper} />
  </div>
);

export const Full = ({ children }: TProps): JSX.Element => (
  <div className={s.full}>{children}</div>
);

export const FullContent = ({ children, className }: TProps): JSX.Element => (
  <div className={`${s.fullContent} ${className || ''}`}>{children}</div>
);
