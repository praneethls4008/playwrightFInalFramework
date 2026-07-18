# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> QA_PLAYGROUND
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:22:7

# Error details

```
Error: Login btn redirection is not as expected

expect(received).toBe(expected) // Object.is equality

Expected: "/auth/sign-inddd"
Received: "/auth/sign-in"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "QA Playground home" [ref=e5]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e7]: QA Playground
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10]:
            - /url: /
        - listitem [ref=e11]:
          - link "Practice" [ref=e12]:
            - /url: /practice
        - listitem [ref=e13]:
          - link "Demo Apps" [ref=e14]:
            - /url: /demo
        - listitem [ref=e15]:
          - link "Challenges" [ref=e16]:
            - /url: /challenges
        - listitem [ref=e17]:
          - link "Blogs" [ref=e18]:
            - /url: /blog
      - generic [ref=e19]:
        - button "Switch to dark mode" [ref=e20] [cursor=pointer]:
          - img [ref=e22]
        - link "Log in / Sign up" [ref=e24]:
          - /url: /auth/sign-in
        - link "Start Practicing →" [ref=e25]:
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
            - link "Start Practicing Free" [ref=e38]:
              - /url: /practice
              - generic [ref=e39]:
                - generic [ref=e40]:
                  - img
                - generic [ref=e41]: Start Practicing Free
            - link "See what's inside" [ref=e42]:
              - /url: "#features"
              - generic [ref=e43]:
                - generic [ref=e44]: See what's inside
                - generic [ref=e45]:
                  - img
            - link "Mock Interview" [ref=e46]:
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
          - link "Forms & Inputs Beginner" [ref=e94]:
            - /url: /practice/input-fields
            - img [ref=e97]
            - generic [ref=e98]:
              - heading "Forms & Inputs" [level=3] [ref=e99]
              - generic [ref=e100]: Beginner
          - link "Alerts & Dialogs Intermediate" [ref=e101]:
            - /url: /practice/alerts-dialogs
            - img [ref=e104]
            - generic [ref=e105]:
              - heading "Alerts & Dialogs" [level=3] [ref=e106]
              - generic [ref=e107]: Intermediate
          - link "Drag & Drop Advanced" [ref=e108]:
            - /url: /practice/drag-drop
            - img [ref=e111]
            - generic [ref=e112]:
              - heading "Drag & Drop" [level=3] [ref=e113]
              - generic [ref=e114]: Advanced
          - link "iFrames Intermediate" [ref=e115]:
            - /url: /practice/iframes
            - img [ref=e118]
            - generic [ref=e119]:
              - heading "iFrames" [level=3] [ref=e120]
              - generic [ref=e121]: Intermediate
          - link "Shadow DOM Advanced" [ref=e122]:
            - /url: /practice/shadow-dom
            - img [ref=e125]
            - generic [ref=e126]:
              - heading "Shadow DOM" [level=3] [ref=e127]
              - generic [ref=e128]: Advanced
          - link "Dynamic Waits Advanced" [ref=e129]:
            - /url: /practice/dynamic-waits
            - img [ref=e132]
            - generic [ref=e133]:
              - heading "Dynamic Waits" [level=3] [ref=e134]
              - generic [ref=e135]: Advanced
          - link "Data Tables Intermediate" [ref=e136]:
            - /url: /practice/data-table
            - img [ref=e139]
            - generic [ref=e140]:
              - heading "Data Tables" [level=3] [ref=e141]
              - generic [ref=e142]: Intermediate
          - link "Dropdowns Beginner" [ref=e143]:
            - /url: /practice/dropdowns
            - img [ref=e146]
            - generic [ref=e147]:
              - heading "Dropdowns" [level=3] [ref=e148]
              - generic [ref=e149]: Beginner
          - link "Date Pickers Intermediate" [ref=e150]:
            - /url: /practice/date-picker
            - img [ref=e153]
            - generic [ref=e154]:
              - heading "Date Pickers" [level=3] [ref=e155]
              - generic [ref=e156]: Intermediate
          - link "Modal Windows Beginner" [ref=e157]:
            - /url: /practice/modals
            - img [ref=e160]
            - generic [ref=e161]:
              - heading "Modal Windows" [level=3] [ref=e162]
              - generic [ref=e163]: Beginner
          - link "Infinite Scroll Advanced" [ref=e164]:
            - /url: /practice/infinite-scroll
            - img [ref=e167]
            - generic [ref=e168]:
              - heading "Infinite Scroll" [level=3] [ref=e169]
              - generic [ref=e170]: Advanced
          - link "Multi-Tab Windows Intermediate" [ref=e171]:
            - /url: /practice/tabs-windows
            - img [ref=e174]
            - generic [ref=e175]:
              - heading "Multi-Tab Windows" [level=3] [ref=e176]
              - generic [ref=e177]: Intermediate
        - link "View All 14+ Elements →" [ref=e179]:
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
          - link "Core Feature Practice Elements 22+ interactive UI components for automation practice. Shadow DOM, iFrames, drag and drop, dynamic waits, and interview-style test targets. Open practice area ->" [ref=e189]:
            - /url: /practice
            - generic [ref=e190]: Core Feature
            - img [ref=e192]
            - generic [ref=e195]:
              - heading "Practice Elements" [level=3] [ref=e196]
              - paragraph [ref=e197]: 22+ interactive UI components for automation practice. Shadow DOM, iFrames, drag and drop, dynamic waits, and interview-style test targets.
              - generic [ref=e198]: Open practice area ->
          - link "New QA Study Tracker Track progress across focused QA syllabi with charts, streaks, checkpoints, and notes in one place. Start tracking ->" [ref=e199]:
            - /url: /study-tracker/dashboard
            - generic [ref=e200]: New
            - img [ref=e202]
            - generic [ref=e204]:
              - heading "QA Study Tracker" [level=3] [ref=e205]
              - paragraph [ref=e206]: Track progress across focused QA syllabi with charts, streaks, checkpoints, and notes in one place.
              - generic [ref=e207]: Start tracking ->
          - link "New AI Mock Interviews Practice recruiter and technical rounds with realtime AI agents and instant scored feedback. Practice an interview ->" [ref=e208]:
            - /url: "#interview"
            - generic [ref=e209]: New
            - img [ref=e211]
            - generic [ref=e214]:
              - heading "AI Mock Interviews" [level=3] [ref=e215]
              - paragraph [ref=e216]: Practice recruiter and technical rounds with realtime AI agents and instant scored feedback.
              - generic [ref=e217]: Practice an interview ->
          - link "E2E Simulation Bank Demo App A realistic multi-page banking workflow for building a full end-to-end automation suite like a real project. Open bank demo ->" [ref=e218]:
            - /url: /demo/bank
            - generic [ref=e219]: E2E Simulation
            - img [ref=e221]
            - generic [ref=e225]:
              - heading "Bank Demo App" [level=3] [ref=e226]
              - paragraph [ref=e227]: A realistic multi-page banking workflow for building a full end-to-end automation suite like a real project.
              - generic [ref=e228]: Open bank demo ->
          - link "New Job Tracker & CRM Browse QA jobs, draft outreach with AI, and track every application through your pipeline. Explore hub ->" [ref=e229]:
            - /url: "#jobs"
            - generic [ref=e230]: New
            - img [ref=e232]
            - generic [ref=e236]:
              - heading "Job Tracker & CRM" [level=3] [ref=e237]
              - paragraph [ref=e238]: Browse QA jobs, draft outreach with AI, and track every application through your pipeline.
              - generic [ref=e239]: Explore hub ->
          - link "New Browser Extensions Find Chrome tools that help QA in daily workflows, from capture helpers to workflow accelerators. Add to Chrome ->" [ref=e240]:
            - /url: /chrome
            - generic [ref=e241]: New
            - img [ref=e243]
            - generic [ref=e245]:
              - heading "Browser Extensions" [level=3] [ref=e246]
              - paragraph [ref=e247]: Find Chrome tools that help QA in daily workflows, from capture helpers to workflow accelerators.
              - generic [ref=e248]: Add to Chrome ->
          - link "Free QA Tools Data generators, selector helpers, and utility tools right when you need them. Explore tools ->" [ref=e249]:
            - /url: /qa-tools
            - generic [ref=e250]: Free
            - img [ref=e252]
            - generic [ref=e254]:
              - heading "QA Tools" [level=3] [ref=e255]
              - paragraph [ref=e256]: Data generators, selector helpers, and utility tools right when you need them.
              - generic [ref=e257]: Explore tools ->
          - link "Blog & Tutorials Practical QA guides and explainers written from real hands-on testing work. Read articles ->" [ref=e258]:
            - /url: /blog
            - img [ref=e260]
            - generic [ref=e262]:
              - heading "Blog & Tutorials" [level=3] [ref=e263]
              - paragraph [ref=e264]: Practical QA guides and explainers written from real hands-on testing work.
              - generic [ref=e265]: Read articles ->
    - region "From Zero to QA Automation Engineer" [ref=e266]:
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e269]: // your roadmap
          - heading "From Zero to QA Automation Engineer" [level=2] [ref=e270]:
            - generic [ref=e271]: From Zero to
            - generic [ref=e272]: QA Automation Engineer
          - paragraph [ref=e273]: A clear, structured path designed to take you from theory to hired without the overwhelm.
        - list "QA roadmap timeline" [ref=e274]:
          - listitem [ref=e275]:
            - generic [ref=e276]:
              - img [ref=e277]
              - generic [ref=e279]: "01"
            - generic [ref=e280]: Foundation
            - heading "Learn the Basics" [level=3] [ref=e281]
            - paragraph [ref=e282]: Forms, buttons, selectors, and basic interactions. Follow a focused syllabus that builds real confidence before advancing.
            - link "Open Study Tracker ->" [ref=e283]:
              - /url: /study-tracker/dashboard
          - listitem [ref=e284]:
            - generic [ref=e285]:
              - img [ref=e286]
              - generic [ref=e288]: "02"
            - generic [ref=e289]: Hands-On Practice
            - heading "Practice Real Challenges" [level=3] [ref=e290]
            - paragraph [ref=e291]: iFrames, Shadow DOM, dynamic waits, drag and drop. Real UI targets that mirror what you'll face in interviews.
            - link "Browse 22+ Elements ->" [ref=e292]:
              - /url: /practice
          - listitem [ref=e293]:
            - generic [ref=e294]:
              - img [ref=e295]
              - generic [ref=e299]: "03"
            - generic [ref=e300]: Build Portfolio
            - heading "Build an E2E Framework" [level=3] [ref=e301]
            - paragraph [ref=e302]: Build a full suite on the Bank Demo — page objects, assertions, and reporting you can show in interviews.
            - link "Open Bank Demo ->" [ref=e303]:
              - /url: /demo/bank
          - listitem [ref=e304]:
            - generic [ref=e305]:
              - img [ref=e306]
              - generic [ref=e309]: "04"
            - generic [ref=e310]: Interview Prep
            - heading "Rehearse with AI" [level=3] [ref=e311]
            - paragraph [ref=e312]: Run technical and recruiter rounds with AI until your answers feel natural before the real thing.
            - link "Start a Mock Interview ->" [ref=e313]:
              - /url: /#interview
          - listitem [ref=e314]:
            - generic [ref=e315]:
              - img [ref=e316]
              - generic [ref=e321]: "05"
            - generic [ref=e322]: Get Hired
            - heading "Track Jobs and Apply" [level=3] [ref=e323]
            - paragraph [ref=e324]: Spot roles, draft outreach with AI, and track every application in one pipeline.
            - link "Open Job Hub ->" [ref=e325]:
              - /url: /#jobs
    - region "Engineers Who Made the Jump" [ref=e326]:
      - generic [ref=e327]:
        - generic [ref=e328]:
          - generic [ref=e329]: // from the community
          - heading "Engineers Who Made the Jump" [level=2] [ref=e330]:
            - generic [ref=e331]: Engineers Who
            - generic [ref=e332]: Made the Jump
          - paragraph [ref=e333]: Real feedback from QA engineers using the platform to practice harder scenarios, prepare for interviews, and build hiring momentum.
        - generic "Community testimonials" [ref=e334]:
          - generic [ref=e335]:
            - article "Testimonial from Rahul K." [ref=e336]:
              - generic: "\""
              - blockquote [ref=e337]: The hands-on Selenium practice and the Bank Demo finally bridged the gap between theory and real-world automation. I used the iFrame and drag-drop exercises before my technical round and felt ready for every question.
              - img "5 out of 5 stars" [ref=e338]: ★★★★★
              - generic [ref=e339]:
                - generic [ref=e340]: RK
                - generic [ref=e341]:
                  - generic [ref=e342]: Rahul K.
                  - generic [ref=e343]: SDET · Infosys - Pune
                - generic [ref=e344]: Featured
            - article "Testimonial from Priya S." [ref=e345]:
              - generic: "\""
              - blockquote [ref=e346]: The Shadow DOM and iFrame challenges were almost identical to what my interviewer asked. Practicing them directly, instead of only reading theory, cut my prep time dramatically.
              - img "5 out of 5 stars" [ref=e347]: ★★★★★
              - generic [ref=e348]:
                - generic [ref=e349]: PS
                - generic [ref=e350]:
                  - generic [ref=e351]: Priya S.
                  - generic [ref=e352]: Automation Engineer · TCS
            - article "Testimonial from Amit M." [ref=e353]:
              - generic: "\""
              - blockquote [ref=e354]: The roadmap and study tracking gave me a path I could actually follow. Within weeks I had structure, better consistency, and enough confidence to apply for stronger roles.
              - img "5 out of 5 stars" [ref=e355]: ★★★★★
              - generic [ref=e356]:
                - generic [ref=e357]: AM
                - generic [ref=e358]:
                  - generic [ref=e359]: Amit M.
                  - generic [ref=e360]: Junior QA to SDET in 2 months
            - article [ref=e361]:
              - generic: "\""
              - blockquote [ref=e362]: The hands-on Selenium practice and the Bank Demo finally bridged the gap between theory and real-world automation. I used the iFrame and drag-drop exercises before my technical round and felt ready for every question.
              - generic [ref=e363]: ★★★★★
              - generic [ref=e364]:
                - generic [ref=e365]: RK
                - generic [ref=e366]:
                  - generic [ref=e367]: Rahul K.
                  - generic [ref=e368]: SDET · Infosys - Pune
                - generic [ref=e369]: Featured
            - article [ref=e370]:
              - generic: "\""
              - blockquote [ref=e371]: The Shadow DOM and iFrame challenges were almost identical to what my interviewer asked. Practicing them directly, instead of only reading theory, cut my prep time dramatically.
              - generic [ref=e372]: ★★★★★
              - generic [ref=e373]:
                - generic [ref=e374]: PS
                - generic [ref=e375]:
                  - generic [ref=e376]: Priya S.
                  - generic [ref=e377]: Automation Engineer · TCS
            - article [ref=e378]:
              - generic: "\""
              - blockquote [ref=e379]: The roadmap and study tracking gave me a path I could actually follow. Within weeks I had structure, better consistency, and enough confidence to apply for stronger roles.
              - generic [ref=e380]: ★★★★★
              - generic [ref=e381]:
                - generic [ref=e382]: AM
                - generic [ref=e383]:
                  - generic [ref=e384]: Amit M.
                  - generic [ref=e385]: Junior QA to SDET in 2 months
        - generic "Community stats" [ref=e386]:
          - generic [ref=e387]:
            - generic [ref=e388]: 10K+
            - generic [ref=e389]: Active Engineers
          - generic [ref=e390]:
            - generic [ref=e391]: "4.9"
            - generic [ref=e392]: Average Rating
          - generic [ref=e393]:
            - generic [ref=e394]: 100%
            - generic [ref=e395]: Free to use
    - region "Your Next QA Role Starts Here." [ref=e396]:
      - generic [ref=e399]:
        - generic [ref=e400]:
          - generic [ref=e401]: Free to start — sign up to track your progress
          - heading "Your Next QA Role Starts Here." [level=2] [ref=e403]:
            - generic [ref=e404]: Your Next QA Role
            - generic [ref=e405]: Starts Here.
          - paragraph [ref=e406]: Join thousands of QA engineers using one focused platform to practice real automation scenarios, rehearse interviews with AI, and move from preparation to offers with more confidence.
          - group [ref=e407]:
            - link "Start Practicing Free" [ref=e408]:
              - /url: /practice
            - link "Try a Mock Interview" [ref=e409]:
              - /url: /interview-practice
            - link "Browse Jobs" [ref=e410]:
              - /url: /job-crm
          - generic [ref=e411]: Always free · Sign up to save scores, track progress & unlock more
        - generic [ref=e412]:
          - generic [ref=e413]:
            - generic [ref=e414]: What you unlock
            - generic [ref=e415]:
              - generic [ref=e416]:
                - generic [ref=e417]: "01"
                - generic [ref=e418]:
                  - strong [ref=e419]: Live practice targets
                  - paragraph [ref=e420]: Stable UI elements for Selenium, Playwright, Cypress, and pytest workflows.
              - generic [ref=e421]:
                - generic [ref=e422]: "02"
                - generic [ref=e423]:
                  - strong [ref=e424]: Realtime AI interview rounds
                  - paragraph [ref=e425]: Role-play questions, follow-ups, scoring, and model answers after each response.
              - generic [ref=e426]:
                - generic [ref=e427]: "03"
                - generic [ref=e428]:
                  - strong [ref=e429]: Job search momentum
                  - paragraph [ref=e430]: Track openings, draft applications, and manage follow-ups without losing context.
          - generic [ref=e431]:
            - generic [ref=e432]:
              - generic [ref=e433]: 22+
              - generic [ref=e434]: Practice flows
            - generic [ref=e435]:
              - generic [ref=e436]: AI x7
              - generic [ref=e437]: Interview agents
            - generic [ref=e438]:
              - generic [ref=e439]: 100%
              - generic [ref=e440]: Free to use
    - region "Questions? Answered clearly." [ref=e441]:
      - generic [ref=e443]:
        - generic [ref=e444]:
          - generic [ref=e445]: // frequently asked
          - heading "Questions? Answered clearly." [level=2] [ref=e446]:
            - text: Questions?
            - text: Answered clearly.
          - paragraph [ref=e447]: Everything important before you start practicing, interviewing, or tracking jobs inside QA Playground.
          - generic [ref=e448]:
            - generic [ref=e449]: Best fit for
            - generic [ref=e450]:
              - generic [ref=e451]: Beginners
              - generic [ref=e452]: Automation QA
              - generic [ref=e453]: SDET Prep
              - generic [ref=e454]: Interview Practice
            - paragraph [ref=e455]: The product is designed to be useful on day one, even if you are starting with forms and selectors and working toward full E2E frameworks.
        - generic "Frequently asked questions" [ref=e456]:
          - generic [ref=e457]:
            - button "Is QA Playground really free?" [expanded] [ref=e458] [cursor=pointer]:
              - generic [ref=e459]: Is QA Playground really free?
              - generic [ref=e460]: +
            - generic [ref=e462]: Yes. Practice elements, AI mock interviews, and job tools are free to use — no credit card, no paywall. Creating a free account lets you save your progress, track interview scores, and pick up where you left off.
          - generic [ref=e463]:
            - button "Which automation frameworks does it support?" [ref=e464] [cursor=pointer]:
              - generic [ref=e465]: Which automation frameworks does it support?
              - generic [ref=e466]: +
            - generic [ref=e467]: The UI targets are framework-agnostic. You can practice with Selenium, Playwright, Cypress, or Pytest using stable selectors, IDs, and realistic interaction patterns.
          - generic [ref=e468]:
            - button "Do I need to install anything before using it?" [ref=e469] [cursor=pointer]:
              - generic [ref=e470]: Do I need to install anything before using it?
              - generic [ref=e471]: +
            - generic [ref=e472]: No setup is required to use the web experience itself. Open the practice area, choose a challenge, and start writing tests against live components directly in the browser.
          - generic [ref=e473]:
            - button "Is it suitable for complete beginners?" [ref=e474] [cursor=pointer]:
              - generic [ref=e475]: Is it suitable for complete beginners?
              - generic [ref=e476]: +
            - generic [ref=e477]: Yes. The experience is structured across beginner, intermediate, and advanced levels, and the Study Tracker style workflow helps learners move from basics to portfolio-ready practice.
          - generic [ref=e478]:
            - button "Will this help with interviews and job preparation?" [ref=e479] [cursor=pointer]:
              - generic [ref=e480]: Will this help with interviews and job preparation?
              - generic [ref=e481]: +
            - generic [ref=e482]: That is one of the main goals. The product combines practice elements, realistic demo workflows, AI interview rehearsal, and job tracking so users can prepare in one connected flow.
          - generic [ref=e483]:
            - button "How do the AI mock interviews work?" [ref=e484] [cursor=pointer]:
              - generic [ref=e485]: How do the AI mock interviews work?
              - generic [ref=e486]: +
            - generic [ref=e487]: You pick a round or role, the AI interviewer asks real-time questions and follow-ups, and the session provides structured feedback, model answers, and scoring after each response.
          - generic [ref=e488]:
            - button "Can it also help me manage job applications?" [ref=e489] [cursor=pointer]:
              - generic [ref=e490]: Can it also help me manage job applications?
              - generic [ref=e491]: +
            - generic [ref=e492]: Yes. The Jobs Hub includes role discovery, JD review, AI-assisted application drafting, and a personal CRM layer so follow-ups and stages stay organised.
  - contentinfo [ref=e493]:
    - generic [ref=e494]:
      - generic [ref=e495]:
        - generic [ref=e496]:
          - link "QA Playground home" [ref=e497]:
            - /url: /
            - img [ref=e498]
            - generic [ref=e499]: QA Playground
          - paragraph [ref=e500]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e501]:
            - listitem [ref=e502]:
              - link "YouTube" [ref=e503]:
                - /url: https://youtube.com
                - img [ref=e504]
            - listitem [ref=e506]:
              - link "GitHub" [ref=e507]:
                - /url: https://github.com/kundalik-dev
                - img [ref=e508]
            - listitem [ref=e510]:
              - link "X / Twitter" [ref=e511]:
                - /url: https://x.com
                - img [ref=e512]
            - listitem [ref=e514]:
              - link "Telegram" [ref=e515]:
                - /url: https://t.me
                - img [ref=e516]
        - generic [ref=e518]:
          - generic [ref=e519]: Platform
          - list [ref=e520]:
            - listitem [ref=e521]:
              - link "Practice Elements" [ref=e522]:
                - /url: /practice
            - listitem [ref=e523]:
              - link "AI Mock Interviews" [ref=e524]:
                - /url: /interview-practice
            - listitem [ref=e525]:
              - link "Job Hub & CRM" [ref=e526]:
                - /url: /job-crm
            - listitem [ref=e527]:
              - link "Bank Demo" [ref=e528]:
                - /url: /demo/bank
            - listitem [ref=e529]:
              - link "Dashboard" [ref=e530]:
                - /url: /dashboard
            - listitem [ref=e531]:
              - link "QA Tools" [ref=e532]:
                - /url: /qa-tools
        - generic [ref=e533]:
          - generic [ref=e534]: Learn
          - list [ref=e535]:
            - listitem [ref=e536]:
              - link "Blog & Tutorials" [ref=e537]:
                - /url: /blog
            - listitem [ref=e538]:
              - link "Resources" [ref=e539]:
                - /url: /resources
            - listitem [ref=e540]:
              - link "Interview Questions" [ref=e541]:
                - /url: /interview-questions
            - listitem [ref=e542]:
              - link "Automation Framework" [ref=e543]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e544]:
          - generic [ref=e545]: Company
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link "About Us" [ref=e548]:
                - /url: /about-us
            - listitem [ref=e549]:
              - link "Contact" [ref=e550]:
                - /url: /contact-us
            - listitem [ref=e551]:
              - link "Report an Issue" [ref=e552]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e553]:
              - link "Privacy Policy" [ref=e554]:
                - /url: /privacy-policy
            - listitem [ref=e555]:
              - link "Login" [ref=e556]:
                - /url: /auth/sign-in
      - generic [ref=e557]:
        - generic [ref=e558]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e559]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e560]: All rights reserved.
  - alert [ref=e561]
  - button "Send feedback or report an issue" [ref=e562] [cursor=pointer]:
    - img [ref=e563]
```

# Test source

```ts
  1  | import test, { expect, Page } from "@playwright/test";
  2  | import { PAGE, PageType } from "../../../../src/data/urls/aem.urls.data";
  3  | import { QAPlaygroundHeaderComponent } from "../../../../src/component/header/QAPlaygroundHeaderComponent";
  4  | import { QAPlaygroundHeaderData } from "../../../../src/data/component/header/qaPlaygroundHeader.data";
  5  | import { loadData } from "../../../../src/helper/test-data-helper/headerDataHelper";
  6  | 
  7  | export async function validateQAPlaygroundHeader(page: Page, pageType: PageType, pageName: PAGE) {
  8  |     const headerComponent = new QAPlaygroundHeaderComponent(page);
  9  | 
  10 |     await test.step('Banner Validation',
  11 |       async() => {
  12 |         const actualBannerText = await headerComponent.getBannerText();
  13 |         expect.soft(actualBannerText, 'banner text is not as expected').toBe(QAPlaygroundHeaderData.banner.text);
  14 | 
  15 |         const actualBannerLink = await headerComponent.getBannerLink();
  16 |         expect.soft(actualBannerLink, 'banner link is not as expected').toBe((QAPlaygroundHeaderData.banner.href));
  17 |       }
  18 |     )
  19 | 
  20 | 
  21 |     await test.step('Menu validation',
  22 |       async() => {
  23 |         const actualMenusItems = await headerComponent.getMenuLinks();
  24 |         expect.soft(actualMenusItems, 'Menu Items are not as expected').toEqual(QAPlaygroundHeaderData.menuItems);
  25 | 
  26 |       }
  27 |     )
  28 | 
  29 | 
  30 |     await test.step('login btn validation',
  31 |       async() => {
  32 |         
  33 |         const actualLoginBtnHref = await headerComponent.getLoginOrSignupBtnHref();
> 34 |         expect.soft(actualLoginBtnHref, 'Login btn redirection is not as expected').toBe(QAPlaygroundHeaderData.loginBtnHref+"ddd");
     |                                                                                     ^ Error: Login btn redirection is not as expected
  35 |         
  36 |       }
  37 |     )
  38 | }
  39 | 
```