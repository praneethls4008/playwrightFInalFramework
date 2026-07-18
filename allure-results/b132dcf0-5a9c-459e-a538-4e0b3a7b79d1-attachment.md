# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/component-tests/header.spec.ts >> QA_PLAYGROUND Header
- Location: tests/ui/component-tests/header.spec.ts:14:9

# Error details

```
Error: Login btn redirection is not as expected

expect(page).toHaveURL(expected) failed

Expected: "https://qaplayground.com/auth/sign-in"
Received: "https://qaplayground.com/"

Call log:
  - Login btn redirection is not as expected with timeout 5000ms
    - unexpected value "https://qaplayground.com/"

```

```yaml
- link "Skip to content":
  - /url: "#main-content"
- navigation "Main navigation":
  - link "QA Playground home":
    - /url: /
    - text: QA Playground
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Practice":
        - /url: /practice
    - listitem:
      - link "Demo Apps":
        - /url: /demo
    - listitem:
      - link "Challenges":
        - /url: /challenges
    - listitem:
      - link "Blogs":
        - /url: /blog
  - button "Switch to dark mode"
  - link "Log in / Sign up":
    - /url: /auth/sign-in
  - link "Start Practicing →":
    - /url: /practice
- main:
  - region "The Only Automation Playground You Need to Practice":
    - text: Free for QA Engineers - 10,000+ Practitioners
    - heading "The Only Automation Playground You Need to Practice" [level=1]
    - paragraph: Stop Reading. Start Automating. Practice Selenium, Playwright & Cypress with 14+ interactive UI elements, demo apps and rehersal AI-powered mock interviews.
    - group:
      - link "Start Practicing Free":
        - /url: /practice
      - link "See what's inside":
        - /url: "#features"
      - link "Mock Interview":
        - /url: /mock-interview
    - text: 10K+ Active Engineers 22+ Practice Elements AI x7 Interview Agents 100% Always Free
  - region "Trusted by engineers at"
  - region "Pick Your Challenge, Level Up Your Automation Testing.":
    - text: // 22+ practice elements
    - heading "Pick Your Challenge, Level Up Your Automation Testing." [level=2]
    - paragraph: Each element is isolated and clean. Focus on exactly what you want to practice without noise. Filter by difficulty level and element type.
    - link "Forms & Inputs Beginner":
      - /url: /practice/input-fields
      - heading "Forms & Inputs" [level=3]
      - text: Beginner
    - link "Alerts & Dialogs Intermediate":
      - /url: /practice/alerts-dialogs
      - heading "Alerts & Dialogs" [level=3]
      - text: Intermediate
    - link "Drag & Drop Advanced":
      - /url: /practice/drag-drop
      - heading "Drag & Drop" [level=3]
      - text: Advanced
    - link "iFrames Intermediate":
      - /url: /practice/iframes
      - heading "iFrames" [level=3]
      - text: Intermediate
    - link "Shadow DOM Advanced":
      - /url: /practice/shadow-dom
      - heading "Shadow DOM" [level=3]
      - text: Advanced
    - link "Dynamic Waits Advanced":
      - /url: /practice/dynamic-waits
      - heading "Dynamic Waits" [level=3]
      - text: Advanced
    - link "Data Tables Intermediate":
      - /url: /practice/data-table
      - heading "Data Tables" [level=3]
      - text: Intermediate
    - link "Dropdowns Beginner":
      - /url: /practice/dropdowns
      - heading "Dropdowns" [level=3]
      - text: Beginner
    - link "Date Pickers Intermediate":
      - /url: /practice/date-picker
      - heading "Date Pickers" [level=3]
      - text: Intermediate
    - link "Modal Windows Beginner":
      - /url: /practice/modals
      - heading "Modal Windows" [level=3]
      - text: Beginner
    - link "Infinite Scroll Advanced":
      - /url: /practice/infinite-scroll
      - heading "Infinite Scroll" [level=3]
      - text: Advanced
    - link "Multi-Tab Windows Intermediate":
      - /url: /practice/tabs-windows
      - heading "Multi-Tab Windows" [level=3]
      - text: Intermediate
    - link "View All 14+ Elements →":
      - /url: /practice
  - region "Everything You Need. Nothing You Do Not.":
    - text: // what we offer
    - heading "Everything You Need. Nothing You Do Not." [level=2]
    - paragraph: "Focused tools that cover the full QA journey: practice your skills, rehearse interviews with AI, and track every application until you sign the offer."
    - link "Core Feature Practice Elements 22+ interactive UI components for automation practice. Shadow DOM, iFrames, drag and drop, dynamic waits, and interview-style test targets. Open practice area ->":
      - /url: /practice
      - text: Core Feature
      - heading "Practice Elements" [level=3]
      - paragraph: 22+ interactive UI components for automation practice. Shadow DOM, iFrames, drag and drop, dynamic waits, and interview-style test targets.
      - text: Open practice area ->
    - link "New QA Study Tracker Track progress across focused QA syllabi with charts, streaks, checkpoints, and notes in one place. Start tracking ->":
      - /url: /study-tracker/dashboard
      - text: New
      - heading "QA Study Tracker" [level=3]
      - paragraph: Track progress across focused QA syllabi with charts, streaks, checkpoints, and notes in one place.
      - text: Start tracking ->
    - link "New AI Mock Interviews Practice recruiter and technical rounds with realtime AI agents and instant scored feedback. Practice an interview ->":
      - /url: "#interview"
      - text: New
      - heading "AI Mock Interviews" [level=3]
      - paragraph: Practice recruiter and technical rounds with realtime AI agents and instant scored feedback.
      - text: Practice an interview ->
    - link "E2E Simulation Bank Demo App A realistic multi-page banking workflow for building a full end-to-end automation suite like a real project. Open bank demo ->":
      - /url: /demo/bank
      - text: E2E Simulation
      - heading "Bank Demo App" [level=3]
      - paragraph: A realistic multi-page banking workflow for building a full end-to-end automation suite like a real project.
      - text: Open bank demo ->
    - link "New Job Tracker & CRM Browse QA jobs, draft outreach with AI, and track every application through your pipeline. Explore hub ->":
      - /url: "#jobs"
      - text: New
      - heading "Job Tracker & CRM" [level=3]
      - paragraph: Browse QA jobs, draft outreach with AI, and track every application through your pipeline.
      - text: Explore hub ->
    - link "New Browser Extensions Find Chrome tools that help QA in daily workflows, from capture helpers to workflow accelerators. Add to Chrome ->":
      - /url: /chrome
      - text: New
      - heading "Browser Extensions" [level=3]
      - paragraph: Find Chrome tools that help QA in daily workflows, from capture helpers to workflow accelerators.
      - text: Add to Chrome ->
    - link "Free QA Tools Data generators, selector helpers, and utility tools right when you need them. Explore tools ->":
      - /url: /qa-tools
      - text: Free
      - heading "QA Tools" [level=3]
      - paragraph: Data generators, selector helpers, and utility tools right when you need them.
      - text: Explore tools ->
    - link "Blog & Tutorials Practical QA guides and explainers written from real hands-on testing work. Read articles ->":
      - /url: /blog
      - heading "Blog & Tutorials" [level=3]
      - paragraph: Practical QA guides and explainers written from real hands-on testing work.
      - text: Read articles ->
  - region "From Zero to QA Automation Engineer":
    - text: // your roadmap
    - heading "From Zero to QA Automation Engineer" [level=2]
    - paragraph: A clear, structured path designed to take you from theory to hired without the overwhelm.
    - list "QA roadmap timeline":
      - listitem:
        - text: Foundation
        - heading "Learn the Basics" [level=3]
        - paragraph: Forms, buttons, selectors, and basic interactions. Follow a focused syllabus that builds real confidence before advancing.
        - link "Open Study Tracker ->":
          - /url: /study-tracker/dashboard
      - listitem:
        - text: Hands-On Practice
        - heading "Practice Real Challenges" [level=3]
        - paragraph: iFrames, Shadow DOM, dynamic waits, drag and drop. Real UI targets that mirror what you'll face in interviews.
        - link "Browse 22+ Elements ->":
          - /url: /practice
      - listitem:
        - text: Build Portfolio
        - heading "Build an E2E Framework" [level=3]
        - paragraph: Build a full suite on the Bank Demo — page objects, assertions, and reporting you can show in interviews.
        - link "Open Bank Demo ->":
          - /url: /demo/bank
      - listitem:
        - text: Interview Prep
        - heading "Rehearse with AI" [level=3]
        - paragraph: Run technical and recruiter rounds with AI until your answers feel natural before the real thing.
        - link "Start a Mock Interview ->":
          - /url: /#interview
      - listitem:
        - text: Get Hired
        - heading "Track Jobs and Apply" [level=3]
        - paragraph: Spot roles, draft outreach with AI, and track every application in one pipeline.
        - link "Open Job Hub ->":
          - /url: /#jobs
  - region "Engineers Who Made the Jump":
    - text: // from the community
    - heading "Engineers Who Made the Jump" [level=2]
    - paragraph: Real feedback from QA engineers using the platform to practice harder scenarios, prepare for interviews, and build hiring momentum.
    - article "Testimonial from Rahul K.":
      - blockquote: The hands-on Selenium practice and the Bank Demo finally bridged the gap between theory and real-world automation. I used the iFrame and drag-drop exercises before my technical round and felt ready for every question.
      - img "5 out of 5 stars"
      - text: Rahul K. SDET · Infosys - Pune Featured
    - article "Testimonial from Priya S.":
      - blockquote: The Shadow DOM and iFrame challenges were almost identical to what my interviewer asked. Practicing them directly, instead of only reading theory, cut my prep time dramatically.
      - img "5 out of 5 stars"
      - text: Priya S. Automation Engineer · TCS
    - article "Testimonial from Amit M.":
      - blockquote: The roadmap and study tracking gave me a path I could actually follow. Within weeks I had structure, better consistency, and enough confidence to apply for stronger roles.
      - img "5 out of 5 stars"
      - text: Amit M. Junior QA to SDET in 2 months
    - text: 10K+ Active Engineers 4.9 Average Rating 100% Free to use
  - region "Your Next QA Role Starts Here.":
    - text: Free to start — sign up to track your progress
    - heading "Your Next QA Role Starts Here." [level=2]
    - paragraph: Join thousands of QA engineers using one focused platform to practice real automation scenarios, rehearse interviews with AI, and move from preparation to offers with more confidence.
    - group:
      - link "Start Practicing Free":
        - /url: /practice
      - link "Try a Mock Interview":
        - /url: /interview-practice
      - link "Browse Jobs":
        - /url: /job-crm
    - text: Always free · Sign up to save scores, track progress & unlock more What you unlock
    - strong: Live practice targets
    - paragraph: Stable UI elements for Selenium, Playwright, Cypress, and pytest workflows.
    - strong: Realtime AI interview rounds
    - paragraph: Role-play questions, follow-ups, scoring, and model answers after each response.
    - strong: Job search momentum
    - paragraph: Track openings, draft applications, and manage follow-ups without losing context.
    - text: 22+ Practice flows AI x7 Interview agents 100% Free to use
  - region "Questions? Answered clearly.":
    - text: // frequently asked
    - heading "Questions? Answered clearly." [level=2]
    - paragraph: Everything important before you start practicing, interviewing, or tracking jobs inside QA Playground.
    - text: Best fit for Beginners Automation QA SDET Prep Interview Practice
    - paragraph: The product is designed to be useful on day one, even if you are starting with forms and selectors and working toward full E2E frameworks.
    - button "Is QA Playground really free?" [expanded]
    - text: Yes. Practice elements, AI mock interviews, and job tools are free to use — no credit card, no paywall. Creating a free account lets you save your progress, track interview scores, and pick up where you left off.
    - button "Which automation frameworks does it support?"
    - text: The UI targets are framework-agnostic. You can practice with Selenium, Playwright, Cypress, or Pytest using stable selectors, IDs, and realistic interaction patterns.
    - button "Do I need to install anything before using it?"
    - text: No setup is required to use the web experience itself. Open the practice area, choose a challenge, and start writing tests against live components directly in the browser.
    - button "Is it suitable for complete beginners?"
    - text: Yes. The experience is structured across beginner, intermediate, and advanced levels, and the Study Tracker style workflow helps learners move from basics to portfolio-ready practice.
    - button "Will this help with interviews and job preparation?"
    - text: That is one of the main goals. The product combines practice elements, realistic demo workflows, AI interview rehearsal, and job tracking so users can prepare in one connected flow.
    - button "How do the AI mock interviews work?"
    - text: You pick a round or role, the AI interviewer asks real-time questions and follow-ups, and the session provides structured feedback, model answers, and scoring after each response.
    - button "Can it also help me manage job applications?"
    - text: Yes. The Jobs Hub includes role discovery, JD review, AI-assisted application drafting, and a personal CRM layer so follow-ups and stages stay organised.
- contentinfo:
  - link "QA Playground home":
    - /url: /
    - text: QA Playground
  - paragraph: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
  - list "Social links":
    - listitem:
      - link "YouTube":
        - /url: https://youtube.com
    - listitem:
      - link "GitHub":
        - /url: https://github.com/kundalik-dev
    - listitem:
      - link "X / Twitter":
        - /url: https://x.com
    - listitem:
      - link "Telegram":
        - /url: https://t.me
  - text: Platform
  - list:
    - listitem:
      - link "Practice Elements":
        - /url: /practice
    - listitem:
      - link "AI Mock Interviews":
        - /url: /interview-practice
    - listitem:
      - link "Job Hub & CRM":
        - /url: /job-crm
    - listitem:
      - link "Bank Demo":
        - /url: /demo/bank
    - listitem:
      - link "Dashboard":
        - /url: /dashboard
    - listitem:
      - link "QA Tools":
        - /url: /qa-tools
  - text: Learn
  - list:
    - listitem:
      - link "Blog & Tutorials":
        - /url: /blog
    - listitem:
      - link "Resources":
        - /url: /resources
    - listitem:
      - link "Interview Questions":
        - /url: /interview-questions
    - listitem:
      - link "Automation Framework":
        - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
  - text: Company
  - list:
    - listitem:
      - link "About Us":
        - /url: /about-us
    - listitem:
      - link "Contact":
        - /url: /contact-us
    - listitem:
      - link "Report an Issue":
        - /url: https://github.com/kundalik-dev/qaplayground-support/issues
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy-policy
    - listitem:
      - link "Login":
        - /url: /auth/sign-in
  - text: © 2026 QA Playground. Built by
  - link "Kundalik Jadhav":
    - /url: https://github.com/kundalik-dev
  - text: "- Pune, India 🇮🇳 All rights reserved."
- alert
- button "Send feedback or report an issue"
```

# Test source

```ts
  1  | import test, { expect, Page } from "@playwright/test";
  2  | import { PAGE, PageType } from "../../../../src/data/urls/aem.urls.data";
  3  | import { QAPlaygroundHeaderComponent } from "../../../../src/component/header/QAPlaygroundHeaderComponent";
  4  | import { QAPlaygroundHeaderData } from "../../../../src/data/component/header/qaPlaygroundHeader.data";
  5  | 
  6  | export async function validateQAPlaygroundHeader(page: Page, pageType: PageType, pageName: PAGE) {
  7  |     const headerComponent = new QAPlaygroundHeaderComponent(page);
  8  | 
  9  |     test.step('Banner Validation',
  10 |       async() => {
  11 |         const actualBannerText = await headerComponent.getBannerText();
  12 |         expect.soft(actualBannerText, 'banner text is not as expected').toBe(QAPlaygroundHeaderData.banner.text);
  13 | 
  14 |         const actualBannerLink = await headerComponent.getBannerLink();
  15 |         expect.soft(actualBannerLink, 'banner link is not as expected').toBe((QAPlaygroundHeaderData.banner.href));
  16 |       }
  17 |     )
  18 | 
  19 | 
  20 |     test.step('Menu validation',
  21 |       async() => {
  22 |         const actualMenusItems = await headerComponent.getMenuLinks();
  23 |         expect.soft(actualMenusItems, 'Menu Items are not as expected').toEqual(QAPlaygroundHeaderData.menuItems);
  24 | 
  25 |       }
  26 |     )
  27 | 
  28 | 
  29 |     test.step('login btn validation',
  30 |       async() => {
  31 |         await headerComponent.clickLoginOrSignupBtn();
> 32 |         await expect.soft(page, 'Login btn redirection is not as expected').toHaveURL(QAPlaygroundHeaderData.loginBtnHref);
     |                                                                             ^ Error: Login btn redirection is not as expected
  33 |       }
  34 |     )
  35 | }
  36 | 
```