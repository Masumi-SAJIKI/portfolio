import { defaultNS } from "resources/config";
import message from "resources/ja/message.json";

const resources = {
    message,
} as const;

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources;
    }
}
