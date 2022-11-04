interface CustomButtonProps {
  value: string;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <input
      className="mx-auto my-[15px] block h-[31px] w-[219px] rounded-2xl bg-[#00AAAD] text-[14px] font-semibold text-white"
      type="submit"
      value={props.value}
    />
  );
};

export default CustomButton;
