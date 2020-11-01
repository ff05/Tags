import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClickableTag from "../../components/ClickableTag/ClickableTag";
import Header from "../../components/Header/Header";
import { ITagsList, TagsContext } from "../../providers/TagsProvider";
import { MainStyles } from "../shared/MainStyles";
import { CustomLinkStyles, TagsWrapper } from "./SingleList.styles";

type ParamsProps = {
  id: string;
};

const SingleListPage: React.FC = () => {
  const [tagName, setTagName] = useState("");
  const { id } = useParams<ParamsProps>();
  const { updateTagList, tagsLists } = useContext(TagsContext);
  const [tagsList, setTagsList] = useState<ITagsList>();

  useEffect(() => {
    setTagsList(tagsLists.find((list) => list.id === parseFloat(id)));
  }, [tagsLists]);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTagName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTagList(tagName, parseFloat(id));
    setTagName("");
  };

  const handleClick = (tag: string) => {
    updateTagList(tag, parseFloat(id));
  };

  return (
    <>
      <Header>
        <h1>{tagsList && tagsList.name}</h1>
      </Header>
      <MainStyles>
        {tagsList && tagsList.tags.length > 0 ? (
          <TagsWrapper>
            {tagsList.tags.map((tag) => (
              <ClickableTag key={tag} label={tag} onClick={() => handleClick(tag)} />
            ))}
          </TagsWrapper>
        ) : (
          <i>Er zijn momenteel geen tags</i>
        )}
        <div>
          <h2>Voeg een nieuwe tag toe:</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="tag-name">Naam</label>
            <input id="tag-name" type="text" value={tagName} onChange={handleOnChange} required />
            <input type="submit" value="Voeg toe" />
          </form>
        </div>
        <CustomLinkStyles to="/">Terug naar categorieën</CustomLinkStyles>
      </MainStyles>
    </>
  );
};

export default SingleListPage;
