import type { UseFormRegisterReturn } from 'react-hook-form';
import type { FieldError } from 'react-hook-form/dist/types/errors';

import { onErrorBorderStyle, onNormalBorderStyle } from '@/styles/globalStyles';

interface CustomInputProps {
  name: string;
  value: string;
  inputType: string;
  errors?: FieldError;
  registerForm: UseFormRegisterReturn;
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <div className="mb-[10px]">
      <label htmlFor={props.value}>
        <span className="mb-[2px] block text-[12px] font-normal">
          {props.name}
        </span>

        <input
          id={props.value}
          type={props.inputType}
          className={props.errors ? onErrorBorderStyle : onNormalBorderStyle}
          {...props.registerForm}
        />
      </label>
      {props.errors ? (
        <p className="text-[12px] text-red-600">{props.errors.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomInput;
