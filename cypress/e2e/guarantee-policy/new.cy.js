describe('template spec', () => {

  it("on new form load non TokenAdmin", () => {
    cy.visit("https://shospitality.thesuperappcrm.com/main/guarantee-policies/new");
    cy.get(".slide-menu").should("not.be.visible");
  })

  it("on new form load have TokenAdmin", () => {
    cy.visit("https://shospitality.thesuperappcrm.com/main/guarantee-policies/new");
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
  })

  it('กรอกข้อมูลแค่ Policies Name', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('tt1');
    cy.get('input[name="policy_name"]').should('have.value', 'tt1');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลแค่ Policies Description', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('textarea[id="policy_desc"]').type('ttt');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'ttt');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กรอกข้อมูลครบ required fields', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('t');
    cy.get('input[name="policy_name"]').should('have.value', 't');

    cy.get('textarea[id="policy_desc"]').type('tt');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'tt');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
  })

  it('กรอกข้อมูลครบ required fields แต่ปิด Requires Deposit?', () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get('input[name="policy_name"]').type('t11');
    cy.get('input[name="policy_name"]').should('have.value', 't11');

    cy.get('textarea[id="policy_desc"]').type('tt11');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'tt11');

    cy.get('#require_deposit > span').click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
  })

  it('กรอกข้อมูลครบ required fields แต่เปิด Requires Deposit?', () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get('input[name="policy_name"]').type('t111');
    cy.get('input[name="policy_name"]').should('have.value', 't111');

    cy.get('textarea[id="policy_desc"]').type('tt111');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'tt111');

    cy.get('#require_deposit > span').click();
    cy.get('#require_deposit > span').click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
  })

  it('กด timePicker: InternalLoyalty Program Members', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('#loyalty_member').click();
    cy.get("body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a").click();
    cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(1) > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-picker-clear').click();
    cy.get('#loyalty_member').type('12:00:00', { force: true });
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button > span').click();
  })

  it('กด timePicker: Other Guests', () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get('#guest').click();
    cy.get("body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now > a").click();
    cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(1) > div:nth-child(3) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div > span.ant-picker-clear').click();
    cy.get('#guest').type('12:00:00', { force: true });
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
  })

  it('กด Button save ฟิลเป็นค่า null', () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it("เมื่อเลือก Checkbock: Guarantee Method All", () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > thead > tr > th.ant-table-cell.ant-table-selection-column > div > label > span > input").click();
  });

  it("เมื่อกดเลือก Checkbock: Guarantee Method All ออก", () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > thead > tr > th.ant-table-cell.ant-table-selection-column > div > label > span > input").click();
    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > thead > tr > th.ant-table-cell.ant-table-selection-column > div > label > span > input").click();
  });

  it("เมื่อเลือก Checkbock: Guarantee Method เพียงรายการเดียว", () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-selection-column > label > span > input").click();

  });

  it("เมื่อเลือก Checkbock: Guarantee Method เพียงรายการเดียวแล้วเลือกติ๊ก Webenabled ออก", () => {
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-selection-column > label > span > input").click();
    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div > div > div > div > label").click();
  });

  it('เมื่อทำการกรอกข้อมูล Policies Name และ Policies Description ซ้ำกับข้อมูลอื่นแล้ว save', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('t');
    cy.get('input[name="policy_name"]').should('have.value', 't');

    cy.get('textarea[id="policy_desc"]').type('tt');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'tt');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('พิมตัวเลขหรือตัวอักษร timePicker: Internal Loyalty Program Members', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('#loyalty_member').click();
    cy.get('#loyalty_member').type('123', { force: true });
    cy.get('#loyalty_member').clear();
    cy.get('#loyalty_member').type('ทดสอบ', { force: true });
  })

  it('พิมตัวเลขหรือตัวอักษร timePicker: Other Guests', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('#guest').click();
    cy.get('#guest').type('123', { force: true });
    cy.get('#guest').clear();
    cy.get('#guest').type('ทดสอบ', { force: true });
  })

  it('พิมตัวอักษรพิมใหญ่ Policies Name พิมตัวอักษรพิมใหญ่ Policies Description', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('T');
    cy.get('input[name="policy_name"]').should('have.value', 'T');

    cy.get('textarea[id="policy_desc"]').type('TT');
    cy.get('textarea[id="policy_desc"]').should('have.value', 'TT');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('พิมตัวอักษรพิเศษ Policies Description พิมตัวอักษรพิเศษ Policies Name', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('input[name="policy_name"]').type('!@#$%^&*?');
    cy.get('input[name="policy_name"]').should('have.value', '!@#$%^&*?');

    cy.get('textarea[id="policy_desc"]').type('!@#$%^&*?');
    cy.get('textarea[id="policy_desc"]').should('have.value', '!@#$%^&*?');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กด Search: policy name ', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('#__next > section > main > div > div.tw-transition-all > div > div.tw-flex.tw-gap-2 > span > span > input').type('1');
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div.tw-flex.tw-gap-2 > span > span > input').should('have.value', '1');
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div.tw-flex.tw-gap-2 > span > span > span > button').click();
  })

  it('กด Selection page and Search value page', () => {
    cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTgxMTY1OTksImV4cCI6MTY5ODIwMjk5OX0.ORRU4teHGdcsKpe0fF5jEqDo-5BsvvKRcgkEE3Oqx84');
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')

    cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-row.ant-row-end.css-htwhyh > div > ul > li.ant-pagination-next > button').click();
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-row.ant-row-end.css-htwhyh > div > ul > li.ant-pagination-options > div.ant-pagination-options-quick-jumper > input[type=text]').type('2');
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-row.ant-row-end.css-htwhyh > div > ul > li.ant-pagination-options > div.ant-pagination-options-quick-jumper > input[type=text]').should('have.value', '2');
  })


})