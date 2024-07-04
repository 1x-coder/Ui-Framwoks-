import classNames from "classnames";
import { Locale } from "date-fns";
import React from "react";
import { Classes } from "@blueprintjs/core";
import { DatePicker3 } from "@blueprintjs/datetime2";
import { H5 } from "@blueprintjs/core";
import { Example } from "./Example";

const loadDateFnsLocale: (localeCode: string) => Promise<Locale> = async (
  localeCode,
) => {
  const localeModule = await import(
    `../node_modules/date-fns/esm/locale/${localeCode}/index.js`
  );
  return localeModule.default;
};

export const DatetimeExample: React.FC = () => {
  return (
    <Example header="@blueprintjs/datetime2">
      <H5>DatePicker3</H5>
      <DatePicker3
        className={classNames(Classes.ELEVATION_1, "example-datepicker")}
        dateFnsLocaleLoader={loadDateFnsLocale}
        timePrecision="minute"
      />
    </Example>
  );
};
