import React, { useState } from "react";
import { Button, H5, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import {
  filterFilm,
  renderFilm,
  Film,
  TOP_100_FILMS,
} from "@blueprintjs/select/lib/esm/__examples__";
import { Example } from "./Example";

export const SelectExample: React.FC = () => {
  const [film, setFilm] = useState<Film>(TOP_100_FILMS[0]);
  return (
    <Example header="@blueprintjs/select">
      <H5>Select</H5>
      <Select<Film>
        fill={true}
        items={TOP_100_FILMS}
        itemPredicate={filterFilm}
        itemRenderer={renderFilm}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={setFilm}
        className="film-select"
        popoverProps={{
          placement: "bottom",
        }}
      >
        <Button
          alignText="left"
          fill={true}
          text={film.title}
          rightIcon="caret-down"
        />
      </Select>
    </Example>
  );
};
