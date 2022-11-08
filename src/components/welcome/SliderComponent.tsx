interface ISliderComponentProps {
  imgPath: string;
  title: string;
  description: string;
}
const SliderComponent = (props: ISliderComponentProps) => {
  return (
    <div className="slider-component">
      <div className="mb-[10px] overflow-hidden">
        <img
          src={props.imgPath}
          alt={props.title}
          className="mx-auto max-h-[184px]"
        />
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default SliderComponent;
