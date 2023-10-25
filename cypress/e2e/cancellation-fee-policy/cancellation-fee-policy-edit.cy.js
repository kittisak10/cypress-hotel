describe('template spec', () => {
  // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');
  before(() => {
  cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMzI2MjAsImV4cCI6MTY5ODIxOTAyMH0.uOJeym5NNWhVEjAiZB4ALiSW4v_QO4Mrqkqm8ShU32w');
  });
    it('edit', () => {  
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/766655b7-5a13-4122-b29b-c258dada8c1f')
      
     
  
      cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-items-start.tw-snap-start > button > span > svg').click();
      cy.get("body > div:nth-child(4) > div > div > ul > li:nth-child(1)").click();
      // cy.get('.ant-dropdown-menu-title-content').click();
      // cy.get('body > div:nth-child(7) > div > div > ul > li:nth-child(1) > span').click(); 
  
      // cy.get('#ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
      // cy.get('body > div:nth-child(7) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(1) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div').click();
      cy.get( "body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(1) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div").click();
      cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();


      cy.get("body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div").click();
      // cy.get('body > div:nth-child(7) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div').type('12:00:00', { force: true });
      cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();
  
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_to').clear() ;
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_to').type('1');
      // cy.get('input[name="ms_cancellation_fee_policy_calculation_mapping_rule_to"]').type('8', { force: true });
  
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_time_unit').click({force: true});
      cy.get('.ant-select-item-option[title="Days"]').click();
  
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_calc_method').click({force: true});
      cy.get('.ant-select-item-option[title="Specific Amount"]').click();
      
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').clear() ;
     cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').type(30);
  
    //  cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
    //  cy.get('div.ant-modal-content body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click({ force: true });
    cy.get("body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary").click();
   


      
      // cy.contains('Record(s) have been successfully saved.');
  
  
  
    })
  })