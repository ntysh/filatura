# What is it?

This is an artistic digital artefact, devoted to the STOLL Knitting Machine and her breakdowns. It mimics the internal STOLL software, but reuses it to tell a personal story in a form of interactive manual. It is accessible at Github Pages: https://ntysh.github.io/filatura/. 

# How is it built?

HTML, CSS, Javascript.


# Architecture

Individual sections of the manual as separate HTML files inside the `/pages/`.
The media-files are stored in `/assets/`.

JavaScript controls the opening and positioning of native browser popup windows. Each popup functions as a fragment of the manual and can contain text, images, quotations, links, or further connections to other pages.

CSS is used to define the visual language of the archive, while some individual pages contain their own local styles.


## User Interface

A standard click prompts the browser to open a window roughly centered on the GUI button. The size is determined before the window opens, so it does not appear in one location only to jump to another. If the text extends above the window, it scrolls.



## Tests
Tested manually in Firefox and Chrome. 
Auto-tests are at:
```sh
node --test tests/archive.test.cjs
```
