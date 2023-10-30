describe('template spec', () => {
    // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');
  
      before(() => {
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg1NTQzMjQsImV4cCI6MTY5ODY0MDcyNH0.6rf8MABir72LTKD8AaOVY_xhIm_twR9kG6w-QAgC-e4');
      });
    
      
      it('create new', () => {  
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
        cy.get('input[name="sales_strategy_code"]').type('YourValueHere');
        cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere');

        cy.get('input[name="sales_strategy_name"]').type('YourValueHere');
        cy.get('input[name="sales_strategy_name"]').should('have.value', 'YourValueHere');
    
        cy.get('#higher_sort_order_id').click();
        cy.get('.ant-select-item-option[title="Rate Plan"]').click();
        // cy.get('#rc-tabs-0-panel-0 > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(1) > div.ant-col.ant-col-4.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-placeholder').should('have.text', 'Rate Plan');
       
        cy.get('textarea[id="comments"]').type('YourValueHere');
        cy.get('textarea[id="comments"]').should('have.value', 'YourValueHere');
  
       
        cy.get('#rate_plan_id').click();
        cy.get('.ant-select-item-option[title="Test"]').click();
        cy.get('#rc-tabs-0-panel-0 > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(3) > div > div > div.ant-form-item.css-htwhyh.ant-form-item-has-success > div > div > div > div > div > div > div > div:nth-child(1) > span').should('have.text', 'Test');
        
       

        cy.get('#room_type_id').click();
        cy.get('.ant-select-item-option[title="Room Type 1"]').click();
        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-8.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-col.ant-col-8.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item').should('have.text', 'Room Type 1');
        
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