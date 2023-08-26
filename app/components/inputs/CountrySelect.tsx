'use client';

import ReactCountryFlag from "react-country-flag";
import useCountries from '../../hooks/useCountries';
import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const { getAll } = useCountries();

  return ( 
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
          <ReactCountryFlag
            className="w-[1em] h-[1em]"
            countryCode={option.value}
            svg
            aria-label={option.label}
          />
            <div>
              {option.label}, 
              <span className="text-neutral-500 ml-1"> {option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "#636364",
            primary25: "#ffe4e5",
          }
        })}
      />
    </div>
   );
}
 
export default CountrySelect;