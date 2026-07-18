# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> QA_PLAYGROUND
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:22:7

# Error details

```
Error: Header validation failed: page.goto: Protocol error (Page.navigate): Invalid url: ""
Call log:
  - navigating to "", waiting until "load"


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "QA Playground home" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e7]: QA Playground
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
        - listitem [ref=e11]:
          - link "Practice" [ref=e12] [cursor=pointer]:
            - /url: /practice
        - listitem [ref=e13]:
          - link "Demo Apps" [ref=e14] [cursor=pointer]:
            - /url: /demo
        - listitem [ref=e15]:
          - link "Challenges" [ref=e16] [cursor=pointer]:
            - /url: /challenges
        - listitem [ref=e17]:
          - link "Blogs" [ref=e18] [cursor=pointer]:
            - /url: /blog
      - generic [ref=e19]:
        - button "Switch to dark mode" [ref=e20] [cursor=pointer]:
          - img [ref=e22]
        - link "Log in / Sign up" [ref=e24] [cursor=pointer]:
          - /url: /auth/sign-in
        - link "Start Practicing →" [ref=e25] [cursor=pointer]:
          - /url: /practice
  - main [ref=e26]:
    - region "The Only Automation Playground You Need to Practice" [ref=e27]:
      - generic [ref=e29]:
        - generic [ref=e31]: Free for QA Engineers - 10,000+ Practitioners
        - generic [ref=e33]:
          - heading "The Only Automation Playground You Need to Practice" [level=1] [ref=e34]:
            - text: The Only
            - text: Automation
            - text: Playground You
            - text: Need to Practice
          - paragraph [ref=e35]: Stop Reading. Start Automating. Practice Selenium, Playwright & Cypress with 14+ interactive UI elements, demo apps and rehersal AI-powered mock interviews.
        - generic [ref=e36]:
          - group [ref=e37]:
            - link "Start Practicing Free" [ref=e38] [cursor=pointer]:
              - /url: /practice
              - generic [ref=e39]:
                - generic [ref=e40]:
                  - img
                - generic [ref=e41]: Start Practicing Free
            - link "See what's inside" [ref=e42] [cursor=pointer]:
              - /url: "#features"
              - generic [ref=e43]:
                - generic [ref=e44]: See what's inside
                - generic [ref=e45]:
                  - img
            - link "Mock Interview" [ref=e46] [cursor=pointer]:
              - /url: /mock-interview
              - generic [ref=e47]:
                - generic [ref=e48]:
                  - img
                - generic [ref=e49]: Mock Interview
          - generic "QA Playground highlights" [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e52]: 10K+
              - generic [ref=e53]: Active Engineers
            - generic [ref=e54]:
              - generic [ref=e55]: 22+
              - generic [ref=e56]: Practice Elements
            - generic [ref=e57]:
              - generic [ref=e58]: AI x7
              - generic [ref=e59]: Interview Agents
            - generic [ref=e60]:
              - generic [ref=e61]: 100%
              - generic [ref=e62]: Always Free
    - region "Trusted by engineers at" [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]:
          - text: Trusted by engineers at
          - generic [ref=e66]: "->"
        - generic [ref=e68]:
          - generic [ref=e69]: Infosys
          - generic [ref=e70]: TCS
          - generic [ref=e71]: Capgemini
          - generic [ref=e72]: Wipro
          - generic [ref=e73]: Accenture
          - generic [ref=e74]: HCL
          - generic [ref=e75]: Cognizant
          - generic [ref=e76]: "*"
          - generic [ref=e77]: Infosys
          - generic [ref=e78]: TCS
          - generic [ref=e79]: Capgemini
          - generic [ref=e80]: Wipro
          - generic [ref=e81]: Accenture
          - generic [ref=e82]: HCL
          - generic [ref=e83]: Cognizant
          - generic [ref=e84]: "*"
    - region "Pick Your Challenge, Level Up Your Automation Testing." [ref=e85]:
      - generic [ref=e86]:
        - generic [ref=e87]:
          - generic [ref=e88]: // 22+ practice elements
          - heading "Pick Your Challenge, Level Up Your Automation Testing." [level=2] [ref=e89]:
            - generic [ref=e90]: Pick Your Challenge,
            - generic [ref=e91]: Level Up Your Automation Testing.
          - paragraph [ref=e92]: Each element is isolated and clean. Focus on exactly what you want to practice without noise. Filter by difficulty level and element type.
        - generic [ref=e93]:
          - link "Forms & Inputs Beginner" [ref=e94] [cursor=pointer]:
            - /url: /practice/input-fields
            - img [ref=e97]
            - generic [ref=e98]:
              - heading "Forms & Inputs" [level=3] [ref=e99]
              - generic [ref=e100]: Beginner
          - link "Alerts & Dialogs Intermediate" [ref=e101] [cursor=pointer]:
            - /url: /practice/alerts-dialogs
            - img [ref=e104]
            - generic [ref=e105]:
              - heading "Alerts & Dialogs" [level=3] [ref=e106]
              - generic [ref=e107]: Intermediate
          - link "Drag & Drop Advanced" [ref=e108] [cursor=pointer]:
            - /url: /practice/drag-drop
            - img [ref=e111]
            - generic [ref=e112]:
              - heading "Drag & Drop" [level=3] [ref=e113]
              - generic [ref=e114]: Advanced
          - link "iFrames Intermediate" [ref=e115] [cursor=pointer]:
            - /url: /practice/iframes
            - img [ref=e118]
            - generic [ref=e119]:
              - heading "iFrames" [level=3] [ref=e120]
              - generic [ref=e121]: Intermediate
          - link "Shadow DOM Advanced" [ref=e122] [cursor=pointer]:
            - /url: /practice/shadow-dom
            - img [ref=e125]
            - generic [ref=e126]:
              - heading "Shadow DOM" [level=3] [ref=e127]
              - generic [ref=e128]: Advanced
          - link "Dynamic Waits Advanced" [ref=e129] [cursor=pointer]:
            - /url: /practice/dynamic-waits
            - img [ref=e132]
            - generic [ref=e133]:
              - heading "Dynamic Waits" [level=3] [ref=e134]
              - generic [ref=e135]: Advanced
          - link "Data Tables Intermediate" [ref=e136] [cursor=pointer]:
            - /url: /practice/data-table
            - img [ref=e139]
            - generic [ref=e140]:
              - heading "Data Tables" [level=3] [ref=e141]
              - generic [ref=e142]: Intermediate
          - link "Dropdowns Beginner" [ref=e143] [cursor=pointer]:
            - /url: /practice/dropdowns
            - img [ref=e146]
            - generic [ref=e147]:
              - heading "Dropdowns" [level=3] [ref=e148]
              - generic [ref=e149]: Beginner
          - link "Date Pickers Intermediate" [ref=e150] [cursor=pointer]:
            - /url: /practice/date-picker
            - img [ref=e153]
            - generic [ref=e154]:
              - heading "Date Pickers" [level=3] [ref=e155]
              - generic [ref=e156]: Intermediate
          - link "Modal Windows Beginner" [ref=e157] [cursor=pointer]:
            - /url: /practice/modals
            - img [ref=e160]
            - generic [ref=e161]:
              - heading "Modal Windows" [level=3] [ref=e162]
              - generic [ref=e163]: Beginner
          - link "Infinite Scroll Advanced" [ref=e164] [cursor=pointer]:
            - /url: /practice/infinite-scroll
            - img [ref=e167]
            - generic [ref=e168]:
              - heading "Infinite Scroll" [level=3] [ref=e169]
              - generic [ref=e170]: Advanced
          - link "Multi-Tab Windows Intermediate" [ref=e171] [cursor=pointer]:
            - /url: /practice/tabs-windows
            - img [ref=e174]
            - generic [ref=e175]:
              - heading "Multi-Tab Windows" [level=3] [ref=e176]
              - generic [ref=e177]: Intermediate
        - link "View All 14+ Elements →" [ref=e179] [cursor=pointer]:
          - /url: /practice
    - region "Everything You Need. Nothing You Do Not." [ref=e180]:
      - generic [ref=e181]:
        - generic [ref=e182]:
          - generic [ref=e183]: // what we offer
          - heading "Everything You Need. Nothing You Do Not." [level=2] [ref=e184]:
            - generic [ref=e185]: Everything You Need.
            - generic [ref=e186]: Nothing You Do Not.
          - paragraph [ref=e187]: "Focused tools that cover the full QA journey: practice your skills, rehearse interviews with AI, and track every application until you sign the offer."
        - generic [ref=e188]:
          - link "Core Feature Practice Elements 22+ interactive UI components for automation practice. Shadow DOM, iFrames, drag and drop, dynamic waits, and interview-style test targets. Open practice area ->" [ref=e189] [cursor=pointer]:
            - /url: /practice
            - generic [ref=e190]: Core Feature
            - img [ref=e192]
            - generic [ref=e195]:
              - heading "Practice Elements" [level=3] [ref=e196]
              - paragraph [ref=e197]: 22+ interactive UI components for automation practice. Shadow DOM, iFrames, drag and drop, dynamic waits, and interview-style test targets.
              - generic [ref=e198]: Open practice area ->
          - link "New QA Study Tracker Track progress across focused QA syllabi with charts, streaks, checkpoints, and notes in one place. Start tracking ->" [ref=e199] [cursor=pointer]:
            - /url: /study-tracker/dashboard
            - generic [ref=e200]: New
            - img [ref=e202]
            - generic [ref=e209]:
              - heading "QA Study Tracker" [level=3] [ref=e210]
              - paragraph [ref=e211]: Track progress across focused QA syllabi with charts, streaks, checkpoints, and notes in one place.
              - generic [ref=e212]: Start tracking ->
          - link "New AI Mock Interviews Practice recruiter and technical rounds with realtime AI agents and instant scored feedback. Practice an interview ->" [ref=e213] [cursor=pointer]:
            - /url: "#interview"
            - generic [ref=e214]: New
            - img [ref=e216]
            - generic [ref=e223]:
              - heading "AI Mock Interviews" [level=3] [ref=e224]
              - paragraph [ref=e225]: Practice recruiter and technical rounds with realtime AI agents and instant scored feedback.
              - generic [ref=e226]: Practice an interview ->
          - link "E2E Simulation Bank Demo App A realistic multi-page banking workflow for building a full end-to-end automation suite like a real project. Open bank demo ->" [ref=e227] [cursor=pointer]:
            - /url: /demo/bank
            - generic [ref=e228]: E2E Simulation
            - img [ref=e230]
            - generic [ref=e236]:
              - heading "Bank Demo App" [level=3] [ref=e237]
              - paragraph [ref=e238]: A realistic multi-page banking workflow for building a full end-to-end automation suite like a real project.
              - generic [ref=e239]: Open bank demo ->
          - link "New Job Tracker & CRM Browse QA jobs, draft outreach with AI, and track every application through your pipeline. Explore hub ->" [ref=e240] [cursor=pointer]:
            - /url: "#jobs"
            - generic [ref=e241]: New
            - img [ref=e243]
            - generic [ref=e248]:
              - heading "Job Tracker & CRM" [level=3] [ref=e249]
              - paragraph [ref=e250]: Browse QA jobs, draft outreach with AI, and track every application through your pipeline.
              - generic [ref=e251]: Explore hub ->
          - link "New Browser Extensions Find Chrome tools that help QA in daily workflows, from capture helpers to workflow accelerators. Add to Chrome ->" [ref=e252] [cursor=pointer]:
            - /url: /chrome
            - generic [ref=e253]: New
            - img [ref=e255]
            - generic [ref=e260]:
              - heading "Browser Extensions" [level=3] [ref=e261]
              - paragraph [ref=e262]: Find Chrome tools that help QA in daily workflows, from capture helpers to workflow accelerators.
              - generic [ref=e263]: Add to Chrome ->
          - link "Free QA Tools Data generators, selector helpers, and utility tools right when you need them. Explore tools ->" [ref=e264] [cursor=pointer]:
            - /url: /qa-tools
            - generic [ref=e265]: Free
            - img [ref=e267]
            - generic [ref=e269]:
              - heading "QA Tools" [level=3] [ref=e270]
              - paragraph [ref=e271]: Data generators, selector helpers, and utility tools right when you need them.
              - generic [ref=e272]: Explore tools ->
          - link "Blog & Tutorials Practical QA guides and explainers written from real hands-on testing work. Read articles ->" [ref=e273] [cursor=pointer]:
            - /url: /blog
            - img [ref=e275]
            - generic [ref=e282]:
              - heading "Blog & Tutorials" [level=3] [ref=e283]
              - paragraph [ref=e284]: Practical QA guides and explainers written from real hands-on testing work.
              - generic [ref=e285]: Read articles ->
    - region "From Zero to QA Automation Engineer" [ref=e286]:
      - generic [ref=e287]:
        - generic [ref=e288]:
          - generic [ref=e289]: // your roadmap
          - heading "From Zero to QA Automation Engineer" [level=2] [ref=e290]:
            - generic [ref=e291]: From Zero to
            - generic [ref=e292]: QA Automation Engineer
          - paragraph [ref=e293]: A clear, structured path designed to take you from theory to hired without the overwhelm.
        - list "QA roadmap timeline" [ref=e294]:
          - listitem [ref=e295]:
            - generic [ref=e296]:
              - img [ref=e297]
              - generic [ref=e304]: "01"
            - generic [ref=e305]: Foundation
            - heading "Learn the Basics" [level=3] [ref=e306]
            - paragraph [ref=e307]: Forms, buttons, selectors, and basic interactions. Follow a focused syllabus that builds real confidence before advancing.
            - link "Open Study Tracker ->" [ref=e308] [cursor=pointer]:
              - /url: /study-tracker/dashboard
          - listitem [ref=e309]:
            - generic [ref=e310]:
              - img [ref=e311]
              - generic [ref=e315]: "02"
            - generic [ref=e316]: Hands-On Practice
            - heading "Practice Real Challenges" [level=3] [ref=e317]
            - paragraph [ref=e318]: iFrames, Shadow DOM, dynamic waits, drag and drop. Real UI targets that mirror what you'll face in interviews.
            - link "Browse 22+ Elements ->" [ref=e319] [cursor=pointer]:
              - /url: /practice
          - listitem [ref=e320]:
            - generic [ref=e321]:
              - img [ref=e322]
              - generic [ref=e328]: "03"
            - generic [ref=e329]: Build Portfolio
            - heading "Build an E2E Framework" [level=3] [ref=e330]
            - paragraph [ref=e331]: Build a full suite on the Bank Demo — page objects, assertions, and reporting you can show in interviews.
            - link "Open Bank Demo ->" [ref=e332] [cursor=pointer]:
              - /url: /demo/bank
          - listitem [ref=e333]:
            - generic [ref=e334]:
              - img [ref=e335]
              - generic [ref=e342]: "04"
            - generic [ref=e343]: Interview Prep
            - heading "Rehearse with AI" [level=3] [ref=e344]
            - paragraph [ref=e345]: Run technical and recruiter rounds with AI until your answers feel natural before the real thing.
            - link "Start a Mock Interview ->" [ref=e346] [cursor=pointer]:
              - /url: /#interview
          - listitem [ref=e347]:
            - generic [ref=e348]:
              - img [ref=e349]
              - generic [ref=e354]: "05"
            - generic [ref=e355]: Get Hired
            - heading "Track Jobs and Apply" [level=3] [ref=e356]
            - paragraph [ref=e357]: Spot roles, draft outreach with AI, and track every application in one pipeline.
            - link "Open Job Hub ->" [ref=e358] [cursor=pointer]:
              - /url: /#jobs
    - region "Engineers Who Made the Jump" [ref=e359]:
      - generic [ref=e360]:
        - generic [ref=e361]:
          - generic [ref=e362]: // from the community
          - heading "Engineers Who Made the Jump" [level=2] [ref=e363]:
            - generic [ref=e364]: Engineers Who
            - generic [ref=e365]: Made the Jump
          - paragraph [ref=e366]: Real feedback from QA engineers using the platform to practice harder scenarios, prepare for interviews, and build hiring momentum.
        - generic "Community testimonials" [ref=e367]:
          - generic [ref=e368]:
            - article "Testimonial from Rahul K." [ref=e369]:
              - generic: "\""
              - blockquote [ref=e370]: The hands-on Selenium practice and the Bank Demo finally bridged the gap between theory and real-world automation. I used the iFrame and drag-drop exercises before my technical round and felt ready for every question.
              - img "5 out of 5 stars" [ref=e371]: ★★★★★
              - generic [ref=e372]:
                - generic [ref=e373]: RK
                - generic [ref=e374]:
                  - generic [ref=e375]: Rahul K.
                  - generic [ref=e376]: SDET · Infosys - Pune
                - generic [ref=e377]: Featured
            - article "Testimonial from Priya S." [ref=e378]:
              - generic: "\""
              - blockquote [ref=e379]: The Shadow DOM and iFrame challenges were almost identical to what my interviewer asked. Practicing them directly, instead of only reading theory, cut my prep time dramatically.
              - img "5 out of 5 stars" [ref=e380]: ★★★★★
              - generic [ref=e381]:
                - generic [ref=e382]: PS
                - generic [ref=e383]:
                  - generic [ref=e384]: Priya S.
                  - generic [ref=e385]: Automation Engineer · TCS
            - article "Testimonial from Amit M." [ref=e386]:
              - generic: "\""
              - blockquote [ref=e387]: The roadmap and study tracking gave me a path I could actually follow. Within weeks I had structure, better consistency, and enough confidence to apply for stronger roles.
              - img "5 out of 5 stars" [ref=e388]: ★★★★★
              - generic [ref=e389]:
                - generic [ref=e390]: AM
                - generic [ref=e391]:
                  - generic [ref=e392]: Amit M.
                  - generic [ref=e393]: Junior QA to SDET in 2 months
            - article [ref=e394]:
              - generic: "\""
              - blockquote [ref=e395]: The hands-on Selenium practice and the Bank Demo finally bridged the gap between theory and real-world automation. I used the iFrame and drag-drop exercises before my technical round and felt ready for every question.
              - generic [ref=e396]: ★★★★★
              - generic [ref=e397]:
                - generic [ref=e398]: RK
                - generic [ref=e399]:
                  - generic [ref=e400]: Rahul K.
                  - generic [ref=e401]: SDET · Infosys - Pune
                - generic [ref=e402]: Featured
            - article [ref=e403]:
              - generic: "\""
              - blockquote [ref=e404]: The Shadow DOM and iFrame challenges were almost identical to what my interviewer asked. Practicing them directly, instead of only reading theory, cut my prep time dramatically.
              - generic [ref=e405]: ★★★★★
              - generic [ref=e406]:
                - generic [ref=e407]: PS
                - generic [ref=e408]:
                  - generic [ref=e409]: Priya S.
                  - generic [ref=e410]: Automation Engineer · TCS
            - article [ref=e411]:
              - generic: "\""
              - blockquote [ref=e412]: The roadmap and study tracking gave me a path I could actually follow. Within weeks I had structure, better consistency, and enough confidence to apply for stronger roles.
              - generic [ref=e413]: ★★★★★
              - generic [ref=e414]:
                - generic [ref=e415]: AM
                - generic [ref=e416]:
                  - generic [ref=e417]: Amit M.
                  - generic [ref=e418]: Junior QA to SDET in 2 months
        - generic "Community stats" [ref=e419]:
          - generic [ref=e420]:
            - generic [ref=e421]: 10K+
            - generic [ref=e422]: Active Engineers
          - generic [ref=e423]:
            - generic [ref=e424]: "4.9"
            - generic [ref=e425]: Average Rating
          - generic [ref=e426]:
            - generic [ref=e427]: 100%
            - generic [ref=e428]: Free to use
    - region "Your Next QA Role Starts Here." [ref=e429]:
      - generic [ref=e432]:
        - generic [ref=e433]:
          - generic [ref=e434]: Free to start — sign up to track your progress
          - heading "Your Next QA Role Starts Here." [level=2] [ref=e436]:
            - generic [ref=e437]: Your Next QA Role
            - generic [ref=e438]: Starts Here.
          - paragraph [ref=e439]: Join thousands of QA engineers using one focused platform to practice real automation scenarios, rehearse interviews with AI, and move from preparation to offers with more confidence.
          - group [ref=e440]:
            - link "Start Practicing Free" [ref=e441] [cursor=pointer]:
              - /url: /practice
            - link "Try a Mock Interview" [ref=e442] [cursor=pointer]:
              - /url: /interview-practice
            - link "Browse Jobs" [ref=e443] [cursor=pointer]:
              - /url: /job-crm
          - generic [ref=e444]: Always free · Sign up to save scores, track progress & unlock more
        - generic [ref=e445]:
          - generic [ref=e446]:
            - generic [ref=e447]: What you unlock
            - generic [ref=e448]:
              - generic [ref=e449]:
                - generic [ref=e450]: "01"
                - generic [ref=e451]:
                  - strong [ref=e452]: Live practice targets
                  - paragraph [ref=e453]: Stable UI elements for Selenium, Playwright, Cypress, and pytest workflows.
              - generic [ref=e454]:
                - generic [ref=e455]: "02"
                - generic [ref=e456]:
                  - strong [ref=e457]: Realtime AI interview rounds
                  - paragraph [ref=e458]: Role-play questions, follow-ups, scoring, and model answers after each response.
              - generic [ref=e459]:
                - generic [ref=e460]: "03"
                - generic [ref=e461]:
                  - strong [ref=e462]: Job search momentum
                  - paragraph [ref=e463]: Track openings, draft applications, and manage follow-ups without losing context.
          - generic [ref=e464]:
            - generic [ref=e465]:
              - generic [ref=e466]: 22+
              - generic [ref=e467]: Practice flows
            - generic [ref=e468]:
              - generic [ref=e469]: AI x7
              - generic [ref=e470]: Interview agents
            - generic [ref=e471]:
              - generic [ref=e472]: 100%
              - generic [ref=e473]: Free to use
    - region "Questions? Answered clearly." [ref=e474]:
      - generic [ref=e476]:
        - generic [ref=e477]:
          - generic [ref=e478]: // frequently asked
          - heading "Questions? Answered clearly." [level=2] [ref=e479]:
            - text: Questions?
            - text: Answered clearly.
          - paragraph [ref=e480]: Everything important before you start practicing, interviewing, or tracking jobs inside QA Playground.
          - generic [ref=e481]:
            - generic [ref=e482]: Best fit for
            - generic [ref=e483]:
              - generic [ref=e484]: Beginners
              - generic [ref=e485]: Automation QA
              - generic [ref=e486]: SDET Prep
              - generic [ref=e487]: Interview Practice
            - paragraph [ref=e488]: The product is designed to be useful on day one, even if you are starting with forms and selectors and working toward full E2E frameworks.
        - generic "Frequently asked questions" [ref=e489]:
          - generic [ref=e490]:
            - button "Is QA Playground really free?" [expanded] [ref=e491] [cursor=pointer]:
              - generic [ref=e492]: Is QA Playground really free?
              - generic [ref=e493]: +
            - generic [ref=e495]: Yes. Practice elements, AI mock interviews, and job tools are free to use — no credit card, no paywall. Creating a free account lets you save your progress, track interview scores, and pick up where you left off.
          - generic [ref=e496]:
            - button "Which automation frameworks does it support?" [ref=e497] [cursor=pointer]:
              - generic [ref=e498]: Which automation frameworks does it support?
              - generic [ref=e499]: +
            - generic [ref=e500]: The UI targets are framework-agnostic. You can practice with Selenium, Playwright, Cypress, or Pytest using stable selectors, IDs, and realistic interaction patterns.
          - generic [ref=e501]:
            - button "Do I need to install anything before using it?" [ref=e502] [cursor=pointer]:
              - generic [ref=e503]: Do I need to install anything before using it?
              - generic [ref=e504]: +
            - generic [ref=e505]: No setup is required to use the web experience itself. Open the practice area, choose a challenge, and start writing tests against live components directly in the browser.
          - generic [ref=e506]:
            - button "Is it suitable for complete beginners?" [ref=e507] [cursor=pointer]:
              - generic [ref=e508]: Is it suitable for complete beginners?
              - generic [ref=e509]: +
            - generic [ref=e510]: Yes. The experience is structured across beginner, intermediate, and advanced levels, and the Study Tracker style workflow helps learners move from basics to portfolio-ready practice.
          - generic [ref=e511]:
            - button "Will this help with interviews and job preparation?" [ref=e512] [cursor=pointer]:
              - generic [ref=e513]: Will this help with interviews and job preparation?
              - generic [ref=e514]: +
            - generic [ref=e515]: That is one of the main goals. The product combines practice elements, realistic demo workflows, AI interview rehearsal, and job tracking so users can prepare in one connected flow.
          - generic [ref=e516]:
            - button "How do the AI mock interviews work?" [ref=e517] [cursor=pointer]:
              - generic [ref=e518]: How do the AI mock interviews work?
              - generic [ref=e519]: +
            - generic [ref=e520]: You pick a round or role, the AI interviewer asks real-time questions and follow-ups, and the session provides structured feedback, model answers, and scoring after each response.
          - generic [ref=e521]:
            - button "Can it also help me manage job applications?" [ref=e522] [cursor=pointer]:
              - generic [ref=e523]: Can it also help me manage job applications?
              - generic [ref=e524]: +
            - generic [ref=e525]: Yes. The Jobs Hub includes role discovery, JD review, AI-assisted application drafting, and a personal CRM layer so follow-ups and stages stay organised.
  - contentinfo [ref=e526]:
    - generic [ref=e527]:
      - generic [ref=e528]:
        - generic [ref=e529]:
          - link "QA Playground home" [ref=e530] [cursor=pointer]:
            - /url: /
            - img [ref=e531]
            - generic [ref=e532]: QA Playground
          - paragraph [ref=e533]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e534]:
            - listitem [ref=e535]:
              - link "YouTube" [ref=e536] [cursor=pointer]:
                - /url: https://youtube.com
                - img [ref=e537]
            - listitem [ref=e539]:
              - link "GitHub" [ref=e540] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e541]
            - listitem [ref=e543]:
              - link "X / Twitter" [ref=e544] [cursor=pointer]:
                - /url: https://x.com
                - img [ref=e545]
            - listitem [ref=e547]:
              - link "Telegram" [ref=e548] [cursor=pointer]:
                - /url: https://t.me
                - img [ref=e549]
        - generic [ref=e551]:
          - generic [ref=e552]: Platform
          - list [ref=e553]:
            - listitem [ref=e554]:
              - link "Practice Elements" [ref=e555] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e556]:
              - link "AI Mock Interviews" [ref=e557] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e558]:
              - link "Job Hub & CRM" [ref=e559] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e560]:
              - link "Bank Demo" [ref=e561] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e562]:
              - link "Dashboard" [ref=e563] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e564]:
              - link "QA Tools" [ref=e565] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e566]:
          - generic [ref=e567]: Learn
          - list [ref=e568]:
            - listitem [ref=e569]:
              - link "Blog & Tutorials" [ref=e570] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e571]:
              - link "Resources" [ref=e572] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e573]:
              - link "Interview Questions" [ref=e574] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e575]:
              - link "Automation Framework" [ref=e576] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e577]:
          - generic [ref=e578]: Company
          - list [ref=e579]:
            - listitem [ref=e580]:
              - link "About Us" [ref=e581] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e582]:
              - link "Contact" [ref=e583] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e584]:
              - link "Report an Issue" [ref=e585] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e586]:
              - link "Privacy Policy" [ref=e587] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e588]:
              - link "Login" [ref=e589] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e590]:
        - generic [ref=e591]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e592] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e593]: All rights reserved.
  - alert [ref=e594]
  - button "Send feedback or report an issue" [ref=e595] [cursor=pointer]:
    - img [ref=e596]
```

# Test source

```ts
  1  | import { expect, Page, test, TestInfo  } from "@playwright/test";
  2  | import { normalizeError } from "../../../src/helper/errorResolver";
  3  | import * as allure from "allure-js-commons";
  4  | 
  5  | export async function runComponentStep(
  6  |   componentName: string,
  7  |   page: Page,
  8  |   testInfo: TestInfo,
  9  |   validationFunction: () => Promise<void>,
  10 | ) {
  11 | 
  12 |   try{
  13 |       await test.step(componentName, async() => {
  14 |       await validationFunction();
  15 |     });
  16 |   } catch (error: unknown) {
  17 |       const componentError = normalizeError(error);
  18 | 
  19 |       /*
  20 |      * Attach complete stack trace to Allure.
  21 |      */
  22 |       await allure.attachment(
  23 |         `${componentName} - Exception Stack Trace`,
  24 |         componentError.stack ?? componentError.message,
  25 |         "text/plain",
  26 |       );
  27 | 
  28 |       testInfo.annotations.push({
  29 |       type: "component-failure",
  30 |       description:
  31 |         `${componentName}: ${componentError.message}`,
  32 |       });
  33 | 
  34 |       expect.soft(
  35 |         false,
  36 |         `${componentName} validation failed: ${componentError.message}`,
> 37 |       ).toBe(true);
     |         ^ Error: Header validation failed: page.goto: Protocol error (Page.navigate): Invalid url: ""
  38 | 
  39 |       
  40 |   }
  41 | 
  42 | 
  43 | }
```