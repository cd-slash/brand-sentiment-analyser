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

- __Delete item from results list__

  - Items can not currently be deleted from results list, e.g. if they are unrelated to the brand search
  - While it would be trivial to allow a user to delete individual list items, these would not persist across sessions without considerable additional infrastructure to maintain state, so I opted not to include a delete button to avoid user frustration

- __Animation when adding item to further research list__

  - Lorem ipsum

- __Background video__

  - The background is highly visible on initial page load and replacing with a video may enhance visual appeal

- __Automated testing__

  - The testing checklists shown in this document could be automated and run as unit or end-to-end tests as part of the CI / build process

## Testing 

### Visual

- __Background image__

    - [x] Shown on all tested devices (desktop, mobile and tablet)
    - [x] Covers the full size of the page
    - [x] Remains fixed in position on scroll
    - [x] Is "dimmed" with an overlay to ensure good text contrast
    - [x] Is dimmed more towards the top of the page

### Links and buttons

- __Analyse button__

    - [x] Initially disabled
    - [x] Enabled when text is entered into the search seed input
    - [x] Runs the analysis when clicked, or when Enter is pressed while the search seed input has focus
    - [x] Re-disabled when the analysis is run (prevents duplicate query)
    - [x] Re-enabled when the search seed input text is changed by the user
    - [x] Greyed out while disabled
    - [x] Highlighted and clickable while enabled
    - [x] Formatted as intended on all screen sizes

- __Add to further research buttons__

    - [x] Shown beside each list item in results lists
    - [x] Positioned and formatted as intended
    - [x] Shows a pointer cursor on hover
    - [x] Moves the item to the further research list when clicked
    - [x] Not shown beside items in the further research list

- __External search buttons__

    - [x] Shown beside each list item in further research list
    - [x] Opens a Google search for the item in a new tab
    - [x] Formatted as intended on all screen sizes

- __Help buttons__

    - [x] Shown in the header of each results list
    - [x] Show a tooltip text box describing the purpose of the results list on hover (desktop) or when active (i.e. touched - mobile / touchscreen)
    - [x] Hide the tooltip when not hovered or active
    - [x] Formatted as intended on all screen sizes

- __Expand / collapse further research list button__

    - [x] Shown in header of further research box
    - [x] Expands the further research box on click (when collapsed)
    - [x] Rotates to become a "collapse" button when list is expanded
    - [x] Collapses the further research box on click (when expanded)
    - [x] Formatted as intended on all screen sizes

### Animations

- __Search seed suggestions__

    - [x] Shows suggested brands in sequence
    - [x] Removes and adds letters individually when changing between suggestions
    - [x] Pauses for 3s after each brand suggestion is shown
    - [x] Pauses for 6s on "your brand" suggestion
    - [x] Runs continuously on an infinite loop
    - [x] Runs asynchronously and does not block UI
    - [x] Reduces in size on smaller screens
    - [x] Does not wrap to second line on any tested screen size

- __Reveal results area__

    - [x] Smoothly expands to reveal results boxes when "Analyse" is clicked
    - [x] Removes and adds letters individually when changing between suggestions
    - [x] Pauses for 3s after each brand suggestion is shown
    - [x] Pauses for 6s on "your brand" suggestion

- __Results loading animation__

    - [x] Shown in the header of each results list when "Analyse" is clicked
    - [x] Remains visible while the API call is in progress
    - [x] Hidden when the API call completes (whether there are results to show or not)
    - [x] Animated (shows rotating circle of dots) on all platforms tested

- __Expand / collapse further research list__

    - [x] List box smoothly expands to reveal list items when chevron icon is clicked
    - [x] Chevron icon rotates smoothly through 180 degrees when list is expanded or collapsed

### Results

- __Layout__

    - [x] Results lists are arranged in a grid on tablet / desktop
    - [x] Lists are stacked vertically on mobile
    - [x] Grid or vertical stack covers the full width of the screen (except extremely large screens)
    - [x] List widths resize to fill available space
    - [x] Lists have equal height within rows
    - [x] List items cover the width of the list (with margins)
    - [x] List items are stacked vertically
    - [x] Lists reduce in height when items are removed from all lists in a row on desktop / tablet
    - [x] Lists reduce in height when items are removed from any list on mobile
    - Is initially disabled

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

- __Parsing "&" in search seed is not parsed correctly__

    - E.g. entering "M&S sandwich" as the seed is interpreted as "M S sandwich" yielding strange results
    - The API interprets "&" as joining two search terms, even when there are no spaces between the characters
    - This can usually be worked around by putting quotes around the term containing the ampersand, but this is not clear to users and is not always effective

- __Competitors list can contain non-competitor results__

    - E.g. the seed term "Xbox" shows "PS5 sales" in the competitors list
    - While "PS5" is a legitimate competitor, this is a limitation of the competitors search results since a suggestion to compare Xbox and PS5 sales will result in the full term "PS5 sales" being interpreted as a competitor, rather than just PS5
    - This also leads to duplicates, since "PS5" is shown elsewhere in the list

- __Concerns list can include apparently positive suggestions__

    - E.g. when using the search seed "Peloton", the concerns list includes "Peloton help lose weight" which is not a concern about the brand or product
    - This is a consequence of how the suggestions work, since a high-ranking suggestion containing "help" is expected to be a concern

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
