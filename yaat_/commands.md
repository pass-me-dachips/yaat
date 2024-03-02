# YAAT Commands

## commands

- yaat [args...]
- yaat o <name_of_file> [args...]
- yaat init [args...]
- yaat build <name_of_file>
- yaat cat
- yaat help
- yaat info
- yaat chuser <new_user>

## description

### yaat [args...]

build and display a yaat app. this build looks up the **.yaatconstruct** file to assemble the yaatfiles together.
_this build display's the app in `tree` mode_.

- args :
  port- <option>
- port- specifies a custom port to run yaat on.

### yaat o <name_of_file> [a]

build and display a single yaat file on your web browser
_this build displays the file in `branch` mode_.

- args :
  port- <option>
- port- specifies a custom port to run yaat on.

### yaat init [args...]

creates a bare metal yaatapp.

- args :
  m- <option>
  t- <option>
- m- specifies the mode of the app. option can only be <tree> or <branch>.
- t- specifies the title of the app `optional`, **cannot include whitespaces**.

### yaat build <name_of_file>

display's the engine-build tree format of the yaatfile.

### yaat cat

display's the <.yaatconstruct> file as an object.

### yaat help

shows list of commands and usage.

### yaat info

display's the yaat about info.

### yaat chuser <new_user>

change the yaat's current user. default is <yaat@no-user>
