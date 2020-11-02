import React from "react";
import { Link } from "react-router-dom";
import { Search as GoToIcon } from "@amsterdam/asc-assets";
import { Minimise as DeleteIcon } from "@amsterdam/asc-assets";
import { CustomDataCell, ListOverviewTableStyles } from "./ListOverviewTable.styles";
import { ITagList } from "../../providers/TagsProvider";
import Button from "../../components/Button/Button";

type Props = {
  list: ITagList[];
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  onClick: (list: ITagList) => void;
  highlightedItemId?: number;
};

const ListOverviewTable: React.FC<Props> = ({ list, onMouseEnter, onMouseLeave, onClick, highlightedItemId }) => {
  return (
    <ListOverviewTableStyles>
      <thead>
        <tr>
          <th>Naam:</th>
          <th>Bekijk:</th>
          <th>Verwijder:</th>
        </tr>
      </thead>
      <tbody>
        {list.map((tagList) => (
          <tr key={tagList.id}>
            <CustomDataCell highlighted={highlightedItemId === tagList.id}>{tagList.name}</CustomDataCell>
            <td>
              <Link key={tagList.name} to={`/${tagList.id}`}>
                <GoToIcon onMouseEnter={() => onMouseEnter(tagList.id)} onMouseLeave={onMouseLeave} />
              </Link>
            </td>
            <td>
              <Button onClick={() => onClick(tagList)}>
                <DeleteIcon />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </ListOverviewTableStyles>
  );
};

export default ListOverviewTable;
