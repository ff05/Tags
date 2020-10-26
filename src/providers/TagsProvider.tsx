import React, { createContext, useState } from "react";

interface ITagsList {
  id: number;
  name: string;
  tags: string[];
}

interface IContextProps {
  tagsLists: ITagsList[];
  addList: (name: string) => void;
  removeList: (name: string) => void;
}

export const TagsContext = createContext<IContextProps>({
  tagsLists: [],
  addList: () => {},
  removeList: () => {},
});

const TagsProvider: React.FC = ({ children }) => {
  const [tagsLists, setTagsLists] = useState<ITagsList[]>([]);

  const addList = (name: string) => {
    setTagsLists((tagsLists) => tagsLists.concat({ [name]: [] }));
  };

  //   addTagToList = (name: string) => {
  //       const tag = tagsLists.find()
  //   }

  const removeList = (name: string) => {
    setTagsLists((tagsLists) => tagsLists.filter((list) => name !== Object.keys(list)[0]));
  };

  return <TagsContext.Provider value={{ tagsLists, addList, removeList }}>{children}</TagsContext.Provider>;
};

export default TagsProvider;
