# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./DesktopSS.jpg)
[](./MobileSS.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I started with the Desktop view of the FAQ accordian. I made a div and separated the image section from the text section using css float prop. Then attempted to assemble the images together. It was the longest process for me to figure out how to use CSS position absolute vs relative and have the "orange box" stay outside of the card div while trying to hide the background image overflow. Great learning lesson though.

After that was taken care of I moved on the the text section. Stack overflow gave a perfect example for me to map through the question and answer concerns and provide an ID to open each one indiviually and keep track of state.

Next was the mobile section. Again, I found the "orange box" challenging, but it reinforced my understanding of absolute positioning. I found the transform, translate props in CSS very helpful when making things responsive.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="%PUBLIC_URL%/favicon-32x32.png"
/>
```

```css
.desktopImageBundle {
  float: left;
  width: 45%;
  position: relative;
  overflow: hidden;
}

.imageWomanDesk {
  top: -175px;
  left: 50%;
  transform: translate(-50%, 0) scale(0.75);
}
```

```js
const [selectedQuestion, toggleQuestion] = useState(-1);

function openQuestion(index) {
  toggleQuestion(selectedQuestion === index ? -1 : index);
}
faqs.map(({ question, answer }, index) => (
  <div
    key={`item-${index}`}
    className={`item ${selectedQuestion === index ? "open" : ""}`}
  >
    <p className="question" onClick={() => openQuestion(index)}>
      {question}
    </p>
    <p className="answer">{answer}</p>
    <hr></hr>
  </div>
));
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I think I could pay more attention to detail in order to get things pixel perfect. I didn't add an "active state" to keep items orange after selected, not sure if that was the goal though. This was my first challenge and I wasn't sure how much was provided, may have defaulted to C-R-A too soon.

I would be interested in trying to do this without using react/js as the bonus stated.

### Useful resources

- [Web Dev Simplified - Position](https://www.youtube.com/watch?v=jx5jmI0UlXU) - This helped me understand CSS position.
- [efecollins](https://github.com/efecollins/faq/blob/main/dist/css/main.css) - This bright programmer's solution was sometimes used to check my solution and help dig me out when I was stuck.

## Author

- Website - [Evan Reznicek](https://www.reznitek.com/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

big thanks to efecollins for help / reference for css solution.
