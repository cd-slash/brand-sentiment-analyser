# Brand Sentiment Analyser

The Brand Sentiment Analyser (BSA) allows marketers, brand owners, customers or anyone else with an interest in a particular brand to find out the top search terms related to that brand, the brand's main competitors, topical questions about the brand, and concerns about the brand that users may have.

BSA is heavily influenced by Answer The Public, and while similar, it is not intended to be a clone of that service. Answer The Public presents users with graphical depictions of search terms, while this tool presents a list of terms that enables further research.

## Features 

- __Heading__

  - Featured at the top of the site, the heading makes clear the benefit to the user: understanding what people are asking about a particular brand.

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Background image__

  - Lorem ipsum

  ![Hero image screenshot](assets/screenshots/screen_hero.png "Hero")

- __Rotating search seed suggestions__

  - The rotating suggestions within the heading highlight that the user can input any brand they wish, whether it is their own or a brand they are interested in.
  - The "typewriter" effect on the suggested brands rotation emphasises that the user can enter these brands, or any other, as a search seed to get results.

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Call to action__

  - Immediately below the heading and seed suggestions, there is a clear call to action, asking the user to enter a search seed to get results.
  - The placeholder text within the seed input box 

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Search seed input and Analyse button__

  - Lorem ipsum

  ![Hero image screenshot](assets/screenshots/screen_hero.png "Hero")

- __Results area__

  - Lorem ipsum

  ![Benefits section screenshot](assets/screenshots/screen_benefits.png "Benefits")

- __Loading animation__

  - Lorem ipsum

  ![Checklist screenshot](assets/screenshots/screen_checklist.png "Checklist")

- __Help tooltips__

  - Lorem ipsum

  ![Class picks screenshot](assets/screenshots/screen_picks.png "Class picks")

- __Top searches__ 

  - Lorem ipsum

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Questions__ 

  - Lorem ipsum

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Competitors__ 

  - Lorem ipsum

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Concerns__ 

  - Lorem ipsum

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Further research__ 

  - Lorem ipsum

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

### Features Left to Implement

- __Animation when adding item to further research list__

  - Lorem ipsum

## Testing 

### Links and buttons

- __Analyse button__

    - Is initially disabled
    - Is enabled when text is entered into the search seed input
    - Runs the analysis when clicked, or when Enter is pressed while the search seed input has focus
    - Is re-disabled when the analysis is run (prevents duplicate query)
    - Is re-enabled when the search seed input text is changed by the user
    - Is greyed out while disabled
    - Is highlighted and clickable while enabled

### Responsiveness

I have confirmed that each section of the site displays well across a variety of screensizes, testing using Firefox Developer Tools and also by opening the site an a laptop, tablet and phone to confirm that the media queries correctly adjust certain elements for different screen sizes as needed.

There was an issue in a previous version which caused a horizontal scroll due to an unhidden overflow on smaller screens, which was resolved by hiding the overflow on the benefits section.

While addressing the horizontal scroll issue, I further observed some issues with the cover text on the hero image, which has also now been addressed by progressively reducing the font size using media queries and reducing the margins around the cover box to avoid too much overlap of the hero image.

I was keen to "bake in" responsiveness in some sections by using card design patterns with concepts such as flexbox, which I read about when studying the css fundamentals course. This allowed me to make both the first class checklist and class picks section to reconfigure the layout automatically, without media queries. I also used the techniques I learned in the Love Running project to create the benefits section in a way that required media queries; this seemed considerably more cumbersome than using small, fixed-size elements that can move from horizontal rows to stacked columns dynamically, though I recognise that both techniques have their pros and cons.

An example of the responsive checklist produced without the need for media queries is below:

![Checklist tablet screenshot](assets/screenshots/screen_responsive_checklist.png "Responsive checklist")

An interesting point noted when testing was that when the screen width was smaller than 1330px (which is the hero image height of 600px * hero image aspect ratio) there was always a variable-size top and bottom border on the hero image since the aspect ratio of the image did not match its container when the size of the container was set to an absolute value of 600px. This was corrected by making the height of the container and image relative to the viewport width, i.e. using `vw` units, which also avoided the need to make the image smaller using media queries when the screen size is smaller. This way, the aspect ratio of the image is also maintained.

### Cross-browser

I have tested cross-browser support by viewing the site in Firefox, Chrome and Safari with no issues observed.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fharryowens.github.io%2FSpin-expert%2F)
- CSS
  - 3 errors were noteed by the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fharryowens.github.io%2FSpin-expert%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en), relating to 3 uses of two properties that do not exist according to the validator. These errors directly conflict with good browser support for these tags across all common platforms; Can I Use notes that `text-decoration-thickness` is supported by the browser for over 88% of users, while more than 75% of users have support for `text-decoration-skip-ink` (the major difference with the latter being no support on Safari for iOS, which is ~10% of users).
  - As these properties enhance the readability of the text in the rotating search suggestions and also improve the visual hierarchy, I have opted not to remove them despite the validator errors, noting that I have been unable to find any suitable alternative property to replace them with. On browsers without support for `text-decoration-skip-ink`, the text will be slightly less readable as characters descending below the line will merge with the underline, while browsers without support for `text-decoration-thickness` will have a thinner underline that emphasises the suggestions less, but is no less readable.

### Observations / learning points

- __Animation when adding item to further research list__

  - Lorem ipsum

### Unfixed Bugs

- __Parsing "&" in search seed__

  - Lorem ipsum

- __Competitors list can contain non-competitor results__

  - Lorem ipsum

## Deployment

- The site is deployed with AWS Lambda serverless functions, via Begin.com

The live link can be found here - https://harryowens.github.io/Spin-expert/


## Credits 

### Content 

- The text for each section is original and written by me
- The header and benefits section was heavily influenced by the Love Running project from Code Institute
- The cards for the checklist were derived form an example on [W3Schools] (https://www.w3schools.com/howto/howto_css_cards.asp)

### Media

- The photos used for the hero image, benefits section and checklist are from Unsplash
- The images used for the spin class instructors are from their profiles on onepeloton.com
