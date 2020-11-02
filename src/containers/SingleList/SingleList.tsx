import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClickableTag from "../../components/ClickableTag/ClickableTag";
import Header from "../../components/Header/Header";
import { ITagList, TagsContext } from "../../providers/TagsProvider";
import { MainStyles } from "../shared/MainStyles";
import { CustomLinkStyles, TagsWrapper } from "./SingleList.styles";
import SingleListForm from "./SingleListForm";

type ParamsProps = {
  id: string;
};

const SingleListPage: React.FC = () => {
  const { id } = useParams<ParamsProps>();
  const { updateTagList, tagLists } = useContext(TagsContext);
  const [tagList, setTagList] = useState<ITagList>();

  useEffect(() => {
    setTagList(tagLists.find((list) => list.id === parseFloat(id)));
  }, [id, tagLists]);

  const validateFormField = (tagName: string) => {
    if (tagList && tagList.tags.some((tag) => tag === tagName)) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (tagName: string) => {
    updateTagList(tagName, parseFloat(id));
  };

  const handleClick = (tag: string) => {
    updateTagList(tag, parseFloat(id));
  };

  return (
    <>
      <Header title={tagList ? tagList.name : ""} />
      <MainStyles>
        {tagList && tagList.tags.length > 0 ? (
          <TagsWrapper>
            {tagList.tags.map((tag) => (
              <ClickableTag key={tag} label={tag} onClick={() => handleClick(tag)} />
            ))}
          </TagsWrapper>
        ) : (
          <i>Er zijn momenteel geen tags</i>
        )}
        <div>
          <h2>Maak een tag aan:</h2>
          <SingleListForm onSubmit={handleFormSubmit} validate={validateFormField} />
        </div>
        <CustomLinkStyles to="/">Terug naar categorieën</CustomLinkStyles>
      </MainStyles>
    </>
  );
};

export default SingleListPage;
