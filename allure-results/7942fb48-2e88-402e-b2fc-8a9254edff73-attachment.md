# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> FAKE_STORE
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:32:9

# Error details

```
TimeoutError: page.goto: Timeout 3000ms exceeded.
Call log:
  - navigating to "https://letcode.in/home", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home" [ref=e6]:
        - /url: /
        - img "LetCode" [ref=e7]
      - generic [ref=e8]:
        - link "Work-Space" [ref=e9]:
          - /url: /test
        - generic [ref=e10]:
          - button "Products" [ref=e11] [cursor=pointer]:
            - text: Products
            - img [ref=e12]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e15]:
          - button "Grooming" [ref=e16] [cursor=pointer]:
            - text: Grooming
            - img [ref=e17]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
        - link "Courses" [ref=e20]:
          - /url: /courses
        - link "Contact" [ref=e21]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
        - img [ref=e24]
  - main [ref=e26]:
    - generic [ref=e29]:
      - generic [ref=e30]:
        - generic [ref=e31]:
          - heading "Fake Store" [level=1] [ref=e32]
          - heading "Products" [level=2] [ref=e33]
        - generic [ref=e34]:
          - link "" [ref=e35]:
            - /url: /cart
            - generic [ref=e37]: 
          - link "" [ref=e38]:
            - /url: /login
            - generic [ref=e40]: 
      - generic [ref=e41]:
        - generic [ref=e42] [cursor=pointer]:
          - generic [ref=e43]:
            - heading "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" [level=3] [ref=e44]
            - generic [ref=e45]:
              - img "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            - paragraph [ref=e46]: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
          - button "₹ 109.95" [ref=e48]
        - generic [ref=e49] [cursor=pointer]:
          - generic [ref=e50]:
            - heading "Mens Casual Premium Slim Fit T-Shirts" [level=3] [ref=e51]
            - img "Mens Casual Premium Slim Fit T-Shirts" [ref=e53]
            - paragraph [ref=e54]: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.
          - button "₹ 22.3" [ref=e56]
        - generic [ref=e57] [cursor=pointer]:
          - generic [ref=e58]:
            - heading "Mens Cotton Jacket" [level=3] [ref=e59]
            - generic [ref=e60]:
              - img "Mens Cotton Jacket"
            - paragraph [ref=e61]: great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.
          - button "₹ 55.99" [ref=e63]
        - generic [ref=e64] [cursor=pointer]:
          - generic [ref=e65]:
            - heading "Mens Casual Slim Fit" [level=3] [ref=e66]
            - generic [ref=e67]:
              - img "Mens Casual Slim Fit"
            - paragraph [ref=e68]: The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.
          - button "₹ 15.99" [ref=e70]
        - generic [ref=e71] [cursor=pointer]:
          - generic [ref=e72]:
            - heading "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" [level=3] [ref=e73]
            - generic [ref=e74]:
              - img "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
            - paragraph [ref=e75]: From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.
          - button "₹ 695" [ref=e77]
        - generic [ref=e78] [cursor=pointer]:
          - generic [ref=e79]:
            - heading "Solid Gold Petite Micropave" [level=3] [ref=e80]
            - generic [ref=e81]:
              - img "Solid Gold Petite Micropave"
            - paragraph [ref=e82]: Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.
          - button "₹ 168" [ref=e84]
        - generic [ref=e85] [cursor=pointer]:
          - generic [ref=e86]:
            - heading "White Gold Plated Princess" [level=3] [ref=e87]
            - generic [ref=e88]:
              - img "White Gold Plated Princess"
            - paragraph [ref=e89]: Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...
          - button "₹ 9.99" [ref=e91]
        - generic [ref=e92] [cursor=pointer]:
          - generic [ref=e93]:
            - heading "Pierced Owl Rose Gold Plated Stainless Steel Double" [level=3] [ref=e94]
            - generic [ref=e95]:
              - img "Pierced Owl Rose Gold Plated Stainless Steel Double"
            - paragraph [ref=e96]: Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel
          - button "₹ 10.99" [ref=e98]
        - generic [ref=e99] [cursor=pointer]:
          - generic [ref=e100]:
            - heading "WD 2TB Elements Portable External Hard Drive - USB 3.0" [level=3] [ref=e101]
            - generic [ref=e102]:
              - img "WD 2TB Elements Portable External Hard Drive - USB 3.0"
            - paragraph [ref=e103]: USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system
          - button "₹ 64" [ref=e105]
        - generic [ref=e106] [cursor=pointer]:
          - generic [ref=e107]:
            - heading "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s" [level=3] [ref=e108]
            - generic [ref=e109]:
              - img "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
            - paragraph [ref=e110]: Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)
          - button "₹ 109" [ref=e112]
        - generic [ref=e113] [cursor=pointer]:
          - generic [ref=e114]:
            - heading "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5" [level=3] [ref=e115]
            - generic [ref=e116]:
              - img "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
            - paragraph [ref=e117]: 3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.
          - button "₹ 109" [ref=e119]
        - generic [ref=e120] [cursor=pointer]:
          - generic [ref=e121]:
            - heading "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive" [level=3] [ref=e122]
            - generic [ref=e123]:
              - img "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
            - paragraph [ref=e124]: Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty
          - button "₹ 114" [ref=e126]
        - generic [ref=e127] [cursor=pointer]:
          - generic [ref=e128]:
            - heading "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin" [level=3] [ref=e129]
            - generic [ref=e130]:
              - img "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
            - paragraph [ref=e131]: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz"
          - button "₹ 599" [ref=e133]
        - generic [ref=e134] [cursor=pointer]:
          - generic [ref=e135]:
            - heading "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED" [level=3] [ref=e136]
            - generic [ref=e137]:
              - img "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
            - paragraph [ref=e138]: 49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag
          - button "₹ 999.99" [ref=e140]
        - generic [ref=e141] [cursor=pointer]:
          - generic [ref=e142]:
            - heading "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats" [level=3] [ref=e143]
            - generic [ref=e144]:
              - img "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
            - paragraph [ref=e145]: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates"
          - button "₹ 56.99" [ref=e147]
        - generic [ref=e148] [cursor=pointer]:
          - generic [ref=e149]:
            - heading "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket" [level=3] [ref=e150]
            - generic [ref=e151]:
              - img "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
            - paragraph [ref=e152]: 100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
          - button "₹ 29.95" [ref=e154]
        - generic [ref=e155] [cursor=pointer]:
          - generic [ref=e156]:
            - heading "Rain Jacket Women Windbreaker Striped Climbing Raincoats" [level=3] [ref=e157]
            - generic [ref=e158]:
              - img "Rain Jacket Women Windbreaker Striped Climbing Raincoats"
            - paragraph [ref=e159]: Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.
          - button "₹ 39.99" [ref=e161]
        - generic [ref=e162] [cursor=pointer]:
          - generic [ref=e163]:
            - heading "MBJ Women's Solid Short Sleeve Boat Neck V" [level=3] [ref=e164]
            - generic [ref=e165]:
              - img "MBJ Women's Solid Short Sleeve Boat Neck V"
            - paragraph [ref=e166]: 95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem
          - button "₹ 9.85" [ref=e168]
        - generic [ref=e169] [cursor=pointer]:
          - generic [ref=e170]:
            - heading "Opna Women's Short Sleeve Moisture" [level=3] [ref=e171]
            - generic [ref=e172]:
              - img "Opna Women's Short Sleeve Moisture"
            - paragraph [ref=e173]: 100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort
          - button "₹ 7.95" [ref=e175]
        - generic [ref=e176] [cursor=pointer]:
          - generic [ref=e177]:
            - heading "DANVOUY Womens T Shirt Casual Cotton Short" [level=3] [ref=e178]
            - generic [ref=e179]:
              - img "DANVOUY Womens T Shirt Casual Cotton Short"
            - paragraph [ref=e180]: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter."
          - button "₹ 12.99" [ref=e182]
      - generic [ref=e183]:
        - text: "Credit: Built using"
        - link "Fakestoreapi" [ref=e184]:
          - /url: https://fakestoreapi.com/
  - contentinfo [ref=e185]:
    - generic [ref=e186]:
      - paragraph [ref=e187]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e188]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e189]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
      - generic [ref=e190]:
        - link "GitHub" [ref=e191]:
          - /url: https://github.com/ortoniKC
          - img [ref=e192]
        - link "YouTube" [ref=e195]:
          - /url: https://www.youtube.com/@letcode
          - img [ref=e196]
        - link "LinkedIn" [ref=e199]:
          - /url: https://www.linkedin.com/in/ortoni/
          - img [ref=e200]
        - link "Contact" [ref=e205]:
          - /url: /contact
        - link "🍕 Support" [ref=e206]:
          - /url: https://buymeacoffee.com/letcode
```

# Test source

```ts
  1   | import { expect, Page, test } from "@playwright/test";
  2   | import { validateHeader } from "../helper/headerComponentTests";
  3   | import { PAGE } from "../../../src/data/urls/aem.urls.data"
  4   | import { getUrlsToRun } from "../../../src/helper/getUrlsToRun";
  5   | import { getFullUrl, getPageType } from "../../../src/helper/urlResolver";
  6   | import { validateFooter } from "../helper/footerComponentTests";
  7   | import { validateDisclaimer } from "../helper/disclaimerComponentTest";
  8   | import * as allure from "allure-js-commons";
  9   | 
  10  | const PAGES_NAMES:Array<PAGE> = getUrlsToRun();
  11  | 
  12  | 
  13  | for(const pageName of PAGES_NAMES){
  14  |     createFullPageRegressionSuite(pageName);
  15  | };
  16  | 
  17  | async function navigateToUrl(page:Page, fullUrl: string){
  18  |      
> 19  |     const response = await page.goto(fullUrl,
      |                                 ^ TimeoutError: page.goto: Timeout 3000ms exceeded.
  20  |     {
  21  |         waitUntil: 'domcontentloaded',
  22  |         timeout: 3000 //30-sec
  23  |     });
  24  |     await page.waitForSelector('body', {state: 'attached'});
  25  |     return response;
  26  | };
  27  | 
  28  | function createFullPageRegressionSuite(pageName: PAGE){
  29  |     const fullUrl = getFullUrl(pageName);
  30  |     const pageType = getPageType(pageName);
  31  | 
  32  |     test(`${pageName}`,
  33  |         { tag: ['@FullPageRegression'] },
  34  |         async({page}, testInfo)=>{
  35  |        
  36  |          //Page status check
  37  |         try{
  38  |             await test.step(`Check status code`, async()=>{
  39  |             const response = await navigateToUrl(page, fullUrl);
  40  |             expect(response?.status()).toBe(200);
  41  |         })
  42  |         }catch (e) {
  43  |           await allure.attachment(
  44  |             "Exception Stack Trace",
  45  |             e instanceof Error ? e.stack || e.message : String(e),
  46  |             "text/plain"
  47  |           );
  48  |         }
  49  |         
  50  | 
  51  |         //Header component validation
  52  |         try {
  53  |           await test.step(`Header`, async () => {
  54  |             await navigateToUrl(page, fullUrl);
  55  |             await validateHeader(page, pageType);
  56  |           });
  57  |         } catch (e) {
  58  |           await allure.attachment(
  59  |             "Exception Stack Trace",
  60  |             e instanceof Error ? e.stack || e.message : String(e),
  61  |             "text/plain"
  62  |           );
  63  | 
  64  |           // 2. Optional: Add the error message as a description or tag
  65  |           await allure.description(`Failed due to: ${e.message}`);
  66  | 
  67  |           // 3. Crucial: Rethrow the error so Playwright marks the test as FAILED
  68  |           throw e;
  69  |         }
  70  | 
  71  |         //Footer component validation
  72  |         try{
  73  |         await test.step(`Footer`, async () => {
  74  |             await validateFooter();
  75  |         });
  76  |         }catch (e) {
  77  |           await allure.attachment(
  78  |             "Exception Stack Trace",
  79  |             e instanceof Error ? e.stack || e.message : String(e),
  80  |             "text/plain"
  81  |           );
  82  |         }
  83  | 
  84  |         //Disclaimer component validation
  85  |         try{
  86  |         await test.step(`Disclaimer`, async () => {
  87  |             await validateDisclaimer();
  88  |         });
  89  |         }catch (e) {
  90  |           await allure.attachment(
  91  |             "Exception Stack Trace",
  92  |             e instanceof Error ? e.stack || e.message : String(e),
  93  |             "text/plain"
  94  |           );
  95  |         }
  96  | 
  97  |     });  
  98  | };
  99  | 
  100 | 
```