interface IDotsIndicatorProps {
  index: Number;
}
const DotsIndicator = (props: IDotsIndicatorProps) => {
  return (
    <div className="mb-4 h-fit">
      <div className="slider__dots">
        <a href="#" className="slider__indicator"></a>
        <a
          href="#"
          className={`slider__dot ${props.index === 0 ? 'active' : ''}`}
        ></a>
        <a
          href="#"
          className={`slider__dot ${props.index === 1 ? 'active' : ''}`}
        ></a>
        <a
          href="#"
          className={`slider__dot ${props.index === 2 ? 'active' : ''}`}
        ></a>
        <a
          href="#"
          className={`slider__dot ${props.index === 3 ? 'active' : ''}`}
        ></a>
        <a
          href="#"
          className={`slider__dot ${props.index === 4 ? 'active' : ''}`}
        ></a>
      </div>
    </div>
  );
};
export default DotsIndicator;
