import React from "react";
import { Buttons, Dialog, Wrapper } from "./ConfirmationDialog.styles";
import Button from "../../components/Button/Button";

type Props = {
  handleClick: (value: boolean) => void;
  label: string;
};

const ConfirmationDialog: React.FC<Props> = ({ handleClick, label }) => {
  return (
    <Wrapper>
      <Dialog>
        <p>{label}</p>
        <Buttons>
          <Button onClick={() => handleClick(true)} variant="secondary">
            Ja
          </Button>
          <Button onClick={() => handleClick(false)} variant="primary">
            Nee
          </Button>
        </Buttons>
      </Dialog>
    </Wrapper>
  );
};

export default ConfirmationDialog;
