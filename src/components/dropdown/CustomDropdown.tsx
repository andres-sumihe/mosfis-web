import type { UseFormRegisterReturn } from 'react-hook-form';
import type { FieldError } from 'react-hook-form/dist/types/errors';

import { onErrorBorderStyle, onNormalBorderStyle } from '@/styles/globalStyles';

interface CostumDropdownProps {
  name: string;
  value: string;
  list: any;
  register: UseFormRegisterReturn;
  errors?: FieldError;
}

const CustomDropdown = (props: CostumDropdownProps) => {
  return (
    <div className="mb-[10px]">
      <label htmlFor={props.value}>
        <span className="mb-[2px] block text-[12px] font-normal">
          {props.name}
        </span>
        <select
          id={props.value}
          className={props.errors ? onErrorBorderStyle : onNormalBorderStyle}
          {...props.register}
        >
          <option value=""></option>

          {props.list.map((kategori: any) => {
            return (
              <option key={kategori.value} value={kategori.value}>
                {kategori.name}
              </option>
            );
          })}
        </select>
      </label>
      {props.errors ? (
        <p className="text-[12px] text-red-600">{props.errors?.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomDropdown;
