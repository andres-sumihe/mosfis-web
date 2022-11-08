import type { UseFormRegisterReturn } from 'react-hook-form';
import type { FieldError } from 'react-hook-form/dist/types/errors';

import { errorBox } from '../../styles/registerStyles';

interface CheckboxAgreeTermsProps {
  errors?: FieldError;
  staticText: string;
  clickableText: string;
  registerForm: UseFormRegisterReturn;
}

const CheckboxAgreeTerms = (props: CheckboxAgreeTermsProps) => {
  return (
    <div>
      {props.errors ? (
        <div className={errorBox}>
          <p>{props.errors.message}</p>
        </div>
      ) : (
        <></>
      )}

      <div className="mt-[10px] flex items-center justify-center">
        <input
          type="checkbox"
          className="mr-[10px] h-[17px] w-[17px] accent-[#00AAAD] "
          {...props.registerForm}
        ></input>
        <p className="text-[12px] font-normal">
          {props.staticText}
          <span className="text-[#00AAAD]">{props.clickableText}</span>
        </p>
      </div>
    </div>
  );
};

export default CheckboxAgreeTerms;
