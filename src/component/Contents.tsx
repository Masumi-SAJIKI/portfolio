import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children: ReactNode;
};

export default function Contents({ children }: Props) {
  return (
    <Grid item container xs={12}>
      {children}
    </Grid>
  );
}
