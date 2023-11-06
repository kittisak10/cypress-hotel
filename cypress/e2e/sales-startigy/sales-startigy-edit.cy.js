describe('template spec', () => {
    // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');
  
    let token;
    before(() => {
      // Retrieve the password from the environment variable
      token = Cypress.env('CYPRESS_SECRET_TOKEN');
    });
    
      
      it('create new', () => {  
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/3c697981-acee-4e80-9c51-defc40908780')
        cy.setCookie('hotel-token', token);

        // cy.get('input[name="sales_strategy_code"]').type('YourValueHere');
        // cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere');
        
        cy.get(' #sales_strategy_name').clear() ;
        cy.get('input[name="sales_strategy_name"]').type('YourValueHere1');
        cy.get('input[name="sales_strategy_name"]').should('have.value', 'YourValueHere1');
    
        cy.get('  #higher_sort_order_id').click({force: true});
        cy.get('.ant-select-item-option[title="Room Type"]').click();
      
        // cy.get('div.ant-modal-content  #higher_sort_order_id').click({force: true});
        // cy.get('.ant-select-item-option[title="Room Type"]').click();
        // cy.get('#rc-tabs-0-panel-0 > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(1) > div.ant-col.ant-col-4.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-placeholder').should('have.text', 'Rate Plan');
        cy.get(' #comments').clear() ;
        cy.get('textarea[id="comments"]').type('YourValueHere1');
        cy.get('textarea[id="comments"]').should('have.value', 'YourValueHere1');
  
       
        cy.get('#rate_plan_id').click();
        
         cy.get('body > div:nth-child(5) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click('', { force: true }).type('{enter}');
        
        // cy.get('div.ant-modal-content #rate_plan_id').click();
        // cy.get('div.ant-modal-content #rate_plan_id').type('Test', { force: true }).type('{enter}');

        cy.get('#room_type_id').click();
        cy.get('body > div:nth-child(6) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click('', { force: true }).type('{enter}');
       


        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
       
    
        // cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
        // cy.contains('Record(s) have been successfully saved.');
      })
    })