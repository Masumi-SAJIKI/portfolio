import { format } from "date-fns";
import { Typography } from "@mui/material";
import { ReleaseHistory } from "types";

type Props = {
  notes: ReleaseHistory[];
};

export default function ReleaseNote({ notes }: Props) {
  return (
    <Typography variant="body1" component="div">
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {notes.map((note) => (
          <li key={note.date.getDate()} style={{ marginBottom: "4px" }}>
            {format(note.date, "yyyy/M/dd")}
            <Typography variant="caption" component="span" mx={1}>
              {"v" + note.ver + " "}
              {note.note}
            </Typography>
          </li>
        ))}
      </ul>
    </Typography>
  );
}
