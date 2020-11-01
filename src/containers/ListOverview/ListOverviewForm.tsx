import React, { useState } from "react";
import { ErrorStyles, FormStyles } from "./ListOverviewForm.styles";

type Props = { validate: (value: string) => boolean; onSubmit: (value: string) => void };

const ListOverviewForm: React.FC<Props> = ({ validate, onSubmit }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError("");
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate(value)) {
      onSubmit(value);
      setValue("");
    } else {
      setError("Deze categorie bestaat al");
    }
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <label htmlFor="list-name">Naam</label>
      <div>
        <input id="list-name" type="text" value={value} onChange={handleChange} required />
        <input type="submit" value="Maak aan" />
      </div>
      {error && <ErrorStyles>{error}</ErrorStyles>}
    </FormStyles>
  );
};

export default ListOverviewForm;
