# Bean & Brew Prototype — Glossary of Code Terms & Project Guide
**T Level Digital Software Development Mini Project (Mantis Solutions)**

---

## Overview for Your Team Presentation

This glossary explains every HTML tag, CSS property, JavaScript concept, Nutrition/Allergen feature, and Accessibility (WCAG 2.1 AA/AAA) control used in the 4-page Bean & Brew website prototype (`index.html`, `table.html`, `baking.html`, and `nutrition.html`) so your group can confidently explain how the code works during your assessment.

---

## Section 1: HTML5 Glossary (`index.html`, `table.html`, `baking.html`, `nutrition.html`)

1. **`<!DOCTYPE html>`**
   - Tells the web browser that this file uses modern HTML5 standards.

2. **`<html lang="en">`**
   - The root element wrapping the entire page. The `lang="en"` attribute tells screen readers to pronounce the text using English voice rules.

3. **`<meta charset="UTF-8">`**
   - Sets the character encoding so symbols like the pound sign (£), emojis (☕), and dashes display properly on every device.

4. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**
   - Essential for responsive mobile design. It tells mobile phones to match the screen's real pixel width instead of zooming out like a tiny desktop monitor.

5. **Semantic Elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)**
   - "Semantic" means the tag name describes the meaning of its content rather than just being a generic `<div>` box:
     - **`<header>`**: Top banner containing the Bean & Brew brand, branch selector, and the 6-button Accessibility Toolbar.
     - **`<nav>`**: Navigation bar holding links to the 4 individual pages (`index.html`, `table.html`, `baking.html`, and `nutrition.html`).
     - **`<main>`**: Holds the core interactive parts of the page.
     - **`<section>`**: Groups the primary service feature on each page.
     - **`<article>`**: Used for self-contained cards (menu item cards, seating zone cards, baking workshop cards, and ingredient breakdown cards).
     - **`<aside>`**: Side panel used for the customer's Collection Basket.
     - **`<footer>`**: Bottom bar containing opening hours and copyright details.

6. **Semantic Data Tables (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th scope="col">`, `<td>`)**
   - Used on `nutrition.html` to display structured macronutrient, caffeine, and allergen data:
     - **`<caption>`**: Provides an accessible title for the table that screen readers announce before reading rows.
     - **`<th scope="col">`**: Tells assistive technology that the cell is a column header, so screen readers read out the column name alongside every figure.

7. **Forms & Inputs (`<form>`, `<label>`, `<input>`, `<select>`, `<option>`, `<textarea>`, `<button>`)**
   - **`<form>`**: Wraps user input fields so they can be validated and submitted.
   - **`<label for="...">`**: Connects a text description to an input field using the input's `id`. Clicking the label focuses the input, and screen readers read the label aloud when a user tabs into the box.
   - **`required` attribute**: Built-in HTML5 validation that prevents a user from submitting a blank mandatory field.
   - **`type="search"` / `type="email"` / `type="tel"` / `type="date"` / `type="number"`**: Specialized HTML5 inputs that automatically bring up the appropriate mobile keyboard or calendar date-picker.

---

## Section 2: Accessibility (6 Toolbar Features & WCAG / ARIA) Glossary

1. **The 6 Accessibility Toolbar Controls:**
   - **High Contrast (`#contrast-toggle`, `body.high-contrast`)**: Switches the entire site to a pure black background with crisp white borders and high-visibility yellow/cyan highlights (WCAG AAA contrast ratio).
   - **Large Text (`#text-size-toggle`, `html.large-text`)**: Scales the root font size from `16px` to `20px` so all `rem`-based text and buttons enlarge.
   - **Dyslexia Font (`#dyslexia-toggle`, `body.dyslexia-mode`)**: Switches to rounded, distinct letterforms (`Comic Sans MS` / `Trebuchet MS`), widens letter spacing (`0.05em`), word spacing (`0.14em`), and line height (`1.85`) to prevent visual crowding.
   - **Reduce Motion (`#motion-toggle`, `body.reduce-motion`)**: Disables all CSS transitions, animations, and smooth scrolling (`scroll-behavior: auto`) for users with vestibular motion sensitivity.
   - **Read Page Aloud (`#tts-toggle`, `window.speechSynthesis`)**: Uses the browser's built-in Web Speech API (`SpeechSynthesisUtterance`) to read the active branch, page title, and instructions aloud in British English (`en-GB`).
   - **Reset Access (`#reset-a11y-btn`)**: Clears all saved accessibility overrides in `localStorage` and stops any active audio playback with one click.

2. **Skip Link (`<a href="#main-content" class="skip-link">`)**
   - A hidden link at the very top of every page that becomes visible when a user presses the `Tab` key, letting keyboard users jump straight to `<main>`.

3. **ARIA Attributes (Accessible Rich Internet Applications)**
   - **`aria-current="page"`**: Placed on the active `<a class="nav-tab active">` link in the navigation bar to tell screen readers which of the 4 pages is open.
   - **`aria-pressed="true" / "false"`**: Used on the accessibility toggle buttons so screen readers announce whether each mode is turned ON or OFF.
   - **`aria-live="polite"` (on `#status-banner`)**: Tells screen readers to automatically read out confirmation messages as soon as an order or booking is submitted.
   - **`aria-label="..."`**: Provides a clear spoken description for icons, buttons, and scrollable table regions.

4. **Not Relying on Colour Alone**
   - Every mandatory form field includes the explicit text `(Required)` in the label, and every allergen badge includes explicit text (`Allergens: ...`).

---

## Section 3: CSS3 Glossary (Styling & Responsive Layout — `styles.css`)

1. **CSS Custom Properties / Variables (`:root { --bg-primary: #fdfaf6; }`)**
   - Stores reusable colours and sizes in one central place at the top of `styles.css`. Using `var(--bg-primary)` makes it easy to switch the entire site into High Contrast Mode simply by updating those variables inside `body.high-contrast`.

2. **`box-sizing: border-box;`**
   - Tells the browser to include `padding` and `border` thickness inside an element's set width, preventing boxes from overflowing off the screen on mobile phones.

3. **Flexbox (`display: flex;`)**
   - A one-dimensional layout method used to align items neatly in a row or column (used in our header, navigation bar, basket rows, and card layouts).

4. **CSS Grid (`display: grid;`, `grid-template-columns`)**
   - A two-dimensional layout system used to arrange cards into responsive rows and columns:
     - `repeat(auto-fill, minmax(260px, 1fr))`: Automatically fits as many menu cards across the screen as will fit at a minimum width of 260px, and stretches them evenly (`1fr`).

5. **Media Queries (`@media (max-width: 850px)`)**
   - Detects when the screen width is 850 pixels or narrower (such as on smartphones and tablets) and switches multi-column desktop grids into a single vertical column (`grid-template-columns: 1fr`) with large thumb-friendly buttons.

6. **`:focus-visible`**
   - Draws a high-visibility 3px blue/cyan outline around buttons and inputs when a user navigates the page using the `Tab` key on their keyboard.

7. **`rem` Units (Root Em)**
   - A scalable unit of measurement relative to the root `<html>` font size. When the user clicks "Large Text", we change the `<html>` font size from `16px` to `20px`, and every `rem` measurement on the page scales up proportionally.

---

## Section 4: JavaScript Glossary (Interactivity — `script.js`)

1. **`const` and `let`**
   - `const` declares a constant variable whose reference does not get reassigned (e.g., `const menuItems = [...]` or DOM element references).
   - `let` declares a variable whose value changes as the customer uses the site (e.g., `let basket = []`, `let activeCategory = "all"`, `let menuSearchQuery = ""`).

2. **Arrays and Objects (`[ { ... }, { ... } ]`)**
   - `menuItems` is an Array containing 10 Objects with detailed properties for price, calories (`kcal`), macronutrients (`protein`, `carbs`, `fat`, `fibre`), `caffeineMg`, `dietaryTags`, `allergens`, `origin`, and `ingredients`.

3. **DOM (Document Object Model) Manipulation**
   - `document.getElementById("...")`: Finds a single HTML element by its unique `id` attribute.
   - `document.querySelectorAll("...")`: Finds all HTML elements matching a CSS selector (such as `.filter-btn` or `input[name="table-access"]:checked`).
   - `document.createElement("...")` & `appendChild(...)`: Dynamically creates new HTML elements (`<article>`, `<tr>`, `<li>`) and inserts them onto the page.
   - `element.classList.add(...) / remove(...) / toggle(...)`: Adds, removes, or flips CSS classes on an element.

4. **Array Methods (`.filter()`, `.forEach()`, `.find()`, `.push()`, `.map()`, `.includes()`)**
   - `.filter()`: Creates a new array containing only items that pass a test (used for category buttons, dietary filters, live search bars, and basket removal).
   - `.forEach()`: Runs a function once for every item in an array (used to draw menu cards, nutrition table rows, and calculate basket totals).
   - `.find()`: Searches an array and returns the first item that matches an `id`.
   - `.push()`: Adds a new item to the end of the `basket` array.

5. **Event Listeners (`addEventListener("click", ...)` / `"input"` / `"change"` / `"submit"`)**
   - Waits for user actions (clicking buttons, typing into live search boxes, changing workshop participant numbers, or submitting forms) and updates the page in real time.

6. **`event.preventDefault()`**
   - Stops the browser's default page reload when submitting an HTML `<form>` so we can validate inputs, generate a booking/order reference number, and display an instant accessible confirmation banner.

7. **`localStorage`, `JSON.stringify()`, and `JSON.parse()`**
   - Saves the customer's collection basket, selected café branch, and all accessibility modes (`High Contrast`, `Large Text`, `Dyslexia Font`, and `Reduce Motion`) in browser storage so they persist across all 4 pages.

8. **Web Speech API (`window.speechSynthesis` & `SpeechSynthesisUtterance`)**
   - Powers the "Read Page Aloud" accessibility button by synthesising spoken British English audio directly in the user's browser without needing external software.

---

## Section 5: Answers to the Brief's "Be Ready to Explain" Questions (Page 5)

1. **What did the client want?**
   - Bean & Brew (a chain of artisan cafés and bakery schools in Harrogate, Leeds, and York) wanted an accessible digital prototype that lets customers:
     - **(a)** Pre-order drinks and bakery food for express collection (`index.html`),
     - **(b)** Reserve a café table across 4 seating zones (`table.html`),
     - **(c)** Book hands-on baking and barista workshops (`baking.html`),
     - **(d)** Check full nutritional values, ingredients, and 14-allergen information in compliance with Natasha's Law (`nutrition.html`), and
     - **(e)** Use the service effortlessly on both mobile phones and desktop computers.

2. **What are our Functional Requirements?**
   - Customers can select their local Bean & Brew café branch (persisted across all 4 pages).
   - Customers can filter and search 10 menu items, inspect calorie/caffeine/allergen badges, customise milk or warming options, track total basket price and calories, and submit a collection order with a generated reference number.
   - Customers can compare 3 seating zones, select accessibility requirements, and reserve a table.
   - Customers can compare 4 baking workshops with a live price calculator and book places with workstation adjustments.
   - Customers can filter and search full macronutrient tables, ingredient lists, and plant/dairy milk comparisons on the Nutrition & Allergens page.

3. **What are our Non-Functional Requirements & KPIs?**
   - **Ease of Use (KPI 1)**: A customer can customise a drink and complete a collection pre-order in under 60 seconds (well inside the 3-minute target).
   - **Accessibility (KPI 2)**: 100% keyboard navigable with visible focus rings, 6 dedicated accessibility toolbar controls (High Contrast, Large Text, Dyslexia Font, Reduce Motion, Read Page Aloud, Reset Access), ARIA live regions, and explicit text labels.
   - **Responsiveness (KPI 3)**: Adapts cleanly from a 320px mobile phone screen up to a 1920px desktop monitor using CSS Grid, scrollable table wrappers, and `@media (max-width: 850px)`.

