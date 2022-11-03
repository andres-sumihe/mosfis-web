type IDefaultButtonProps = {
  name: String;
  type?: String;
};

const DefaultButton = (props: IDefaultButtonProps) => {
  return (
    <a href="#" className={`btn ${props.type || 'default'}`}>
      <span>{props.name}</span>
    </a>
  );
};

export default DefaultButton;
