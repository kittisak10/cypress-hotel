describe('template spec', () => {
    // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');
  
      before(() => {
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzOTQ2MmVlOC1kOWM1LTQzNzAtOGIxMi01OWJmOWI0YjQ3NzAiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gUG9ydGFsIiwiaWFkbSI6dHJ1ZSwiaWF0IjoxNjk4MTI2NjU2LCJleHAiOjE2OTgyMTMwNTZ9.UuvFvriNG2Py5TYzQHZ976vkqy_eDukNEalIRBFAGC0');
      });
    
      it('edit', () => {  
        cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/766655b7-5a13-4122-b29b-c258dada8c1f')
        
       
  
        // cy.get('.ant-btn css-htwhyh ant-btn-text ant-btn-sm ant-btn-icon-only ant-dropdown-trigger').click();
        

        // cy.get('.ant-dropdown-menu-title-content').click();
        // cy.get('body > div:nth-child(7) > div > div > ul > li:nth-child(1) > span').click(); 

      //   cy.get('#ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
      //   cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();

      //   cy.get('#ms_cancellation_fee_policy_calculation_mapping_guest').type('12:00:00', { force: true });
      //   cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();

      //   cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_to').type(10,{ force: true });

      //   cy.get('#ms_cancellation_fee_policy_calculation_mapping_time_unit').click();
      //   cy.get('.ant-select-item-option[title="Days"]').click();

      //   cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_method').click();
      //   cy.get('.ant-select-item-option[title="Percent of Total Stay"]').click();
      //  cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').type(10);

        
     
        // cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
        // cy.contains('Record(s) have been successfully saved.');
  
  
  
      })
    })