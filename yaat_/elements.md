# YAAT Elements

## elements

### Title

The document's header title. this tag throws an error at compile time if it's present _more than once_ throughout the yaatpage. this tag must be at the top-level of the file.
**use-case ---** title:: <content>
**scope ---** block

### Section

The first-class element of every yaatpage. all block elements asides the title element must be a child to a parent element which is `section`, any block element outside of a section is not rendered.
**use-case ---** sec:: <childElements>
**scope ---** block

### Heading

This allows you render multiple heading to your yaatpage.
**use-case ---** hl:: <content>
**scope ---** block

### SubHeading

This allows you render multiple sub-heading to your yaatpage.
**use-case ---** hx:: <content>
**scope ---** block

### List

This allows you render lists to your yaatpage.
**use-case ---** list:: <content>
**scope ---** block

### Info

This allows you render text in a `dialog-form` format, portraying a piece of information.d
**use-case ---** info:: <content>
**scope ---** block

### Text

This allows you render text on a yaatpage. this element unlike the rest, treats html contents in it as HTML and yaat contents as YAAT elements `inline`.
**use-case ---** text:: <content>
**scope ---** block

### Computer Code

This allows you embedd computer codes on your yaatpage. it only takes two elements as its content which is the `refrence_to_code` element and the `display_title` element. the `refrence_to_code` element should be the _refrenceName_ to the code, specified in the `.yaatEmbed ` file
**use-case ---** computerCode:: <refrence_to_code>, <display_title>
**scope ---** block

### Bold Text

This allows you create bold texts.
**use-case ---** [[<space_on_both_sides_then_content>]]
**scope ---** inline

### Error or deprection message

This allows you tag a sentence or word as depreated or error `warning`.
**use-case ---** {{ <content> }}
**scope ---** inline

### Information or warning message

This allows you tag a sentence or word as information or warning.
**use-case ---** (( <content> ))
**scope ---** inline

### Inline Computer code

This allows you create an inline computer code in a word-like format.
**use-case ---** << <content> >>
**scope ---** inline
