# Brand Sentiment Analyser

The Brand Sentiment Analyser (BSA) allows marketers, brand owners, customers or anyone else with an interest in a particular brand to find out the top search terms related to that brand, the brand's main competitors, topical questions about the brand, and concerns about the brand that users may have.

BSA is heavily influenced by Answer The Public, and while similar, it is not intended to be a clone of that service. Answer The Public presents users with graphical depictions of search terms, while this tool presents a list of terms that enables further research.

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Navigation Bar__

  - Featured at the top of the site, the full responsive navigation bar includes links to the home page, benefits section, first ride checklist and class picks areas of the site.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Hero image__

  - The hero image is intended to feel inspirational to the user and position the content on the site as being produced by experts.

  ![Hero image screenshot](assets/screenshots/screen_hero.png "Hero")

- __The benefits__

  - The benefits will give the user a brief summary of some of the health & wellbeing benefits of spin classes.
  - The user should feel equipped to make a decision about whether or not to take a spin class after reading this section.

  ![Benefits section screenshot](assets/screenshots/screen_benefits.png "Benefits")

- __First class checklist__

  - The checklist will list the various pieces of equipment a first-time rider should have, and also include some pre-class preparation tips.
  - The first class checklist will allow users to feel confident that they have what they need and know what to expect before their first spin class. 

  ![Checklist screenshot](assets/screenshots/screen_checklist.png "Checklist")

- __Class picks__

  - This section will allow the user to identify the best type of class for them (e.g. Power Zone, Low Impact, etc.) and the time it's on this week. 
  - This section will be updated as new class types become popular or their details change.

  ![Class picks screenshot](assets/screenshots/screen_picks.png "Class picks")

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Spin Expert, helping users find other like-minded people.
  - Community is important to users as they will be able to ask questions, find other resources, and get feedback / encouragement.

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

### Features Left to Implement

- __Community forum & signup__

  - This section will allow users to talk to other site users to ask questions and provide support. Users should be able to sign up with their email address or a social media account via OAuth.

## Testing 

### Links

All internal links in the navigation area take the user to the correct area of the site. All external links point to the correct place and open in a new tab, as intended.

### Responsive

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
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fharryowens.github.io%2FSpin-expert%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

None observed.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://harryowens.github.io/Spin-expert/


## Credits 

### Content 

- The text for each section is original and written by me
- The header and benefits section was heavily influenced by the Love Running project from Code Institute
- The cards for the checklist were derived form an example on [W3Schools] (https://www.w3schools.com/howto/howto_css_cards.asp)

### Media

- The photos used for the hero image, benefits section and checklist are from Unsplash
- The images used for the spin class instructors are from their profiles on onepeloton.com
