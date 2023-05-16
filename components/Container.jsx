import Head from "next/head";
import Nav from "./Nav";
import TopBanner from "./TopBanner";

const Container = (props) => {
  return (
    <>
      <TopBanner />
      <div className={`w-full flex flex-col items-center p-3`}>
        <Head>
          <title>내 블로그</title>
        </Head>

        <header
          className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
        >
          <div className={`flex flex-row items-center`}>
            <span className={`mx-2 font-extrabold text-lg`}>yeeun</span>
          </div>
          <Nav />
        </header>
        <main className={`w-full max-w-3xl`}>{props.children}</main>
      </div>
    </>
  );
};

export default Container;
