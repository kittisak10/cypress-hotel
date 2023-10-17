describe('template spec', () => {

  before(() => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc0NTk4NjMsImV4cCI6MTY5NzU0NjI2M30.Y3BYP-H0WgF5o56aM6uAjL7XLbdhzM89PJFDeOPzdsg');
  });

  it('create new', () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('YourValueHere');
    cy.get('input[name="policy_name"]').should('have.value', 'YourValueHere');

    cy.get('textarea[id="policy_desc"]').type('YourValueHere');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'YourValueHere');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    cy.contains('Record(s) have been successfully saved.');
  })
})