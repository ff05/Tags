import React, { useContext, useState } from "react";

import Header from "../../components/Header/Header";
import { ITagList, TagsContext } from "../../providers/TagsProvider";
import { MainStyles } from "../shared/MainStyles";
import ConfirmationDialog from "./ConfirmationDialog";
import ListOverviewForm from "./ListOverviewForm";
import ListOverviewTable from "./ListOverviewTable";

const ListOverviewPage = () => {
  const [highlightedItemId, sethighlightedItemId] = useState<number>();
  const { addList, removeList, tagLists } = useContext(TagsContext);
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [tagListToRemove, setTagListToRemove] = useState<ITagList>();

  const validateFormField = (listName: string) => {
    if (tagLists.some((list) => list.name === listName)) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (listName: string) => {
    addList(listName);
  };

  const handleMouseEnter = (id: number): void => {
    sethighlightedItemId(id);
  };

  const handleMouseLeave = () => {
    sethighlightedItemId(undefined);
  };

  const handleClick = (tagList: ITagList) => {
    setAlertIsOpen(true);
    setTagListToRemove(tagList);
  };

  const handleConfirmation = (value: boolean) => {
    if (value && tagListToRemove) {
      removeList(tagListToRemove.id);
      setTagListToRemove(undefined);
    }
    setAlertIsOpen(false);
  };

  return (
    <>
      <Header title="Categorieën" />
      <MainStyles>
        {tagLists.length > 0 ? (
          <ListOverviewTable
            list={tagLists}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleClick={handleClick}
            highlightedItemId={highlightedItemId}
          />
        ) : (
          <i>Er zijn momenteel geen tag lijstjes</i>
        )}
        <div>
          <h2>Maak een nieuwe categorie aan:</h2>
          <ListOverviewForm onSubmit={handleFormSubmit} validate={validateFormField} />
        </div>
      </MainStyles>
      {alertIsOpen && (
        <ConfirmationDialog
          handleClick={handleConfirmation}
          label={`Weet je zeker dat je ${tagListToRemove && tagListToRemove.name} wilt verwijderen?`}
        />
      )}
    </>
  );
};

export default ListOverviewPage;
