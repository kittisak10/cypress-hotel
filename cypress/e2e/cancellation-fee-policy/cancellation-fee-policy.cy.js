describe('template spec', () => {
  // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');

    before(() => {
      cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc3ODY0ODYsImV4cCI6MTY5Nzg3Mjg4Nn0.bbATzqjj2uzpfQAfCo-M1Xb9DInxcEL-Rr1FuZ0CNgA');
    });
  
    
    it('create new', () => {  
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
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

      // cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-items-start.tw-snap-start > button').click();
      // cy.get('body > div:nth-child(7) > div > div > ul > li:nth-child(1) > span').click();
  
      cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
      cy.contains('Record(s) have been successfully saved.');



    })
    before(() => {
      cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTc3ODY0ODYsImV4cCI6MTY5Nzg3Mjg4Nn0.bbATzqjj2uzpfQAfCo-M1Xb9DInxcEL-Rr1FuZ0CNgA');
    });
    it('edit', () => {  
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/766655b7-5a13-4122-b29b-c258dada8c1f')
      
     

      cy.get('ant-btn css-htwhyh ant-btn-text ant-btn-sm ant-btn-icon-only ant-dropdown-trigger').click();


      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_to').type(10,{ force: true });
      
      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
      // cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();

      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_guest').type('12:00:00', { force: true });
      // cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();

      
      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_time_unit').click();
      // cy.get('.ant-select-item-option[title="Days"]').click();
    
      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_method').click();
      // cy.get('.ant-select-item-option[title="Percent of Total Stay"]').click();
      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').type(10);

   
      cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
      cy.contains('Record(s) have been successfully saved.');



    })
  })