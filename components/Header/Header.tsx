import Image from 'next/image';
import Link from 'next/link';
import * as Layout from 'components/Layout/Layout';
import s from './Header.module.css';

type TProps = {
  className?: string;
};

export const Header = ({ className }: TProps): JSX.Element => (
  <header className={`${s.header} ${className || ''}`}>
    <Layout.FullContent className={s.headerContent}>
      <Link href="/" passHref>
        <a>
          <Image
            src="/dpinventive_logo.svg"
            width="242"
            height="30"
            alt="DPInventive"
          />
        </a>
      </Link>
    </Layout.FullContent>
  </header>
);
