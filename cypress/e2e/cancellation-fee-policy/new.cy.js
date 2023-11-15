describe('template spec', () => {
  // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');

  let token;
  before(() => {
    // Retrieve the password from the environment variable
    token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });

  
    
    it('กรอกข้อมูลทัััั้งหมดในครั้งเดียว', () => {  
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
    it('กรอกข้อมูลแค่  Policies Name', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').type('YourValueHere');
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').should('have.value', 'YourValueHere');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่  Policies Name เป็นตัวเลข', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').type('1');
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').should('have.value', '1');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่  Policies Name เป็นภาษาไทย', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').type('ทดสอบ');
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').should('ทดสอบ');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่  Policies Name เป็นอัครพิเเศษ */-+', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').type('+-*/');
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').should('+-*/');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่  Policies Name เป็นค่าว่าง ', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').type('');
      cy.get('input[name="ms_cancellation_fee_policy,policy_name"]').should('');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })

    it('กรอกข้อมูลแค่ currency', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_policy_currency').click();
      cy.get('.ant-select-item-option[title="USD - Dollar"]').click();
      cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-8.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-col.ant-col-8.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item').should('have.text', 'USD - Dollar');
      
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Cancellation Fee Transaction Code', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_cancelfee_trans_code').click();
      cy.get('.ant-select-item-option[title="Description"]').click();
      cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-8.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-col.ant-col-8.gutter-row.css-htwhyh > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-select-selection-item').should('have.text', 'USD - Dollar');
      
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })

    it('กรอกข้อมูลแค่ Policies Descriptione', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').type('YourValueHere');
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').should('have.value', 'YourValueHere');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Policies Descriptione เป็นค่าว่าง', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').type('');
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').should('have.value', '');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Policies Descriptione เป็นตัวเลข', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').type('1');
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').should('have.value', '1');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Policies Descriptione เป็นภาษาไทย', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').type('1');
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').should('have.value', '1');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Policies Descriptione เป็นอัครพิเเศษ', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').type('+-*/');
      cy.get('textarea[id="ms_cancellation_fee_policy_policy_desc"]').should('+-*/');
  
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Internal Loyalty Program Members', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_loyalty_member').click();
      // cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a').click();

      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Other Guests', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_guest').type('12:00:00', { force: true });
      // cy.get('body > div:nth-child(7) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
     
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })

    it('กรอกข้อมูลแค่ To Days', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_to').type(10,{ force: true });
     
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Time Unit', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_time_unit').click();
      cy.get('.ant-select-item-option[title="Days"]').click();
     
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Calculation Methodt', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_method').click();
      cy.get('.ant-select-item-option[title="Percent of Total Stay"]').click();
     
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
    it('กรอกข้อมูลแค่ Calculation Value', () => {

      cy.viewport(1600, 1000);
      cy.setCookie('hotel-token', token);
      cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-fee-policies/new')
  
      cy.get('#ms_cancellation_fee_policy_calculation_mapping_rule_calc_val').type(10);
     
      cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
  
    })
   
  
  
  })