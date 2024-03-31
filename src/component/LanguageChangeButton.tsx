import { useTranslation } from "react-i18next";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { IconButton, Tooltip, TooltipProps } from "@mui/material";

interface Props {
  onChangeLang: () => void;
}

export default function LanguageChangeButton({
  onChangeLang,
  ...props
}: Props & Omit<Omit<TooltipProps, "title">, "children">) {
  const { t } = useTranslation();

  return (
    <Tooltip {...props} title={t("button.change_lang")}>
      <IconButton onClick={onChangeLang}>
        <GTranslateIcon />
      </IconButton>
    </Tooltip>
  );
}
