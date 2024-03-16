// help
import { stdWrite } from "../lib/std.js";
import execBrowser from '../lib/execBrowser.js'
import {VERSION_DOCS} from '../templates/config.js'

const HEAD = (m, col) => [m, col ?? "green", true, false];

export default function help() {
  stdWrite("Yeah! another anotation tool \n");
  execBrowser(VERSION_DOCS)
  stdWrite(...HEAD(`opening ${VERSION_DOCS}`, 'blue'))
}
