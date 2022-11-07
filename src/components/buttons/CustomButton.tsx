interface CustomButtonProps {
  value: string;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <input
      className="mx-auto my-[4px] block w-full max-w-[219px] rounded-2xl bg-[#00AAAD] py-[6px] text-[14px] font-semibold text-white"
      type="submit"
      value={props.value}
    />
  );
};

export default CustomButton;
