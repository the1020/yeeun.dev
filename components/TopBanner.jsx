// import { XMarkIcon } from "@heroicons/react/20/solid";

const TopBanner = () => {
  return (
    <div
      className={`bg-black-rgba bg-gradient-radial bg-[length:10px_10px] bg-position-ex shadow mb-1`}
    >
      <div className="relative isolate flex flex-col items-center gap-x-6 overflow-hidden bg-slate-800 px-6 py-2.5 sm:px-3.5 before:flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold text-white">
              🚧 블로그 이전 중입니다... 🚧
            </strong>
          </p>

          <a
            href="https://the1020.github.io/"
            className="flex-none rounded-full bg-slate-200 px-3.5 py-1 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            기존 블로그로 이동하기 <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
