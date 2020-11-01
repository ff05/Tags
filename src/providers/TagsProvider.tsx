import React, { createContext, useEffect, useState } from "react";
import { change, remove, fetch, add } from "../utils/api";

const URL = "http://localhost:3004/tagLists";

export interface ITagsList {
  id: number;
  name: string;
  tags: string[];
}

interface IContextProps {
  tagsLists: ITagsList[];
  addList: (name: string) => void;
  removeList: (id: number) => void;
  updateTagList: (tagName: string, listId: number) => void;
}

export const TagsContext = createContext<IContextProps>({
  tagsLists: [],
  addList: () => {},
  removeList: () => {},
  updateTagList: () => {},
});

const TagsProvider: React.FC = ({ children }) => {
  const [tagsLists, setTagsLists] = useState<ITagsList[]>([]);
  const [dbUpdated, setDbUpdated] = useState(false);

  useEffect(() => {
    fetch<ITagsList[]>(URL)
      .then((data) => setTagsLists(data))
      .catch((error) => console.error(error));
  }, [dbUpdated]);

  const addList = (name: string) => {
    add(URL, { name, tags: [] })
      .then(() => setDbUpdated(!dbUpdated))
      .catch((error) => console.error(error));
  };

  const removeList = (id: number) => {
    remove(URL + "/" + id)
      .then(() => {
        setDbUpdated(!dbUpdated);
      })
      .catch((error) => console.error(error));
  };

  const updateTagList: (tagName: string, listId: number) => void = (tagName: string, listId: number) => {
    const currentList = tagsLists.find((list) => list.id === listId);
    if (!currentList) {
      return;
    }
    let newList: ITagsList;
    if (currentList.tags.includes(tagName)) {
      const newTags = currentList.tags.filter((tag) => tag !== tagName);
      newList = {
        ...currentList,
        tags: newTags,
      };
    } else {
      newList = {
        ...currentList,
        tags: [...currentList.tags, tagName],
      };
    }
    change(URL + "/" + listId, { ...newList })
      .then(() => setDbUpdated(!dbUpdated))
      .catch((error) => console.error(error));
  };

  return (
    <TagsContext.Provider value={{ addList, updateTagList, tagsLists, removeList }}>{children}</TagsContext.Provider>
  );
};

export default TagsProvider;
