describe('template spec', () => {
    let token;
    before(() => {
        // Retrieve the password from the environment variable
        token = Cypress.env('CYPRESS_SECRET_TOKEN');
    });
    it("กดเปลี่ยน ID:Policy ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-list.ant-list-split.css-htwhyh > div > div > ul > li:nth-child(2) > div > div').click();
    })

    it("กดปุ่ม Add New ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-snap-start').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').type('5');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').should('have.value', '5');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').click();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').type('1.50');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').should('have.value', '1.50');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').type('1');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').should('have.value', '1');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').click();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').type('Before Arrival', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').type('12');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').should('have.value', '12');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due_type').click();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due_type').type('Before Arrival', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').click();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').type('2.50');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').should('have.value', '2.50');

    })


    it("ให้ modal fields เป็นค่าว่าง ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-snap-start').click();
        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it("กดปุ่ม Cancel modal ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-snap-start').click();
        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-default').click();
    })

    it("กดปุ่ม Edit pofilr scroll card ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();
    })

    it("กดปุ่ม Delete pofilr scroll card", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(2)').click();
    })

    it("กดปุ่มYes: Delete pofilr scroll card", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(2)').click();
        cy.get('body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-htwhyh.ant-btn-default.ant-btn-dangerous').click();
    })

    it("กดปุ่มNo: Delete pofilr scroll card", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(2)').click();
        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button:nth-child(1)').click();
    })

    it("กดเลือก pro file scorll", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1");
        cy.setCookie('hotel-token', token);

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2)').click();

    })

    it('เลือกข้อมูลแค่ To Days', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').type('5');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').should('have.value', '5');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Calculation Method', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();


        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').type('Specific Amount', { force: true }).type('{enter}');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Calculation Value', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').type('2');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').should('have.value', '2');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลเป็นเลขทศนิยม Calculation Value', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').type('1.50');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').should('have.value', '1.50');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กอรกข้อมูลเป็นตัวอักษรไทย Calculation Method', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();


        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').type('ทดสอบ', { force: true });

    })

    it('ปิด Includes Taxes?', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_include_tax > span').click();

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('ปิด Requires Credit Card?', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_require_creditcard > span').click();

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลแค่ Due Day', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').type('13');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').should('have.value', '13');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Due Type', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').type('After Booking', { force: true }).type('{enter}');


        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลเป็นตัวอักษรไทย Due Type', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').type('ทดสอบ', { force: true });

    })

    it('กรอกข้อมูลแค่ Due Day', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').type('12');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').should('have.value', '12');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Due Type', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due_type').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due_type').type('Before Arrival', { force: true }).type('{enter}');


        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Calculation Method', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');


        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลเป็นตัวอักษรไทย Calculation Method', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').type('ทดสอบ', { force: true });


        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลเป็นเลขทศนิยม Calculation Value', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').type('2.50');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').should('have.value', '2.50');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it('กรอกข้อมูลครบ required fields (Calculation Rule and Deposit Schedule)', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').type('5');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_to').should('have.value', '5');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').type('1.50');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_calc_val').should('have.value', '1.50');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').type('1');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due').should('have.value', '1');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_rule_due_type').type('Before Arrival', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').type('123');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due').should('have.value', '123');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due_type').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_due_type').type('Before Arrival', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').clear();
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').type('3.50');
        cy.get('div.ant-modal-content #ms_deposit_policy_calculation_mapping_schedule_val').should('have.value', '3.50');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it('กดปุ่ม Cancel Delete', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();
        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-htwhyh.ant-btn-default').click();

    })

    it('กดปุ่ม Delete', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();

    })

    it('กดปุ่ม Confirm Delete', () => {
        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/deposit-policies/8fa174de-ec4d-4a6e-86f4-82e9832822a1')

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();
        cy.get('body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })
})