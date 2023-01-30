import * as Layout from 'components/Layout/Layout';
import s from './Footer.module.css';

type TProps = {
  className?: string;
};

export const Footer = ({ className }: TProps): JSX.Element => (
  <footer className={`${s.footer} ${className || ''}`}>
    <Layout.FullContent>&copy; 2023 DPInventive</Layout.FullContent>
  </footer>
);
