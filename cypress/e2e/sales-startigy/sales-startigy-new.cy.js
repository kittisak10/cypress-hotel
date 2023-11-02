describe('template spec', () => {
    
  let token;
  before(() => {
    // Retrieve the password from the environment variable
    token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });
    
      
      it('create new', () => {  
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
        cy.setCookie('hotel-token', token);

        cy.get('input[name="sales_strategy_code"]').type('YourValueHere');
        cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere');

        cy.get('input[name="sales_strategy_name"]').type('YourValueHere');
        cy.get('input[name="sales_strategy_name"]').should('have.value', 'YourValueHere');
    
        cy.get('#higher_sort_order_id').click();
        cy.get('.ant-select-item-option[title="Rate Plan"]').click();
      
        cy.get('textarea[id="comments"]').type('YourValueHere');
        cy.get('textarea[id="comments"]').should('have.value', 'YourValueHere');
  
       
        cy.get('#rate_plan_id').click();
        
        cy.get('body > div:nth-child(5) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div > div').click('', { force: true }).type('{enter}');
       

        cy.get('#room_type_id').click();
        cy.get('body > div:nth-child(6) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div > div').click('', { force: true }).type('{enter}');
       


        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
       
    
        cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
        cy.contains('Record(s) have been successfully saved.');
      })
    })