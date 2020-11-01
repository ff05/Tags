import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { TagsContext } from "../../providers/TagsProvider";
import { MainStyles } from "../shared/MainStyles";
import { CustomDataCell, TableStyles, TagsListStyles } from "./ListOverview.styles";
import { ReactComponent as GoToIcon } from "../../assets/go-to.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";

const ListOverviewPage = () => {
  const [listName, setListName] = useState<string>("");
  const [highlightedItemId, sethighlightedItemId] = useState<number>();
  const { addList, removeList, tagsLists } = useContext(TagsContext);
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);

  const handleListName = (e: React.FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addList(listName);
    setListName("");
  };

  const handleMouseEnter = (e: React.MouseEvent, id: number): void => {
    sethighlightedItemId(id);
  };

  const handleMouseLeave = () => {
    sethighlightedItemId(undefined);
  };

  const handleClick = () => {
    setAlertIsOpen(true);
  };

  return (
    <>
      <Header>
        <h1>Categorieën</h1>
      </Header>
      <MainStyles>
        {tagsLists.length > 0 ? (
          <TableStyles>
            <thead>
              <tr>
                <th>Naam:</th>
                <th>Bekijk:</th>
                <th>Verwijder:</th>
              </tr>
            </thead>
            <tbody>
              {tagsLists.map((tagsList) => (
                <tr key={tagsList.id}>
                  <CustomDataCell highlighted={highlightedItemId === tagsList.id}>{tagsList.name}</CustomDataCell>
                  <td>
                    <Link key={tagsList.name} to={`/${tagsList.id}`}>
                      <GoToIcon
                        onMouseEnter={(e) => handleMouseEnter(e, tagsList.id)}
                        onMouseLeave={handleMouseLeave}
                      />
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => removeList(tagsList.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableStyles>
        ) : (
          <i>Er zijn momenteel geen tag lijstjes</i>
        )}
        <div>
          <h2>Voeg een nieuwe lijst toe:</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="list-name">Naam</label>
            <input id="list-name" type="text" value={listName} onChange={handleListName} required />
            <input type="submit" value="Voeg toe" />
          </form>
        </div>
      </MainStyles>
    </>
  );
};

export default ListOverviewPage;
