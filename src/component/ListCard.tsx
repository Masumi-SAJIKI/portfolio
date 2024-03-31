import { ReactNode } from "react";
import { CardContent, CardHeader } from "@mui/material";

type Props = {
  title: string;
  icon: JSX.Element & ReactNode;
  children: JSX.Element & ReactNode;
};

export default function StyledCardContents({ title, icon, children }: Props) {
  return (
    <>
      <CardHeader avatar={icon} title={title} />
      <CardContent sx={{ pt: 0 }}>{children}</CardContent>
    </>
  );
}
