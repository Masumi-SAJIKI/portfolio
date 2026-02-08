// import ja_message from "resources/ja/message.json";

// declare module "i18next" {
//   interface CustomTypeOptions {
//     defaultNS: "ja_message";
//     resources: {
//       ja_message: typeof ja_message;
//     };
//   }
// }

import "react-i18next";
import en_message from "resources/en/message.json";
import ja_message from "resources/ja/message.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "ns1";
    resources: {
      ns1: typeof ja_message;
      ns2: typeof en_message;
    };
  }
}
