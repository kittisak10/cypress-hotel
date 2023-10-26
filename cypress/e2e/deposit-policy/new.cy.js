describe('template spec', () => {

  it("on new form load non TokenAdmin", () => {
    cy.viewport(1600, 1000);
    cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/new");
  })

  it("on new form load have TokenAdmin", () => {
    cy.viewport(1600, 1000);
    cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/new");
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
  })

  it('กรอกข้อมูลแค่ Policies Name', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy,policy_name"]').type('tt1');
    cy.get('input[name="ms_deposit_policy,policy_name"]').should('have.value', 'tt1');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลแค่ Policies Description', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('textarea[id="ms_deposit_policy_policy_desc"]').type('ttt');
    cy.get('textarea[id="ms_deposit_policy_policy_desc"]').should('have.value', 'ttt');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลครบ required fields (Add Policy)', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy,policy_name"]').type('t');
    cy.get('input[name="ms_deposit_policy,policy_name"]').should('have.value', 't');

    cy.get('textarea[id="ms_deposit_policy_policy_desc"]').type('tt');
    cy.get('textarea[id="ms_deposit_policy_policy_desc"]').should('have.value', 'tt');

    cy.get('#ms_deposit_policy_policy_currency').click();
    cy.get('#ms_deposit_policy_policy_currency').type('AAA - aa', { force: true }).type('{enter}');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กดเลือกแค่ข้อมูล Currency', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_policy_currency').click();
    cy.get('#ms_deposit_policy_policy_currency').type('AAA - aa', { force: true }).type('{enter}');;


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ To Days', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_to"]').type('1');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_to"]').should('have.value', '1');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Calculation Method', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Calculation Value', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').type('11');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').should('have.value', '11');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลเป็นเลขทศนิยม Calculation Value', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').type('1.50');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').should('have.value', '1.50');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กอรกข้อมูลเป็นตัวอักษรไทย Calculation Method', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').type('ทดสอบ', { force: true });


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('ปิด Includes Taxes?', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_include_tax > span').click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('ปิด Requires Credit Card?', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_require_creditcard > span').click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })
  it('กรอกข้อมูลแค่ Due Day', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_due"]').type('12');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_due"]').should('have.value', '12');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Due Type', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').type('Before Arrival', { force: true }).type('{enter}');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลเป็นตัวอักษรไทย Due Type', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').type('ทดสอบ', { force: true });

  })

  it('กรอกข้อมูลแค่ Due Day', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_due"]').type('12');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_due"]').should('have.value', '12');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Due Type', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_due_type').type('Before Arrival', { force: true }).type('{enter}');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('เลือกข้อมูลแค่ Calculation Method', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลเป็นตัวอักษรไทย Calculation Method', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').type('ทดสอบ', { force: true });


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลเป็นเลขทศนิยม Calculation Value', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_val"]').type('2.50');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_val"]').should('have.value', '2.50');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลครบ required fields (Calculation Rule and Deposit Schedule)', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_to"]').type('1');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_to"]').should('have.value', '1');

    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').type('1.50');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').should('have.value', '1.50');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_due"]').type('1');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_due"]').should('have.value', '1');

    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').type('Before Arrival', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_due"]').type('12');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_due"]').should('have.value', '12');

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_due_type').type('Before Arrival', { force: true }).type('{enter}');

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_val"]').type('2.50');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_val"]').should('have.value', '2.50');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('กรอกข้อมูลครบ required fields All', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('input[name="ms_deposit_policy,policy_name"]').type('t1');
    cy.get('input[name="ms_deposit_policy,policy_name"]').should('have.value', 't1');

    cy.get('textarea[id="ms_deposit_policy_policy_desc"]').type('tt1');
    cy.get('textarea[id="ms_deposit_policy_policy_desc"]').should('have.value', 'tt1');

    cy.get('#ms_deposit_policy_policy_currency').click();
    cy.get('#ms_deposit_policy_policy_currency').type('AAA - aa', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_to"]').type('1');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_to"]').should('have.value', '1');

    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').type('1.50');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_calc_val"]').should('have.value', '1.50');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_due"]').type('3');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,rule_due"]').should('have.value', '3');

    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_rule_due_type').type('Before Arrival', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_due"]').type('2');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_due"]').should('have.value', '2');

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_due_type').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_due_type').type('Before Arrival', { force: true }).type('{enter}');

    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').click();
    cy.get('#ms_deposit_policy_calculation_mapping_schedule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_val"]').type('2.50');
    cy.get('input[name="ms_deposit_policy_calculation_mapping,schedule_val"]').should('have.value', '2.50');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('ให้ fields เป็นค่าว่าง', () => {
    cy.viewport(1600, 1000);
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgyMzA5MzIsImV4cCI6MTY5ODMxNzMzMn0.nyztjpIHlc15emfkbOomAivCQomhA2qXZliksIWBjDw');
    cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/new')

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

})