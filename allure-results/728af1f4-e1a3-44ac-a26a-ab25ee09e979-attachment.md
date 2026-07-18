# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> FAKE_STORE
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:22:7

# Error details

```
Error: Header validation failed: locator.click: Timeout 1000ms exceeded.
Call log:
  - waiting for getByTestId('header').locator('//btn[@class="arrow"]').first()


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - paragraph [ref=e43]: Loading products...
        - generic [ref=e44]:
          - link "Credit" [ref=e45] [cursor=pointer]:
            - /url: "#"
            - img [ref=e46]
            - text: Credit
          - text: ": Built using"
          - link "Fakestoreapi" [ref=e48]:
            - /url: https://fakestoreapi.com/
          - link "Credit & Lending" [ref=e49] [cursor=pointer]:
            - img [ref=e51]
            - text: Credit & Lending
    - contentinfo [ref=e53]:
      - generic [ref=e54]:
        - paragraph [ref=e55]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e56]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e57]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e58]:
          - link "GitHub" [ref=e59]:
            - /url: https://github.com/ortoniKC
            - img [ref=e60]
          - link "YouTube" [ref=e63]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e64]
          - link "LinkedIn" [ref=e67]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e68]
          - link "Contact" [ref=e73]:
            - /url: /contact
          - link "🍕 Support" [ref=e74]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e76]:
    - generic [ref=e79]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e81]: Discover more
      - link "Computer Education" [ref=e82] [cursor=pointer]:
        - generic "Computer Education" [ref=e83]
        - img [ref=e85]
      - link "Career Resources & Planning" [ref=e87] [cursor=pointer]:
        - generic "Career Resources & Planning" [ref=e88]
        - img [ref=e90]
      - link "Programming" [ref=e92] [cursor=pointer]:
        - generic "Programming" [ref=e93]
        - img [ref=e95]
  - insertion [ref=e97]:
    - iframe [ref=e100]:
      - generic [active] [ref=f5e1]:
        - generic [ref=f5e6]:
          - link "Coursera" [ref=f5e10] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CD3XpjI5aar7lE5OQ77APq9zSqQ7n6oKviAGimrPGxBWM_9_ijA8QASDTkZYiYOXq4wOgAaa_qboDyAEBqQKZMG0P-E1GPqgDAcgDywSqBP8BT9BsiGBRi9j1pL8f-tk-GxrBsekJfhwRxbTSynIpci3lDo0felVQq2ryrrT7oDvW94yDymnjNy8Lc6500Rp0fHWJLDxyVoaTZfXZDDl-l_O49phw7EHIcdBvX7M1o_Aj_1gf1PXUjKnogPJfljcA04vNlGkkItmMxw6O-X3OGDrUrHXKajKNgzHbY5SpWQifaUZR8u07rynGW6MeJK9t4q_axYc0FZTy0xNHhPZFcgBGKdZ0ypCzhdJNhfYRCCA5p0FsD0F70N5TUDyicMG5C30Vc6mEPzZUJliIiv6IAYAoYuqmL3iKzf-om1ww7ZLNyD9rmMOXiUW--fa0Ati7wASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt7zyzMTalQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwi24PLMxNqVAxUTyBsAHSuuNOWIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvtvyzMTalQMVE8gbAB0rrjTlEAEYASAAEgKa2fD_BwE&num=1&cid=CAQShgIAEQoqga5AMoN9K_q8ied-PSxej7HY3gwcdHb7uOctwz5qti_7SbmpltA6-RTnYQg6gmO1LdHIYPY7TbVk90Lq4IsiTQXez2vYweeDD0ufLQk1JeP1ArrFSXsx9w23Om6pkubnB-klniBnbvF4DN2L6iEYI3z6vzHgQqwWGM67EE3bvmd8rTfd08Og4rLuoH8qhrQagVYJCbSk7mpvs6CsW8CaHkVjYGqKnLSLCptsS6yNS41B5QaSw9Bd-mTosdaomxIAijBIE8m31Dzy-N9sF4VrwvzG7cWhlJKmkjQcm9JD-xKh3Cv95lWzaGYO2DMTT9xSAYz78mCtiLeHuWTHIhweO5fAGAE&sig=AOD64_2HPnrFc7uEZkYgmvsrtba88JJ87A&client=ca-pub-6251538267574677&rf=1&nb=19&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381
            - img "Coursera" [ref=f5e11]
          - generic [ref=f5e13]:
            - generic "Coursera" [ref=f5e14]:
              - link "Coursera" [ref=f5e15] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CD3XpjI5aar7lE5OQ77APq9zSqQ7n6oKviAGimrPGxBWM_9_ijA8QASDTkZYiYOXq4wOgAaa_qboDyAEBqQKZMG0P-E1GPqgDAcgDywSqBP8BT9BsiGBRi9j1pL8f-tk-GxrBsekJfhwRxbTSynIpci3lDo0felVQq2ryrrT7oDvW94yDymnjNy8Lc6500Rp0fHWJLDxyVoaTZfXZDDl-l_O49phw7EHIcdBvX7M1o_Aj_1gf1PXUjKnogPJfljcA04vNlGkkItmMxw6O-X3OGDrUrHXKajKNgzHbY5SpWQifaUZR8u07rynGW6MeJK9t4q_axYc0FZTy0xNHhPZFcgBGKdZ0ypCzhdJNhfYRCCA5p0FsD0F70N5TUDyicMG5C30Vc6mEPzZUJliIiv6IAYAoYuqmL3iKzf-om1ww7ZLNyD9rmMOXiUW--fa0Ati7wASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt7zyzMTalQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwi24PLMxNqVAxUTyBsAHSuuNOWIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvtvyzMTalQMVE8gbAB0rrjTlEAEYASAAEgKa2fD_BwE&num=1&cid=CAQShgIAEQoqga5AMoN9K_q8ied-PSxej7HY3gwcdHb7uOctwz5qti_7SbmpltA6-RTnYQg6gmO1LdHIYPY7TbVk90Lq4IsiTQXez2vYweeDD0ufLQk1JeP1ArrFSXsx9w23Om6pkubnB-klniBnbvF4DN2L6iEYI3z6vzHgQqwWGM67EE3bvmd8rTfd08Og4rLuoH8qhrQagVYJCbSk7mpvs6CsW8CaHkVjYGqKnLSLCptsS6yNS41B5QaSw9Bd-mTosdaomxIAijBIE8m31Dzy-N9sF4VrwvzG7cWhlJKmkjQcm9JD-xKh3Cv95lWzaGYO2DMTT9xSAYz78mCtiLeHuWTHIhweO5fAGAE&sig=AOD64_2HPnrFc7uEZkYgmvsrtba88JJ87A&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381
            - generic "Coursera" [ref=f5e16]:
              - link "New Google AI Certificate" [ref=f5e17] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CD3XpjI5aar7lE5OQ77APq9zSqQ7n6oKviAGimrPGxBWM_9_ijA8QASDTkZYiYOXq4wOgAaa_qboDyAEBqQKZMG0P-E1GPqgDAcgDywSqBP8BT9BsiGBRi9j1pL8f-tk-GxrBsekJfhwRxbTSynIpci3lDo0felVQq2ryrrT7oDvW94yDymnjNy8Lc6500Rp0fHWJLDxyVoaTZfXZDDl-l_O49phw7EHIcdBvX7M1o_Aj_1gf1PXUjKnogPJfljcA04vNlGkkItmMxw6O-X3OGDrUrHXKajKNgzHbY5SpWQifaUZR8u07rynGW6MeJK9t4q_axYc0FZTy0xNHhPZFcgBGKdZ0ypCzhdJNhfYRCCA5p0FsD0F70N5TUDyicMG5C30Vc6mEPzZUJliIiv6IAYAoYuqmL3iKzf-om1ww7ZLNyD9rmMOXiUW--fa0Ati7wASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt7zyzMTalQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwi24PLMxNqVAxUTyBsAHSuuNOWIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvtvyzMTalQMVE8gbAB0rrjTlEAEYASAAEgKa2fD_BwE&num=1&cid=CAQShgIAEQoqga5AMoN9K_q8ied-PSxej7HY3gwcdHb7uOctwz5qti_7SbmpltA6-RTnYQg6gmO1LdHIYPY7TbVk90Lq4IsiTQXez2vYweeDD0ufLQk1JeP1ArrFSXsx9w23Om6pkubnB-klniBnbvF4DN2L6iEYI3z6vzHgQqwWGM67EE3bvmd8rTfd08Og4rLuoH8qhrQagVYJCbSk7mpvs6CsW8CaHkVjYGqKnLSLCptsS6yNS41B5QaSw9Bd-mTosdaomxIAijBIE8m31Dzy-N9sF4VrwvzG7cWhlJKmkjQcm9JD-xKh3Cv95lWzaGYO2DMTT9xSAYz78mCtiLeHuWTHIhweO5fAGAE&sig=AOD64_2HPnrFc7uEZkYgmvsrtba88JJ87A&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381
            - generic "Coursera" [ref=f5e18]:
              - link "Enroll in the new Google AI Professional Certificate today." [ref=f5e19] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CD3XpjI5aar7lE5OQ77APq9zSqQ7n6oKviAGimrPGxBWM_9_ijA8QASDTkZYiYOXq4wOgAaa_qboDyAEBqQKZMG0P-E1GPqgDAcgDywSqBP8BT9BsiGBRi9j1pL8f-tk-GxrBsekJfhwRxbTSynIpci3lDo0felVQq2ryrrT7oDvW94yDymnjNy8Lc6500Rp0fHWJLDxyVoaTZfXZDDl-l_O49phw7EHIcdBvX7M1o_Aj_1gf1PXUjKnogPJfljcA04vNlGkkItmMxw6O-X3OGDrUrHXKajKNgzHbY5SpWQifaUZR8u07rynGW6MeJK9t4q_axYc0FZTy0xNHhPZFcgBGKdZ0ypCzhdJNhfYRCCA5p0FsD0F70N5TUDyicMG5C30Vc6mEPzZUJliIiv6IAYAoYuqmL3iKzf-om1ww7ZLNyD9rmMOXiUW--fa0Ati7wASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt7zyzMTalQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwi24PLMxNqVAxUTyBsAHSuuNOWIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvtvyzMTalQMVE8gbAB0rrjTlEAEYASAAEgKa2fD_BwE&num=1&cid=CAQShgIAEQoqga5AMoN9K_q8ied-PSxej7HY3gwcdHb7uOctwz5qti_7SbmpltA6-RTnYQg6gmO1LdHIYPY7TbVk90Lq4IsiTQXez2vYweeDD0ufLQk1JeP1ArrFSXsx9w23Om6pkubnB-klniBnbvF4DN2L6iEYI3z6vzHgQqwWGM67EE3bvmd8rTfd08Og4rLuoH8qhrQagVYJCbSk7mpvs6CsW8CaHkVjYGqKnLSLCptsS6yNS41B5QaSw9Bd-mTosdaomxIAijBIE8m31Dzy-N9sF4VrwvzG7cWhlJKmkjQcm9JD-xKh3Cv95lWzaGYO2DMTT9xSAYz78mCtiLeHuWTHIhweO5fAGAE&sig=AOD64_2HPnrFc7uEZkYgmvsrtba88JJ87A&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381
                - text: Enroll in the new Google AI Professional
                - text: Certificate today.
          - link "Learn More" [ref=f5e23] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CD3XpjI5aar7lE5OQ77APq9zSqQ7n6oKviAGimrPGxBWM_9_ijA8QASDTkZYiYOXq4wOgAaa_qboDyAEBqQKZMG0P-E1GPqgDAcgDywSqBP8BT9BsiGBRi9j1pL8f-tk-GxrBsekJfhwRxbTSynIpci3lDo0felVQq2ryrrT7oDvW94yDymnjNy8Lc6500Rp0fHWJLDxyVoaTZfXZDDl-l_O49phw7EHIcdBvX7M1o_Aj_1gf1PXUjKnogPJfljcA04vNlGkkItmMxw6O-X3OGDrUrHXKajKNgzHbY5SpWQifaUZR8u07rynGW6MeJK9t4q_axYc0FZTy0xNHhPZFcgBGKdZ0ypCzhdJNhfYRCCA5p0FsD0F70N5TUDyicMG5C30Vc6mEPzZUJliIiv6IAYAoYuqmL3iKzf-om1ww7ZLNyD9rmMOXiUW--fa0Ati7wASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt7zyzMTalQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwi24PLMxNqVAxUTyBsAHSuuNOWIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAoBUGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvtvyzMTalQMVE8gbAB0rrjTlEAEYASAAEgKa2fD_BwE&num=1&cid=CAQShgIAEQoqga5AMoN9K_q8ied-PSxej7HY3gwcdHb7uOctwz5qti_7SbmpltA6-RTnYQg6gmO1LdHIYPY7TbVk90Lq4IsiTQXez2vYweeDD0ufLQk1JeP1ArrFSXsx9w23Om6pkubnB-klniBnbvF4DN2L6iEYI3z6vzHgQqwWGM67EE3bvmd8rTfd08Og4rLuoH8qhrQagVYJCbSk7mpvs6CsW8CaHkVjYGqKnLSLCptsS6yNS41B5QaSw9Bd-mTosdaomxIAijBIE8m31Dzy-N9sF4VrwvzG7cWhlJKmkjQcm9JD-xKh3Cv95lWzaGYO2DMTT9xSAYz78mCtiLeHuWTHIhweO5fAGAE&sig=AOD64_2HPnrFc7uEZkYgmvsrtba88JJ87A&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381
            - generic [ref=f5e24]: Learn More
            - img [ref=f5e25]
        - img [ref=f5e30] [cursor=pointer]
        - button [ref=f5e32] [cursor=pointer]:
          - img [ref=f5e33]
        - iframe
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
     |         ^ Error: Header validation failed: locator.click: Timeout 1000ms exceeded.
  38 | 
  39 |       
  40 |   }
  41 | 
  42 | 
  43 | }
```