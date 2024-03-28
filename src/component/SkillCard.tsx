import { ReactNode, useMemo } from "react";
import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { skill } from "types";
import Rating from "component/Rating";

type Props = {
  title: string;
  icon: JSX.Element & ReactNode;
  skills: skill[];
  note?: string;
};

export default function SkillCard({ title, icon, skills, note }: Props) {
  const width = useMemo(
    () => Math.max(...skills.map((s) => s.name.length)),
    [skills]
  );

  return (
    <>
      <CardHeader avatar={icon} title={title} />
      <CardContent sx={{ pt: 0 }}>
        {skills.map((skill) => (
          <Rating
            legend={skill.name}
            value={skill.rating}
            key={skill.name}
            description={skill.description}
            width={`${width * 9}px`}
          />
        ))}
        {note && (
          <>
            <Divider sx={{ mb: 1 }} />
            <Typography component="div" variant="body2">
              ほか利用経験あり
            </Typography>
            <Typography variant="caption" color="grey" ml={1}>
              {note}
            </Typography>
          </>
        )}
      </CardContent>
    </>
  );
}
