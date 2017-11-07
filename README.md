# 📓 Lernum

_A reading, listening, and discovery platform for the knowledge-hungry._

***Early stages***

---

**TL;DR:**
A PWA + desktop app that brings the free
coding resources and tech-related study material to the user in a readable fashion.

**I-care-a-bit version:**
Lernum is a web (and desktop) app that allows you to auth with GitHub (..and Google/Facebook/Twitter?) and
gather valuable learning resources (podcasts, conference videos, articles, tutorials, e-books, etc.),
read/view/listen to them, rate them and also discover new resources based on previous preferences.

> A so-called netflix for the knowledge-hungry.

---

There'd be a convenient discovery, rating and sorting system. The main focus is a beautiful/clean/sleek
reading or watching mode to focus on consuming the learning material. Idea/direction for design:
https://dribbble.com/shots/3122340-Rise-Blocks-authoring

---


## TODO

- Make it possible to parse/crawl `awesome-*` lists on GitHub or other types of learning resources
- Set up Vue + Firebase
  - Saving of basic resources (links + plain text)
  - Categories/types of resources
- Markdown, pdf (& other formats?) reader
- Initial design
  - Icons + link interactions for sidenav
  - Transitions for router
  - Animating appended HTML (v-html)
  - ?
  - Colour palette!
  - Footer
- UX enhancements
  - Reading mode toggle
  - Breadcrumbs for Discovery tab
- Generate favicon and PWA icons
- Podcast, audio book & video players
- Sync with IndexedDB or local storage
  - So everything is saved (by default, your browser is your user and registration is only necessary
  if you want a x-device experience)
- Suggestions for the user (tags? + auto-discovery based on saved resources)
- Possibility to include feeds
- Rating system
  - Initially for self
  - Later also public ranking
- Auth with Firebase
- Submitting resources
  - Think of how to validate user-added resources; PRs seem the easiest atm but would mean we store
  some of the resources in our own repo, which doesn't seem ideal (maybe create a separate `lernum-resouces`
  repo for those)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```