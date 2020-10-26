import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import { TagsContext } from "../../providers/TagsProvider";

type ParamsProps = {
  listName: string;
};

const SingleListPage: React.FC = () => {
  const history = useHistory();
  const [tagName, setTagName] = useState("");
  const { listName } = useParams<ParamsProps>();
  const { removeList } = useContext(TagsContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    removeList(listName);
    history.push("/");
  };

  const handleTagName = (e: React.FormEvent<HTMLInputElement>) => {
    setTagName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTagName("");
  };

  return (
    <div>
      <Link to="/">Terug naar overzicht</Link>
      <h1>Taglijst {listName}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="list-name">Naam</label>
        <input id="list-name" type="text" value={tagName} onChange={handleTagName} required />
        <input type="submit" value="Voeg toe" />
      </form>
      <button type="button" onClick={handleClick}>
        Verwijder deze lijst
      </button>
    </div>
  );
};

export default SingleListPage;
