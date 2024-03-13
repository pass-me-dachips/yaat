/*
 @rules => 
 -No Logs
 @params => 
 -path  ? string
 -buildType ? branch | tree
 -buildEmbed ? sting <.yaatEmbed>
 -
 */
import { readFile } from "./fsRead.js";
import yaatTree from "../interpreter/app/yaat.js";
import embed from "../interpreter/configs/embed.js";

export default function YAATCOMPOSE(path, buildType, buildEmbed) {
  if (path && buildType && (buildType === "tree" || buildType === "branch")) {
    const yaatContent = readFile(path);
    const body = yaatTree(yaatContent, path);

    const response = { body, embededCode: { isConent: false, body: {} } };
    // The object to be returned

    const Refrences = [];
    body.children.forEach((elem) => {
      if (elem.type === "computerCode::") {
        Refrences.push(elem.content[0]);
      }
    });
    if (Refrences.length > 0) {
      response.embededCode.isConent = true;
      const yaatEmbedContent = readFile(buildEmbed);
      const yaatEmbedBuild = embed(yaatEmbedContent);

      Refrences.forEach((elem) => {
        if (yaatEmbedBuild[elem]) {
          response.embededCode.body[elem] = yaatEmbedBuild[elem];
        }
      });
    }

    return response;
  } else {
    throw { message: "An Unexpected Error Occured" };
  }
}
