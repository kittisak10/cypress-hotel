describe('template spec', () => {
  let token;
  before(() => {
      // Retrieve the password from the environment variable
      token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });


    it('แก้ไขแค่ครั้งเดียว', () => {  
      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      // cy.setCookie('hotel-token', token);
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      // cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > thead > tr > th:nth-child(2) > div > span.ant-table-column-title > div > span.ant-table-column-title').click();
      
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
      cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now').click();
      // cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
        
      // cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

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
  
  
    it('แก้ไขแค่ Internal Loyalty Program Members', () => {

      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
       cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
      
    })

    it('แก้ไขแค่ Other Guests', () => {

      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

      cy.get("body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div").click();
      // cy.get('body > div:nth-child(7) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div').type('12:00:00', { force: true });
      // cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();
      // cy.get('body > div:nth-child(5) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
      cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })
    it('แก้ไขแค่ To Days', () => {

      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_to').clear() ;
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_to').type('5');

      cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it('แก้ไขแค่ Time Unit', () => {

      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_time_unit').click({force: true});
      cy.get('.ant-select-item-option[title="Days"]').click();

      cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })
    it('แก้ไขแค่ Calculation Method', () => {

      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_calc_method').click({force: true});
      cy.get('.ant-select-item-option[title="Specific Amount"]').click();

      cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it('แก้ไขแค่ Calculation Value', () => {

      cy.setCookie('hotel-token', token);
      
      cy.viewport(1600, 1000);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies')
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').click();
      cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span').click();
      cy.get('#rc-tabs-1-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
      cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').clear() ;
      cy.get('div.ant-modal-content #ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').type(50);

      cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })
  
  
  })