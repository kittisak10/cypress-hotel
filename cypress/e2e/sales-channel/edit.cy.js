describe('template spec', () => {
    // const currentTimestamp = Cypress.moment().format('YYYY-MM-DD HH:mm:ss');
  
    let token;
    before(() => {
      // Retrieve the password from the environment variable
      token = Cypress.env('CYPRESS_SECRET_TOKEN');
    });
  
    
      
      it('create new', () => {  
        cy.visit('https://shospitality.thesuperappcrm.com/main/sales-channel/22b1240b-da4f-4842-9763-00c97e646427')
        cy.setCookie('hotel-token', token);
  
        // cy.get('input[name="channel_code"]').type('YOU');
        // cy.get('input[name="channel_code"]').should('have.value', 'YOU');
          
        cy.get(' #channel_name').clear() ;
        cy.get('input[name="channel_name"]').type('YourValueHere1');
        cy.get('input[name="channel_name"]').should('have.value', 'YourValueHere1');
        
        // cy.get(' #channel_alias').clear() ;
        // cy.get('input[name="channel_alias"]').type('YOU');
        // cy.get('input[name="channel_alias"]').should('have.value', 'YOU');
 
        // cy.get(' #channel_alias').clear() ;

        cy.get('#source_of_business').click({force: true});
        cy.get('.ant-select-item-option[title="CallCTR"]').click();
        // cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(1) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div:nth-child(1) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > div > div').should('have.text', 'Call CTR');
        
        cy.get('#sales_strategy_id').click({force: true});
        cy.get('.ant-select-item-option[title="dd"]').click();

        cy.get(' #first_name').clear() ;
        cy.get('input[name="first_name"]').type('Testcypress');
        cy.get('input[name="first_name"]').should('have.value', 'Testcypress');

        cy.get(' #last_name').clear() ;
        cy.get('input[name="last_name"]').type('Testcypress');
        cy.get('input[name="last_name"]').should('have.value', 'Testcypress');
     
        cy.get(' #job_title').clear() ;
        cy.get('input[name="job_title"]').type('Programer');
        cy.get('input[name="job_title"]').should('have.value', 'Programer');

        cy.get(' #email').clear() ;
        cy.get('input[name="email"]').type('abcdefg@gmail.com');
        cy.get('input[name="email"]').should('have.value', 'abcdefg@gmail.com');

        
        cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control.css-htwhyh > div > div > span > span > span > div > div').click();
        cy.get('body > div:nth-child(6) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click();
        // cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div:nth-child(2) > div > div.ant-row.ant-form-item-row.css-htwhyh > div.ant-col.ant-form-item-control.css-htwhyh > div.ant-form-item-control-input > div > span > span > span > div > div').should('have.text', 'GG');
      
        cy.get('#phone').click();
        cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div:nth-child(2) > div > div.ant-row.ant-form-item-row.css-htwhyh > div.ant-col.ant-form-item-control.css-htwhyh > div.ant-form-item-control-input > div > span > span > span').type('TH');
        // cy.get('#rc-tabs-0-panel-0 > div > div:nth-child(2) > div.ant-collapse-content.ant-collapse-content-active > div > div:nth-child(2) > div:nth-child(2) > div > div.ant-row.ant-form-item-row.css-htwhyh > div.ant-col.ant-form-item-control.css-htwhyh > div.ant-form-item-control-input > div > span > span > span > div > div > span.ant-select-selection-item').click();
        cy.get('body > div:nth-child(6) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div').click({force: true});
        
        cy.get(' #phone').clear() ;
        cy.get('input[id="phone"]').type('123456789');
        cy.get('input[id="phone"]').should('have.value', '123456789');


        cy.get('#cost_per_transaction_type').click({force: true});
        cy.get('.ant-select-item-option[title="Fixed"]').click();

        cy.get(' #cost_per_transaction_amount').clear() ;
        cy.get('#cost_per_transaction_amount').type(6);

        // cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > div > button:nth-child(2)').click();

        cy.get('#__next > section > main > div > div.tw-bg-blue-50 > div > form > div > div.ant-tabs-nav > div.ant-tabs-nav-wrap > div > div:nth-child(2)').click();
        
        cy.get('#channel_type').click({force: true});
        cy.get('.ant-select-item-option[title="Retail"]').click();
     
        cy.get(' #expiration_time_transactions').clear() ;
        cy.get('#expiration_time_transactions').type(10);

    

        cy.get('form.ant-form.ant-form-vertical.css-htwhyh').submit();
        cy.contains('Record(s) have been successfully saved.');
      })
    })