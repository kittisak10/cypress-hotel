describe('template spec', () => {

    it("กดเปลี่ยน ID:Policy ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#__next > section > main > div > div.tw-transition-all > div > div:nth-child(2) > div.ant-list.ant-list-split.css-htwhyh > div > div > ul > li:nth-child(2) > div > div').click();
    })

    it("กดปุ่ม Add New ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-snap-start').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_loyalty_member').click();
        cy.get("body > div:nth-child(5) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now").click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_guest').click();
        cy.get("body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now").click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').type('1');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').should('have.value', '1');

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').click();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').type('Days', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').click();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').type('11');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').should('have.value', '11');

    })

    it("ให้ modal fields เป็นค่าว่าง ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-snap-start').click();
        cy.get('body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it("กดปุ่ม Edit pofilr scroll card ", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();
    })

    it("กดปุ่ม Delete pofilr scroll card", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(2)').click();
    })

    it("กดปุ่มYes: Delete pofilr scroll card", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(2)').click();
        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button:nth-child(1)').click();
    })

    it("กดปุ่มNo: Delete pofilr scroll card", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(1) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(2)').click();
        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button:nth-child(1)').click();
    })

    it('กด timePicker: InternalLoyalty Program Members', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_loyalty_member').click();
        cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now').click();
    })

    it('กด timePicker: Other Guests', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_guest').click();
        cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now').click();
    })

    it('พิมตัวเลขหรือตัวอักษร timePicker: InternalLoyalty Program Members', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_loyalty_member').click();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_loyalty_member').clear();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_loyalty_member').type('ทดสอบ', { force: true });
        cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
    })

    it('พิมตัวเลขหรือตัวอักษร timePicker: Other Guests', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_guest').click();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_guest').clear();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_guest').type('ทดสอบ', { force: true });
        cy.get('body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-ok > button').click();
    })

    it('เลือกข้อมูลแค่ To Days', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

             cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
         cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

         cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').clear();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').type('1');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').should('have.value', '1');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Time Unit', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').click({ force: true });
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').type('Hours', { force: true }).type('{enter}');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลที่ไม่ได้มีใน Time Unit', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').click({ force: true });
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').type('ทดสอบ', { force: true });

    })

    it('เลือกข้อมูลแค่ Calculation Method', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').type('Specific Amount', { force: true }).type('{enter}');


        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลเป็นตัวอักษรไทย Calculation Method', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').click({ force: true });
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').type('ทดสอบ', { force: true });


        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('เลือกข้อมูลแค่ Calculation Value', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').clear();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').type('11');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').should('have.value', '11');

        cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it('กรอกข้อมูลเป็นเลขทศนิยม Calculation Value', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div:nth-child(2) > button').click();
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').clear();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').type('1.50');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').should('have.value', '1.50');

    cy.get('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })

    it("กดปุ่ม Add New (Add New Cancellation)", () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#rc-tabs-0-panel-0 > div > div.ant-col.ant-col-16.css-htwhyh > div > div > div > div > div.ant-collapse-content.ant-collapse-content-active > div > div > div > div > div.tw-overflow-x-auto.tw-flex.tw-gap-2.tw-snap-x.tw-scroll-smooth > div.tw-w-60.tw-h-24.tw-rounded-lg.tw-cursor-pointer.tw-p-2.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-snap-start').click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_loyalty_member').click();
        cy.get("body > div:nth-child(5) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now").click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_guest').click();
        cy.get("body > div:nth-child(6) > div > div > div > div > div.ant-picker-footer > ul > li.ant-picker-now").click();

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').type('1');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_to').should('have.value', '1');

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').click();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_time_unit').type('Days', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').click();
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_method').type('Percent of Total Stay', { force: true }).type('{enter}');

        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').type('11');
        cy.get('div.ant-modal-content #ms_cancellation_refund_policy_calculation_mapping_rule_calc_val').should('have.value', '11');

        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.css-htwhyh.ant-btn-primary').click();
    })

    it('กดปุ่ม Cancel Delete', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();
        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-htwhyh.ant-btn-default').click();

    })

    it('กดปุ่ม Delete', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();

    })

    it('กดปุ่ม Confirm Delete', () => {
        cy.viewport(1600, 1000);
        cy.visit("https://shospitality.thesuperappcrm.com/main/cancellation-refund-policies/d63f4f32-60be-47a7-a9e4-f5129d64a122");
        cy.setCookie('hotel-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg2NDcyNDcsImV4cCI6MTY5ODczMzY0N30.YdMbFKMsmujUBpC1gxRI6qzSZ14Vs7tynaJD8k6hED0');

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(4)').click();
        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-htwhyh.ant-btn-primary').click();

    })
})