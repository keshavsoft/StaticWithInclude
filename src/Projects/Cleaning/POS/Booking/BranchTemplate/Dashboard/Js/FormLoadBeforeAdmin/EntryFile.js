import { StartFunc as StartFuncFromUrlParams } from "../FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncNavMenu } from "./NavMenu/Entry.js";
import { StartFunc as StartFuncHtmlStaticNav } from "./HtmlStaticNav/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncNavMenu();
    StartFuncHtmlStaticNav();
};

export { StartFunc };