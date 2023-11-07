describe('template spec', () => {
  let token;
  before(() => {
    // Retrieve the password from the environment variable
    token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });

  it("on new form load non TokenAdmin", () => {
    cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new");
    cy.get(".slide-menu").should("not.be.visible");
  })

  it("on new form load have TokenAdmin", () => {
    cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new");
    cy.setCookie('hotel-token', token);
  })

  it('กรอกข้อมูลแค่ Policies Name', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').type('tt1');
    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').should('have.value', 'tt1');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลแค่ Policies Description', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').type('ttt');
    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').should('have.value', 'ttt');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลครบ required fields', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').type('tt1');
    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').should('have.value', 'tt1');

    cy.get('#ms_cancellation_refund_policy_policy_currency').click();
    cy.get('#ms_cancellation_refund_policy_policy_currency').type('AAA - aa', { force: true }).type('{enter}');

    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').type('ttt');
    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').should('have.value', 'ttt');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กดเลือกแค่ข้อมูล Currency', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_policy_currency').click();
    cy.get('#ms_cancellation_refund_policy_policy_currency').type('AAA - aa', { force: true }).type('{enter}');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('พิมตัวอักษรพิมใหญ่ Policies Name พิมตัวอักษรพิมใหญ่ Policies Description', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').type('T');
    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').should('have.value', 'T');

    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').type('TT');
    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').should('have.value', 'TT');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('พิมตัวอักษรพิเศษ Policies Description พิมตัวอักษรพิเศษ Policies Name', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').type('!@#$%^&*?');
    cy.get('input[name="ms_cancellation_refund_policy,policy_name"]').should('have.value', '!@#$%^&*?');

    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').type('!@#$%^&*?');
    cy.get('textarea[id="ms_cancellation_refund_policy_policy_desc"]').should('have.value', '!@#$%^&*?');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กด timePicker: InternalLoyalty Program Members', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').click();
    cy.get("body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a").click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').clear();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').type('12:00:00', { force: true });
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button > span').click();
  })

  it('กด timePicker: Other Guests', () => {
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')
    cy.setCookie('hotel-token', token);

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').click();
    cy.get("body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a").click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').clear();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').type('12:00:00', { force: true });
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
  })

  it('พิมตัวเลขหรือตัวอักษร timePicker: InternalLoyalty Program Members', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').type('12:00:00', { force: true });
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').clear();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_loyalty_member').type('ทดสอบ', { force: true });
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button > span').click();
  })

  it('พิมตัวเลขหรือตัวอักษร timePicker: Other Guests', () => {
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')
    cy.setCookie('hotel-token', token);

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').type('12:00:00', { force: true });
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').clear();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_guest').type('ทดสอบ', { force: true });
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button > span').click();
  })

  it('เลือกข้อมูลแค่ To Days', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy_calculation_mapping,rule_to"]').type('1');
    cy.get('input[name="ms_cancellation_refund_policy_calculation_mapping,rule_to"]').should('have.value', '1');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Time Unit', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_time_unit').click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_time_unit').type('Days', { force: true }).type('{enter}');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลที่ไม่ได้มีใน Time Unit', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_time_unit').click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_time_unit').type('ทดสอบ', { force: true });

  })

  it('เลือกข้อมูลแค่ Calculation Method', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลเป็นตัวอักษรไทย Calculation Method', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('#ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').click();
    cy.get('#ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').type('ทดสอบ', { force: true });


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Calculation Value', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy_calculation_mapping,rule_calc_val"]').type('11');
    cy.get('input[name="ms_cancellation_refund_policy_calculation_mapping,rule_calc_val"]').should('have.value', '11');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลเป็นเลขทศนิยม Calculation Value', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/new')

    cy.get('input[name="ms_cancellation_refund_policy_calculation_mapping,rule_calc_val"]').type('1.50');
    cy.get('input[name="ms_cancellation_refund_policy_calculation_mapping,rule_calc_val"]').should('have.value', '1.50');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })


})