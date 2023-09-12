import { Navigation } from "./TopNav.styles";
import { GhostButton } from "../GhostButton";
import LeftArrow from "../../assets/left-arrow.svg";

export const TopNav = ({ onClick }: any) => {
  return (
    <Navigation>
      <GhostButton onClick={onClick}>
        <img src={LeftArrow} alt="logo" />
      </GhostButton>
    </Navigation>
  );
};
