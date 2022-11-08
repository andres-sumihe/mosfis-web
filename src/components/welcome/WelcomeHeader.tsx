import router from 'next/router';

interface IWelcomeHeaderProps {
  display: Boolean;
}
const WelcomeHeader = (props: IWelcomeHeaderProps) => {
  return (
    <div
      className={`custom-animation ${
        props.display ? 'fade-in' : 'fade-out'
      } flex h-[20vh] items-center justify-center`}
    >
      <img
        className="mb-[50px] mt-[100px] w-full max-w-[176px]"
        src={`${router.basePath}/assets/images/logo-tulisan.png`}
        alt="Nextjs starter banner"
      />
    </div>
  );
};

export default WelcomeHeader;
