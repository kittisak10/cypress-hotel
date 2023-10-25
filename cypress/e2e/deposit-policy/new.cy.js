describe('template spec', () => {

    // it("on new form load non TokenAdmin", () => {
    //   cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/new");
    // })
  
    // it("on new form load have TokenAdmin", () => {
    //   cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/new");
    //   cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    // })

    // it('กรอกข้อมูลแค่ Policies Name', () => {
    //     cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')
    
    //     cy.get('input[name="ms_deposit_policy,policy_name"]').type('tt1');
    //     cy.get('input[name="ms_deposit_policy,policy_name"]').should('have.value', 'tt1');
    
    //     cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    
    //   })
    
    //   it('กรอกข้อมูลแค่ Policies Description', () => {
    //     cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')
    
    //     cy.get('textarea[id="ms_deposit_policy_policy_desc"]').type('ttt');
    //     cy.get('textarea[id="ms_deposit_policy_policy_desc"]').should('have.value', 'ttt');
    
    //     cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    
    //   })
      
    //   it('กรอกข้อมูลครบ required fields', () => {
    //     cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')
    
    //     cy.get('input[name="policy_name"]').type('t');
    //     cy.get('input[name="policy_name"]').should('have.value', 't');
    
    //     cy.get('textarea[id="policy_desc"]').type('tt');
    //     cy.get('textarea[id="policy_desc"]').should('have.value', 'tt');

    //     cy.get('#ms_deposit_policy_policy_currency').click();
    //     cy.get('#ms_deposit_policy_policy_currency').type('AAA - aa', { force: true });
    
    //     cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div.ant-input-number-handler-wrap > span.ant-input-number-handler.ant-input-number-handler-up').click();


    //     cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    //   })

    //   it('กดเลือกแค่ข้อมูล Currency', () => {
    //     cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')
    
    //     cy.get('#ms_deposit_policy_policy_currency').click();
    //     cy.get('#ms_deposit_policy_policy_currency').type('AAA - aa', { force: true });
    
    
    //     cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

    //   })
  
    //   it('เลือกข้อมูลแค่ To Days', () => {
    //     cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')
    
    //     cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div.ant-input-number-handler-wrap > span.ant-input-number-handler.ant-input-number-handler-up').click();
    
    //     cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    
    //   })

    //   it('เลือกข้อมูลแค่ Calculation Method', () => {
    //     cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMTk0MTAsImV4cCI6MTY5ODMwNTgxMH0.Hx18Zc7FLVD6mKwJnpiCm-KiTfQcnS_JftvyYAK-3Dg');
    //     cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')
    
    //     cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').click();
    //     cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').select('ms_deposit_policy_calculation_mapping_rule_calc_method_list_0');
        
    //     cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    
    //   })

  })