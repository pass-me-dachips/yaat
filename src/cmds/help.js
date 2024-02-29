import chalk from "chalk";

export default function help() {
  let stdoutput = `
YAAT Commands

: =  commands

- yaat
- yaat o <name_of_file>
- yaat init [args...]
- yaat build <name_of_file>
- yaat cat
- yaat help
- yaat info
- yaat chuser <new_user>


: =  description


${chalk.green("[+] yaat")} 

build and display a yaat app. this build looks up the .yaatconstruct file to assemble the yaatfiles together.
this build display's the app in \`tree\` mode.


${chalk.green("[+] yaat o <name_of_file>")}

build and display a single yaat file on your web browser
this build displays the file in \`branch\` mode.


${chalk.green("[+] yaat init [args...]")}

creates a bare metal yaatapp.

- args :
  m- <option>
  t- <option>
- m- specifies the mode of the app. option can only be <tree> or <branch>.
- t- specifies the title of the app \`optional\`, cannot include whitespaces.


${chalk.green("[+] yaat build <name_of_file>")}

display's the engine-built tree format of the yaatfile.


${chalk.green("[+] yaat cat")}

display's the <.yaatconstruct> file as an object.


${chalk.green("[+] yaat help")}

shows list of commands and usage.


${chalk.green("[+] yaat info")}

display's the yaat about info.


${chalk.green("[+] yaat chuser <new_user>")}

change's the yaat's current user. default is <yaat@no-user> `;

  console.log(stdoutput);
  return void 0;
}
