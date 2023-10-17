describe('template spec', () => {

  before(() => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc0NTk4NjMsImV4cCI6MTY5NzU0NjI2M30.Y3BYP-H0WgF5o56aM6uAjL7XLbdhzM89PJFDeOPzdsg');
    cy.viewport(1600, 1000)
  });

  it('create new', () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')

    // policy name
    cy.get('input[id="ms_cancellation_fee_policy_policy_name"]').type('YourValueHere');
    cy.get('input[id="ms_cancellation_fee_policy_policy_name"]').should('have.value', 'YourValueHere');

    // currency
    // Select use click to select dropdown
    cy.get('#ms_cancellation_fee_policy_policy_currency').click();
    cy.get('.ant-select-item-option[title="USD - Dollar"]').click();
    cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-8.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-col.ant-col-8.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item').should('have.text', 'USD - Dollar');


    // submit button
    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    cy.contains('Record(s) have been successfully saved.');
  })
})