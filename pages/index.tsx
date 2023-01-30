import type { NextPage } from 'next';
import Head from 'next/head';
import s from 'styles/Home.module.css';
import * as Layout from 'components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout.Wrapper>
      <Head>
        <title>DPInventive - Web App Development</title>
        <meta name="description" content="We make web apps" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout.Full>
        <div className={s.hero}>
          <Layout.FullContent>
            <h1 className={s.title}>We&apos;ll build your next Web App</h1>
          </Layout.FullContent>
        </div>
      </Layout.Full>

      <section>
        <h2 className={s.sectionTitle}>Web Development Services</h2>
        <div className={s.services}>
          <article className={s.service}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="50"
              height="50"
              className={s.serviceIcon}
            >
              <path d="M25 24.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM23.5 12h2a.499.499 0 1 1 0 1h-2a.499.499 0 1 1 0-1zm-3-2c-.822 0-1.5.678-1.5 1.5v14c0 .822.678 1.5 1.5 1.5h8c.822 0 1.5-.678 1.5-1.5v-14c0-.822-.678-1.5-1.5-1.5zm0 1h8c.286 0 .5.214.5.5v14c0 .286-.214.5-.5.5h-8a.488.488 0 0 1-.5-.5v-14c0-.286.214-.5.5-.5zM14 19.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM1.5 3C.678 3 0 3.678 0 4.5v16c0 .822.678 1.5 1.5 1.5H11v2H9.5a.499.499 0 1 0 0 1h8a.499.499 0 1 0 0-1H16v-2h1.5c.668 0 .656-1 0-1h-16a.488.488 0 0 1-.5-.5V18h16.5a.499.499 0 1 0 0-1H1V4.5c0-.286.214-.5.5-.5h24c.286 0 .5.214.5.5v4c0 .665 1 .657 1 0v-4c0-.822-.678-1.5-1.5-1.5zM12 22h3v2h-3z" />
            </svg>
            <h3 className={s.serviceTitle}>Responsive Web Applications</h3>
            <p>
              We build fully responsive, fast, and user-friendly products
              crafted for your users&apos; needs. Your web application will work
              for every screen size.
            </p>
          </article>
          <article className={s.service}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="50"
              height="50"
              className={s.serviceIcon}
            >
              <path d="M437.5 239.9c1-7.3 2.1-13.5 2.1-20.8 0-70.6-57.2-127.7-128-127.7-37.5 0-71.8 15.6-95.7 42.6-13.5-7.3-29.1-11.4-44.7-11.4-48.9 0-89.5 35.3-96.8 83.1C36 224.3 11 263.8 11 307.4c0 62.3 51 113.2 113.4 113.2h281.9c52 0 93.6-41.5 94.7-92.4 0-40.5-26-75.8-63.5-88.3zm-31.2 159.9H124.4c-51 0-92.6-41.5-92.6-92.4 0-37.4 21.8-70.6 56.2-85.1 3.1-1 6.2-4.2 6.2-8.3 3.1-40.5 35.4-70.6 75.9-70.6 15.6 0 29.1 4.2 43.7 10.4 4.2 3.1 10.4 2.1 13.5-2.1 19.8-26 51-41.5 84.3-41.5 59.3 0 107.2 47.8 107.2 106.9 0 8.3-1 17.6-3.1 26-2.8 9.2 4.2 12.5 7.3 13.5 33.3 7.3 56.2 36.3 56.2 70.6 0 40.4-32.3 72.6-72.9 72.6z" />
              <path d="M161.1 232.3c11.5 0 20.9 9.3 20.9 20.8 0 3.9 3.1 7 7 7s7-3.1 7-7c0-19.2-15.7-34.8-34.9-34.8-19.3 0-34.9 15.6-34.9 34.8s15.7 34.8 34.9 34.8c11.5 0 20.9 9.3 20.9 20.8s-9.4 20.8-20.9 20.8-20.9-9.3-20.9-20.8c0-3.9-3.1-7-7-7s-7 3.1-7 7c0 19.2 15.7 34.8 34.9 34.8 19.3 0 34.9-15.6 34.9-34.8S180.3 274 161.1 274c-11.5 0-20.9-9.3-20.9-20.8s9.4-20.9 20.9-20.9zM276 232.3c3.9 0 7-3.1 7-7s-3.1-7-7-7h-56.6c-3.9 0-7 3.1-7 7v111.4c0 3.9 3.1 7 7 7H276c3.9 0 7-3.1 7-7s-3.1-7-7-7h-49.6V288H276c3.9 0 7-3.1 7-7s-3.1-7-7-7h-49.6v-41.7H276zM338.7 218.3c-13 0-25.1 6.8-34.1 19.2-8.4 11.7-13.1 27.1-13.1 43.5s4.6 31.8 13.1 43.5c8.9 12.4 21 19.2 34.1 19.2s25.1-6.8 34.1-19.2c8.4-11.7 13.1-27.1 13.1-43.5s-4.6-31.8-13.1-43.5c-9-12.4-21.1-19.2-34.1-19.2zm0 111.3c-18.3 0-33.1-21.8-33.1-48.7 0-26.8 14.9-48.7 33.1-48.7 18.3 0 33.1 21.8 33.1 48.7 0 26.9-14.8 48.7-33.1 48.7z" />
            </svg>
            <h3 className={s.serviceTitle}>SEO-friendly</h3>
            <p>
              Get more targeted organic traffic from search engines. An SEO
              friendly website is easy for search engines to crawl and
              understand the structure and its content.
            </p>
          </article>
          <article className={s.service}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="50"
              height="50"
              className={s.serviceIcon}
            >
              <path d="m29.532 25.76-5.655-5.655.754-.754-.754-.754-2.261 2.261-3.771-3.77 4.53-4.532a5.579 5.579 0 0 0 1.882.324 5.562 5.562 0 0 0 3.954-1.637 5.569 5.569 0 0 0 1.178-6.174l-.311-.722-2.43 2.43-1.956.027.026-1.866 2.477-2.477-.72-.312a5.576 5.576 0 0 0-2.229-.461 5.552 5.552 0 0 0-3.952 1.637 5.56 5.56 0 0 0-1.311 5.84l-4.529 4.529-6.409-6.408.754-.754-4.145-4.146L2.39 4.647l4.147 4.147.753-.754 6.409 6.408-4.529 4.529a5.57 5.57 0 0 0-1.888-.326 5.558 5.558 0 0 0-3.953 1.637 5.565 5.565 0 0 0-1.176 6.181l.312.72 2.477-2.477 1.865-.025-.027 1.956-2.43 2.43.722.311a5.59 5.59 0 0 0 2.221.458 5.551 5.551 0 0 0 3.952-1.636 5.565 5.565 0 0 0 1.314-5.833l4.532-4.532 3.771 3.769-2.263 2.263.754.754.754-.754 5.654 5.654c.503.504 1.174.781 1.885.781s1.381-.277 1.885-.781a2.668 2.668 0 0 0 0-3.769zM3.899 4.648l.754-.753 2.638 2.638-.754.754-2.639-2.639zm7.549 17.808a4.513 4.513 0 0 1-.955 4.999 4.491 4.491 0 0 1-3.198 1.324c-.347 0-.689-.039-1.021-.116l1.569-1.569.047-3.485-3.394.046-1.619 1.619a4.497 4.497 0 0 1 1.208-4.229 4.495 4.495 0 0 1 3.199-1.325c.626 0 1.233.125 1.806.373l.333.144L20.242 9.418l-.144-.333a4.505 4.505 0 0 1 .952-5.004 4.494 4.494 0 0 1 3.198-1.325c.35 0 .695.04 1.03.117L23.66 4.491l-.047 3.394 3.485-.047 1.57-1.57a4.504 4.504 0 0 1-1.209 4.221 4.499 4.499 0 0 1-3.2 1.325c-.624 0-1.23-.125-1.801-.371l-.332-.143-10.821 10.823.143.332zm17.331 6.319c-.302.302-.704.469-1.131.469s-.829-.167-1.131-.469l-5.654-5.654 2.262-2.262 5.655 5.655a1.6 1.6 0 0 1 .001 2.261z" />
            </svg>
            <h3 className={s.serviceTitle}>Best practices & tools</h3>
            <p>
              These tools include the latest and greatest industry standards,
              such as <a href="https://reactjs.org/">React</a>,{' '}
              <a href="https://www.typescriptlang.org/">Typescript</a>,{' '}
              <a href="https://nextjs.org/">Next.js</a>.
            </p>
          </article>
        </div>
      </section>
    </Layout.Wrapper>
  );
};

export default Home;
