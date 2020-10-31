import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { TagsContext } from "../../providers/TagsProvider";
import { MainStyles } from "../shared/MainStyles";
import { ListItemStyles } from "./ListOverview.styles";

const ListOverviewPage = () => {
  const [listName, setListName] = useState("");
  const { addList, removeList, tagsLists } = useContext(TagsContext);

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
      <Header>
        <h1>Overview of tags-lists</h1>
      </Header>
      <MainStyles>
        {tagsLists.length > 0 && (
          <ul>
            {tagsLists.map((tagsList) => {
              return (
                <ListItemStyles>
                  <span>{tagsList.name}</span>
                  <Link key={tagsList.name} to={`/${tagsList.id}`}>
                    Bekijk
                  </Link>
                  <button onClick={() => removeList(tagsList.id)}>Verwijder</button>
                </ListItemStyles>
              );
            })}
          </ul>
        )}
        <h2>Voeg nieuwe lijst toe</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="list-name">Naam</label>
          <input id="list-name" type="text" value={listName} onChange={handleListName} required />
          <input type="submit" value="Voeg toe" />
        </form>
      </MainStyles>
    </>
  );
};

export default ListOverviewPage;
