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
        className={'max-h-[50px]'}
        src={`${router.basePath}/apple-touch-icon.png`}
        alt="Nextjs starter banner"
      />
    </div>
  );
};

export default WelcomeHeader;
