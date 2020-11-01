import React, { createContext, useEffect, useState } from "react";
import { change, remove, fetch, add } from "../utils/api";

const URL = "http://localhost:3004/tagLists";

export interface ITagList {
  id: number;
  name: string;
  tags: string[];
}

interface IContextProps {
  tagLists: ITagList[];
  addList: (name: string) => void;
  removeList: (id: number) => void;
  updateTagList: (tagName: string, listId: number) => void;
}

export const TagsContext = createContext<IContextProps>({
  tagLists: [],
  addList: () => {},
  removeList: () => {},
  updateTagList: () => {},
});

const TagsProvider: React.FC = ({ children }) => {
  const [tagLists, setTagLists] = useState<ITagList[]>([]);
  const [dbUpdated, setDbUpdated] = useState(false);

  useEffect(() => {
    fetch<ITagList[]>(URL)
      .then((data) => setTagLists(data))
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
    const currentList = tagLists.find((list) => list.id === listId);
    if (!currentList) {
      return;
    }
    let newList: ITagList;
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
    <TagsContext.Provider value={{ addList, updateTagList, tagLists, removeList }}>{children}</TagsContext.Provider>
  );
};

export default TagsProvider;
