import ImgBox from "components/common/img";
import { useMediaQuery } from "react-responsive";
import { CenterFlex } from "styles/globals";
import { BannerWrap, MobileBanner } from "./styles";

export const Banner = () => {
  const isMobileView = useMediaQuery({ maxWidth: 780 });
  return isMobileView ? <Mobile /> : <Desktop />;
};

export default Banner;

const Desktop = () => {
  return (
    <BannerWrap className="banner-desktop">
      <div className="logo">
        <ImgBox
          src="https://res.cloudinary.com/drntjojig/image/upload/v1667442039/logo.svg"
          alt=""
          width={74}
          height={80}
        />
      </div>
      <div className="title">
        <CenterFlex className="main">
          <span>Zecrey Wallet</span>
          <div className="beta">
            <ImgBox
              src="https://res.cloudinary.com/drntjojig/image/upload/v1667442285/BETA.svg"
              alt=""
              width={25}
              height={8}
            />
          </div>
        </CenterFlex>
        <div className="sub">Download for Mobile/Extension</div>
      </div>
    </BannerWrap>
  );
};

const Mobile = () => {
  return (
    <MobileBanner className="banner-mobile">
      <ImgBox
        src="https://res.cloudinary.com/drntjojig/image/upload/v1667443048/logo-icon.svg"
        alt=""
      />
      <div className="text">Zecrey Mobile now available!</div>
      <button>Check</button>
    </MobileBanner>
  );
};
