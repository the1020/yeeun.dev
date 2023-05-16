import Box from "../components/Box";
import Container from "../components/Container";
import MusicPlayer from "../components/MusicPlayer";
import Typing from "../components/Typing";
import Image from "next/image";
import sample from "../public/home/ezgif-5-4ac8e34667.gif";
import loveDive from "../public/home/love-dive.gif";
import myWish from "../public/home/my-wish.jpeg";
import gosimPerson4 from "../public/home/gosimperson-4.jpeg";

export default function Home() {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home/love-dive.gif`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          {/* <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            내 블로그 메인
          </span> */}
        </div>
      </div>
    </Container>
  );
}
