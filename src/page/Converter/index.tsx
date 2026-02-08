import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

export default function Index() {
  const [originalString, setOriginalString] =
    useState(`{{ Form::button('&times;',
  ['class' => 'close',
  'data-dismiss' => 'alert',
  'aria-label' => 'Close']) }}`);
  const [result, setResult] = useState("");

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let res = "{{ html()";

    if (originalString.includes("Form::")) {
      const match = originalString.match(/\('([^']*)'/);
      const name = originalString.match(/::.*.\(/);
      console.log(match, name);
      res = res.concat(
        `->${name ? name[0].replace("::", "").replace("(", "") : ""}('${
          match ? match[1] : ""
        }')`
      );
    }
    if (originalString.includes("'class'")) {
      const match = originalString.match(/class' => '([^']*)'/);
      res = res.concat(`->class('${match ? match[1] : ""}')`);
    }
    if (originalString.includes("'data-")) {
      const datas = originalString.match(/data-.*./g);
      datas?.map((str) => {
        const tmpName = str.match(/[^']*'.*=>/);
        const name = tmpName ? tmpName[0].replace("' =>", "") : "";
        const tmpVal = str.match(/=> '*[^']*'/);
        console.log(str);
        const val = tmpVal ? tmpVal[0].replace("=> ", "") : "";
        if (val.match(/^'/g)) {
          res = res.concat(`->attribute('${name}', ${val})`);
        }
      });
    }

    res = res.concat(` }}`);
    setResult(res);
  }, [originalString]);

  return (
    <div>
      <TextField
        value={originalString}
        fullWidth
        multiline
        onChange={(e) => setOriginalString(e.target.value)}
      />
      <br />
      <TextField
        fullWidth
        value={result}
        onClick={async () => await navigator.clipboard.writeText(result)}
      />
    </div>
  );
}
