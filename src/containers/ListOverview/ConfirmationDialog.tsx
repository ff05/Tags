import React from "react";
import { Buttons, Dialog, Wrapper } from "./ConfirmationDialog.styles";
import Button from "../../components/Button/Button";

type Props = {
  onClick: (value: boolean) => void;
  label: string;
};

const ConfirmationDialog: React.FC<Props> = ({ onClick, label }) => {
  return (
    <Wrapper>
      <Dialog>
        <p>{label}</p>
        <Buttons>
          <Button onClick={() => onClick(true)} variant="secondary">
            Ja
          </Button>
          <Button onClick={() => onClick(false)} variant="primary">
            Nee
          </Button>
        </Buttons>
      </Dialog>
    </Wrapper>
  );
};

export default ConfirmationDialog;
