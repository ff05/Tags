import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { TagsContext } from "../../providers/TagsProvider";

interface ITagsList {
  [x: string]: [];
}

const ListOverviewPage = () => {
  const [listName, setListName] = useState("");
  const { addList, tagsLists } = useContext(TagsContext);

  const handleListName = (e: React.FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addList(listName);
    setListName("");
  };

  return (
    <>
      <header>
        <h1>Overview of tags-lists</h1>
      </header>
      <main>
        <div>
          {tagsLists.map((tagsList) => {
            const listName = Object.keys(tagsList)[0];
            return (
              <Link key={listName} to={`/${listName}`}>
                {listName}
              </Link>
            );
          })}
        </div>
        <h2>Voeg nieuwe lijst toe</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="list-name">Naam</label>
          <input id="list-name" type="text" value={listName} onChange={handleListName} required />
          <input type="submit" value="Voeg toe" />
        </form>
      </main>
    </>
  );
};

export default ListOverviewPage;
