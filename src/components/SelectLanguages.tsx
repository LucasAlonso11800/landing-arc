'use client'; 

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import Image from "next/image";
import Select from "react-select";
import { getClientLocale } from "@/helpers/getClientLocale";

type Option = {
    value: string,
    label: string
}
export default function SelectLanguages() {
  const locale = getClientLocale();
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (!show) setShow(true);
  }, [show])
  
  const { push } = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const options: Option[] = [{ value: 'en-US', label: 'EN' }, { value:'es-ES', label: 'ES' }];
  const selectedOption = options.find((o) => o.value === locale);

  const handleChange = (option: Option) => {
    const route = pathname.replace(`${params.locale}`, option.value);
    push(route);
  };

  if (!show) return null;

  return (
    <Select
      instanceId="select-language"
      isClearable={false}
      isSearchable={false}
      options={options}
      value={selectedOption}
      onChange={(newValue) => handleChange(newValue as Option)}
      classNames={{
        container: () => '!w-[48px] ml-4',
        control: (state) => "!mt-1 !h-8 !rounded-xl !cursor-pointer !w-[48px] !bg-transparent !border-none !ring-0 text-white font-semibold",
        valueContainer: (state) => "!flex !items-center !justify-between !w-[48px] !p-0",
        indicatorsContainer: (state) => "!hidden",
      }}
      menuPlacement="top"
      components={{
        IndicatorSeparator: null,
        SingleValue: ({data}) => (
          <div className="flex justify-between items-center w-full h-8 rounded-full text-sm gap-2 border-none focus:border-none focus:ring-0">
            <Image
              src={`/static/flag-${data.value}.png`}
              alt={""}
              width={20}
              height={20}
            />
            {data.label}
          </div>
        )
      }}
    />

  );
};