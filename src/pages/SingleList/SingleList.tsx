import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ITagsList, TagsContext } from "../../providers/TagsProvider";

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

  return (
    <div>
      <Link to="/">Terug naar overzicht</Link>
      <header>
        <h1>Tag lijst van {tagsList && tagsList.name}</h1>
      </header>
      {tagsList && tagsList.tags.length > 0 && (
        <ul>
          {tagsList.tags.map((tag) => (
            <li>
              {tag}
              <button type="button" onClick={() => updateTagList(tag, parseFloat(id))}>
                x
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Voeg nieuwe tag toe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tag-name">Naam</label>
        <input id="tag-name" type="text" value={tagName} onChange={handleOnChange} required />
        <input type="submit" value="Voeg toe" />
      </form>
    </div>
  );
};

export default SingleListPage;
