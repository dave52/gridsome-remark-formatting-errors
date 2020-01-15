# gridsome-remark-formatting-errors
Vue components in markdown files with vue-remark break depending on formatting

## Description

When using .vue components in .md files, depending on your code/text spatial formatting, the markdown text and vue components do not parse to html correctly, resulting in `ERROR: tag <*> has no matching end tag.` , because the closing `</*>` tag is not being placed in the correct position.

This results in incomplete and broken site pages. Sometimes console errors will appear, if the formatting isn't setup correctly, or in the way vue-remark assumes, but most of the time errors aren't thrown.

### Steps to reproduce

Link to project: 
https://github.com/dave52/gridsome-remark-formatting-errors

1. `$ yarn install`
2. `$ gridsome develop`
3. Command will likely succeed with no errors but you'll notice 3 pages aren't being built correctly, they'll appear incomplete if you visit their url (i.e. http://localhost:8080/patterns/typeahead/). Open one of the following pages below, and add a space or small change and save, should trigger the `ERROR: tag <*> has no matching end tag.`
Broken files:
    - markdown/patterns/fonts-typography.md
    - markdown/patterns/personas.md
    - markdown/patterns/typeahead.md
4. The fixed versions of these files reside in the same folder for comparison too, look for the same file name suffixed with '*-fixed-formatting.md'

These files most of the time silently fail, the console usually won't throw an error, unless you go into a specific file and alter it (i.e. add a space and save it), then you'll see an error. 

### Actual result
Take for example in 'markdown/patterns/personas.md'

**Broken markdown & vue component** (notice the indentation from left on `</GridCol>`):
```
- Business owner
- Broker
- Entrepreneur

  </GridCol> <!-- indented -->
```

**Error**:
```
  Errors compiling template:

  tag <li> has no matching end tag.

  109|  <li>
  110|  <p>Broker</p>
  111|  </li>
     |        
  112|  <li>
     |  ^^^^
  113|  <p>Entrepreneur</p>

  tag <ul> has no matching end tag.
```

What's happening is the respective `</li>` and `</ul>` tags are being applied after the `</GridCol>`, due to the formatting.

If the `</GridCol>` component is flush left and not tabbed in it parses to html correctly.

Here's another example that errors out because there isn't a line break between the markdown content and the vue component. This file is in 'markdown/patterns/fonts-typography.md'

**Broken markdown & vue component** (notice no line gap between last line of text and `</GridCol>`):
```
<GridCol col="span-4">

We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.

Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.
</GridCol>
```

**Error**:
```
Errors compiling template:

  tag <p> has no matching end tag.

  157|  <Grid>
  158|  <GridCol col="span-4">
  159|  <p>We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.</p>
     |


  160|  <p>Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.
     |  ^^^
  161|  </GridCol></p>
```

### Workaround
To fix the issue and have the vue components and markdown parsed correctly it seems markdown file authors need to have all their components pushed to the left (no indentation) and require an empty line between markdown content and the vue component.

This is troublesome as content authors may not follow the correct convention, and also not see the error to report the broken page.

```
<GridCol col="span-4">

We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.

Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.

</GridCol>
```

### Expected result
I'd assume regardless of tabbing, or line breaks between markdown content and vue components that end result would parse the same. My hope is that the following examples would all work:

**Formatting A**:
```
<GridCol col="span-4">
We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.

Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.
</GridCol>
```

**Formatting B** (notice tabbing from left):
```
  <Grid>
  <GridCol col="span-4">
  We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.

  Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.
  </GridCol>
```

**Formatting C** (more tabbing from left):
```
<Grid>
  <GridCol col="span-4">
  
  We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.

  Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.

  </GridCol>
```

### Environment

```
System:
    OS: Windows 10
    CPU: (12) x64 Intel(R) Core(TM) i7-8850H CPU @ 2.60GHz
  Binaries:
    Node: 12.1.0 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.19.1 - C:\Program Files (x86)\bin\yarn.CMD
    npm: 6.9.0 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Edge: 44.18362.449.0
  npmPackages:
    gridsome: ^0.7.0 => 0.7.12
```
