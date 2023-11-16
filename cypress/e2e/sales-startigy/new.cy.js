describe('template spec', () => {
    
  let token;
  before(() => {
    // Retrieve the password from the environment variable
    token = Cypress.env('CYPRESS_SECRET_TOKEN');
  });
    
      
      it('กรอกข้อมุลครั้งเดียว', () => {  
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
        cy.setCookie('hotel-token', token);

        cy.get('input[name="sales_strategy_code"]').type('YourValueHere3');
        cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere3');

        cy.get('input[name="sales_strategy_name"]').type('YourValueHere3');
        cy.get('input[name="sales_strategy_name"]').should('have.value', 'YourValueHere3');
    
        cy.get('#higher_sort_order_id').click();
        cy.get('.ant-select-item-option[title="Rate Plan"]').click();
      
        cy.get('textarea[id="comments"]').type('YourValueHere3');
        cy.get('textarea[id="comments"]').should('have.value', 'YourValueHere3');
  
       
        cy.get('#rate_plan_id').click();
        
        cy.get('body > div:nth-child(5) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click('', { force: true }).type('{enter}');
        

        cy.get('#room_type_id').click();
        cy.get('body > div:nth-child(6) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click('', { force: true }).type('{enter}');
       


        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();
       
    
        cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
        // cy.contains('Record(s) have been successfully saved.');
      })
      it('กรอกข้อมูลแค่  Sales Strategy Code', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_code"]').type('YourValueHere4');
        cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere4');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Code เป็นภาษาไทย', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_code"]').type('YourValueHere4');
        cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere4');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Code เป็นภาษาไทย', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_code"]').type('YourValueHere4');
        cy.get('input[name="sales_strategy_code"]').should('have.value', 'YourValueHere4');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      }) 
      it('กรอกข้อมูลแค่  Sales Strategy Code เป็นอักษรพิเศษ', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_code"]').type('+-*/');
        cy.get('input[name="sales_strategy_code"]').should('have.value', '+-*/');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Code เป็นค่าว่าง', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_code"]').type('');
        cy.get('input[name="sales_strategy_code"]').should('have.value', '');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Code เป็นค่าว่าง', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_code"]').type('');
        cy.get('input[name="sales_strategy_code"]').should('have.value', '');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Name', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_name"]').type('YourValueHere3');
        cy.get('input[name="sales_strategy_name"]').should('have.value', 'YourValueHere3');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Name เป็นภาษาไทย', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_name"]').type('ทดสอบ');
        cy.get('input[name="sales_strategy_name"]').should('have.value', 'ทดสอบ');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Name เป็นอักษรพิเศษ', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_name"]').type('+-*/');
        cy.get('input[name="sales_strategy_name"]').should('have.value', '+-*/');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่  Sales Strategy Name เป็นค่าว่าง', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('input[name="sales_strategy_name"]').type('+-*/');
        cy.get('input[name="sales_strategy_name"]').should('have.value', '+-*/');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
       it('กรอกข้อมูลแค่ Comments', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('textarea[id="comments"]').type('YourValueHere3');
        cy.get('textarea[id="comments"]').should('have.value', 'YourValueHere3');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่ Comments เป็นภาษาไทย', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('textarea[id="comments"]').type('YourValueHere3');
        cy.get('textarea[id="comments"]').should('have.value', 'YourValueHere3');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่ Comments เป็นอักษรพิเศษ', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('textarea[id="comments"]').type('+-*/');
        cy.get('textarea[id="comments"]').should('have.value', '+-*/');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })
      it('กรอกข้อมูลแค่ Comments เป็นค่าว่าง', () => {

        cy.viewport(1600, 1000);
        cy.setCookie('hotel-token', token);
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-strategy/new')
    
       
        cy.get('textarea[id="comments"]').type('');
        cy.get('textarea[id="comments"]').should('have.value', '');

        
        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > a > button').click();
    
      })

    })