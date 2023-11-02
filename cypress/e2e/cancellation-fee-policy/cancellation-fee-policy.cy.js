describe('template spec', () => {
  // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');

  let token;
  before(() => {
    // Retrieve the password from the environment variable
    token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });

  
    
    it('create new', () => {  
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
      cy.setCookie('hotel-token', token);

      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').type('YourValueHere');
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').should('have.value', 'YourValueHere');
  
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').type('YourValueHere');
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').should('have.value', 'YourValueHere');

     
      cy.get('#ms_cancellation_fee_policy_policy_currency').click();
      cy.get('.ant-select-item-option[title="USD - Dollar"]').click();
      cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-8.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-col.ant-col-8.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item').should('have.text', 'USD - Dollar');
      
      cy.get('#ms_cancellation_fee_policy_cancelfee_trans_code').click();
      cy.get('.ant-select-item-option[title="Description"]').click();
      cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-8.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-col.ant-col-8.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item').should('have.text', 'USD - Dollar');
      
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_to').type(10,{ force: true });
      
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
      cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();

      cy.get('#ms_cancellation_fee_policy_calculation_mapping_guest').type('12:00:00', { force: true });
      cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
     
      

      
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_time_unit').click();
      cy.get('.ant-select-item-option[title="Days"]').click();
    
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_method').click();
      cy.get('.ant-select-item-option[title="Percent of Total Stay"]').click();
      
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').type(10);
  
      cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
      cy.contains('Record(s) have been successfully saved.');
    })
  })