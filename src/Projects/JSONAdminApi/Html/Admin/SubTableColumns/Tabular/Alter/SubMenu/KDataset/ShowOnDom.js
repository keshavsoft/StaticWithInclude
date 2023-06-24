import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/StartFunc.js";

let StartFunc = async ({ inProjectName }) => {
  await StartFuncShowOnDom({ inProjectName });
};

export { StartFunc }