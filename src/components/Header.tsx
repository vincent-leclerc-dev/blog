const Header = () => {
  return (
    <header className="h-[492px] w-[1440px] bg-gray-100">
      <div className="relative h-[500px] w-[1440px] bg-[url(/background.png)] bg-[100%_100%]">
        <div className="absolute left-[190px] top-[83px] h-[406px] w-[1060px]">
          <div className="absolute left-[257px] top-0 h-[406px] w-[803px]">
            <img
              className="absolute left-[470px] top-0 h-[333px] w-[333px] object-cover"
              alt="Image"
              src="/image.png"
            />
            <div className="absolute left-0 top-[256px] inline-flex items-center justify-center gap-[120px] bg-white px-[60px] py-[30px] shadow-[0px_20px_60px_#2664ca40]">
              <a
                href="/#frontend"
                className="relative inline-flex h-[90px] flex-[0_0_auto] flex-col items-center justify-between"
              >
                <img
                  className="relative h-[45px] w-[45px]"
                  alt="Icon"
                  src="/icon-3.svg"
                />
                <div className="relative w-fit whitespace-nowrap text-center text-[18px] font-semibold leading-[normal] tracking-[1.08px] text-blue [font-family:'Roboto',Helvetica]">
                  Frontend
                </div>
              </a>
              <a
                href="/#backend"
                className="relative inline-flex h-[90px] flex-[0_0_auto] flex-col items-center justify-between"
              >
                <img
                  className="relative h-[35.43px] w-[45px]"
                  alt="Icon"
                  src="/icon-2.svg"
                />
                <div className="relative w-fit whitespace-nowrap text-center text-[18px] font-semibold leading-[normal] tracking-[1.08px] text-blue [font-family:'Roboto',Helvetica]">
                  Backend
                </div>
              </a>
              <a
                href="/#ops"
                className="relative inline-flex h-[90px] flex-[0_0_auto] flex-col items-center justify-between"
              >
                <img
                  className="relative h-[45px] w-[45px]"
                  alt="Icon"
                  src="/icon-1.svg"
                />
                <div className="relative w-fit whitespace-nowrap text-center text-[18px] font-bold leading-[normal] tracking-[1.08px] text-blue [font-family:'Roboto',Helvetica]">
                  Ops
                </div>
              </a>
            </div>
          </div>
          <div className="absolute left-0 top-[56px] flex w-[540px] flex-col items-center gap-[10px]">
            <div className="relative mt-[-1.00px] h-[74px] w-[537px] text-center text-[48px] font-semibold leading-[normal] tracking-[2.88px] text-[#ffffff] [font-family:'Roboto',Helvetica]">
              VINCENT LECLERC
            </div>
            <p className="relative h-[48px] w-[531px] text-center text-[36px] font-medium leading-[normal] tracking-[2.16px] text-transparent [font-family:'Roboto',Helvetica]">
              <span className="text-[#ffffff]">Développeur </span>
              <span className="text-[#3c84fb]">full stack</span>
            </p>
          </div>
        </div>
        <div className="absolute left-[190px] top-[30px] flex w-[1060px] items-center justify-between">
          <a href="/">
            <img
              className="relative h-[48px] w-[48px]"
              alt="Logo v holo"
              src="/logo-v-48-48-holo-black-1.svg"
            />
          </a>
          <div className="relative inline-flex flex-[0_0_auto] items-center gap-[30px]">
            <div className="relative inline-flex flex-[0_0_auto] items-start gap-[30px]">
              <a
                href="/#about"
                className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-[16px] font-semibold leading-[normal] tracking-[0.96px] text-[#ffffff] [font-family:'Roboto',Helvetica]"
              >
                A PROPOS
              </a>
              <a
                href="/#projects"
                className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center text-[16px] font-semibold leading-[normal] tracking-[0.96px] text-[#ffffff] [font-family:'Roboto',Helvetica]"
              >
                PROJETS
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
