interface CustomButtonProps {
  title: string;
  href: string;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <a
      className="mx-auto my-[4px] block w-full max-w-[219px] rounded-2xl bg-[#00AAAD] py-[6px] text-center text-[14px] font-semibold text-white"
      href={props.href}
    >
      {props.title}
    </a>
  );
};

export default CustomButton;
