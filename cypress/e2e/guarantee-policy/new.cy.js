describe('template spec', () => {

  // before(() => {
  //   cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc3ODI2NjgsImV4cCI6MTY5Nzg2OTA2OH0.OZREenCHvakou4roaArJa5eeUE8OHb_mKC1AjyGHVB8');
  // })
  
  // it("should not show slide menu on new form load", () => {
  //   cy.visit("https://shospitality.thesuperappcrm.com/main/guarantee-policies/new");
  //   cy.get(".slide-menu").should("not.be.visible");
  // })

  // it("should show Polices Name in slide menu on new form load", () => {
  //   cy.visit("https://shospitality.thesuperappcrm.com/main/guarantee-policies/new");
  //   cy.get(".slide-menu").should("contain", "Polices Name");
  // })

  it('create new', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc3ODI2NjgsImV4cCI6MTY5Nzg2OTA2OH0.OZREenCHvakou4roaArJa5eeUE8OHb_mKC1AjyGHVB8');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('Test2');
    cy.get('input[name="policy_name"]').should('have.value', 'Test2');

    cy.get('textarea[id="policy_desc"]').type('Test13');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'Test13');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    cy.contains('Record(s) have been successfully saved.');

    // cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
  })

  it('create new1', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc3ODI2NjgsImV4cCI6MTY5Nzg2OTA2OH0.OZREenCHvakou4roaArJa5eeUE8OHb_mKC1AjyGHVB8');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('Test00');
    cy.get('input[name="policy_name"]').should('have.value', 'Test00');

    cy.get('textarea[id="policy_desc"]').type('Test00');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'Test00');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    cy.contains('Record(s) have been successfully saved.');

    // cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
  })

})