describe('template spec', () => {
  let token;
  before(() => {
    // Retrieve the password from the environment variable
    token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });

  it('กรอกข้อมูลแค่ Policies Name', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('input[name="policy_name"]').clear();
    cy.get('input[name="policy_name"]').type('edit');
    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('แก้ไขข้อมูลแค่ Policies Description', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('textarea[id="policy_desc"]').clear();
    cy.get('textarea[id="policy_desc"]').type('edit');
    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('แก้ไขข้อมูลแค่ timePicker: Internal Loyalty Program Members และ Other Guests', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('#loyalty_member').click();
    cy.get('body > div:nth-child(4) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now').click();
    cy.get('#loyalty_member').click();
    cy.get('#loyalty_member').clear();
    cy.get('#loyalty_member').type('12:00:00', { force: true });
    
    
    cy.get('#guest').click();
    cy.get('body > div:nth-child(5) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now').click();
    cy.get('#guest').click();
    cy.get('#guest').clear();
    cy.get('#guest').type('12:00:00', { force: true });
    

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('กด Button save ฟิลเป็นค่า null', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('input[name="policy_name"]').clear();
    cy.get('textarea[id="policy_desc"]').clear();

    cy.get('#require_deposit > span').type('false');

    cy.get('#loyalty_member').click();
    cy.get('#loyalty_member').clear();

    cy.get('#guest').click();
    cy.get('#guest').clear();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('เมื่อเลือก Checkbock: Guarantee Method All', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > thead > tr > th.ant-table-cell.ant-table-selection-column > div > label > span > input").click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('เมื่อไม่เลือก Checkbock: Guarantee Method All', () => {
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > thead > tr > th.ant-table-cell.ant-table-selection-column > div > label > span > input").click();
    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > thead > tr > th.ant-table-cell.ant-table-selection-column > div > label > span > input").click();
    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('เมื่อเลือก Checkbock: Guarantee Method เพียงรายการเดียว', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-selection-column > label > span > input").click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('เมื่อเลือก Checkbock: Guarantee Method เพียงรายการเดียวแล้วเลือกติ๊ก Webenabled ออก', () => {
    cy.setCookie('hotel-token', token);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get("#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div > div > div > div > label").click();
    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('เมื่อทำการกรอกข้อมูล Policies Name และ Policies Description ซ้ำกับข้อมูลอื่นแล้ว save', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('input[name="policy_name"]').clear();
    cy.get('input[name="policy_name"]').type('t');
    cy.get('textarea[id="policy_desc"]').clear();
    cy.get('textarea[id="policy_desc"]').type('t');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('พิมตัวเลขหรือตัวอักษร timePicker: Internal Loyalty Program Members', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('#loyalty_member').click();
    cy.get('#loyalty_member').clear();
    cy.get('#loyalty_member').type('123', { force: true });
    cy.get('#loyalty_member').click();
    cy.get('#loyalty_member').clear();
    cy.get('#loyalty_member').type('ทดสอบ', { force: true });

  })

  it('พิมตัวเลขหรือตัวอักษร timePicker: Other Guests', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('#guest').click();
    cy.get('#guest').clear();
    cy.get('#guest').type('123', { force: true });
    cy.get('#guest').click();
    cy.get('#guest').clear();
    cy.get('#guest').type('ทดสอบ', { force: true });

  })

  it('พิมตัวอักษรพิมใหญ่ Policies Name พิมตัวอักษรพิมใหญ่ Policies Description', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('input[name="policy_name"]').clear();
    cy.get('input[name="policy_name"]').type('EDIT');
    cy.get('textarea[id="policy_desc"]').clear();
    cy.get('textarea[id="policy_desc"]').type('EDIT1');

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
  })

  it('พิมตัวอักษรพิเศษ Policies Description พิมตัวอักษรพิเศษ Policies Name', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('input[name="policy_name"]').clear();
    cy.get('input[name="policy_name"]').type('?????');


    cy.get('textarea[id="policy_desc"]').clear();
    cy.get('textarea[id="policy_desc"]').type('????');


    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

  })

  it('กด Search: policy name ', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('#__next > section > main > div > div.tw-transition-all > div > div.tw-flex.tw-gap-2 > span > span > input').type('1');
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div.tw-flex.tw-gap-2 > span > span > input').should('have.value', '1');
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div.tw-flex.tw-gap-2 > span > span > span > button').click();
  })

  it('กด Selection page and Search value page ', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-row.ant-row-end.css-htwhyh > div > ul > li.ant-pagination-next > button').click();
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies/new')
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-row.ant-row-end.css-htwhyh > div > ul > li.ant-pagination-options > div.ant-pagination-options-quick-jumper > input[type=text]').type('2');
    cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-row.ant-row-end.css-htwhyh > div > ul > li.ant-pagination-options > div.ant-pagination-options-quick-jumper > input[type=text]').should('have.value', '2');
  })

  it('กด  Delete: policy ', () => {
    cy.setCookie('hotel-token', token);
    cy.viewport(1600, 1000);
    cy.visit('https://shospitality.thesuperappcrm.com/main/guarantee-policies')
    cy.get('#__next > section > main > div > div.tw-transition-all.tw-bg-blue-50 > div > div.ant-table-wrapper.css-htwhyh > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

    cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();
    cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-htwhyh.ant-btn-primary').click();
  })

})