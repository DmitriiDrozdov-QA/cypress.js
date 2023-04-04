describe('Оформление заказа на huntingpony.com', function () {
    it('Оформление заказа на huntingpony.com', function () {
         cy.visit('https://huntingpony.com');
         cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="339746828"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
         cy.wait(5000);
         cy.get('.add-cart-counter__btn').click();
         cy.wait(5000);
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.wait(5000);
         cy.get('.add-cart-counter__detail').click();
         cy.get('.cart-controls > .button').click();
         cy.wait(5000);
         cy.get('#client_surname').click();
         cy.get('#client_surname').type('Дроздов');
         cy.get('#client_contact_name').type('Дмитрий');
         cy.get('#client_phone').type('+79137652425');
         cy.get('#client_email').type('d_drozdovich154@mail.ru');
         cy.get('#shipping_address_full_locality_name').clear().type('г Бердск, Новосибирская обл.');
         cy.get('[for="order_delivery_variant_id_4754106"] > .radio > span').click();
         cy.get('#shipping_address_street').type('Комсомольская');
         cy.get('#shipping_address_house').type('13');
         cy.get('#order_comment').type('Позвонить за 30 минут');
         cy.get('.co-input--required > .co-input-select > .co-input-field').click()
         cy.get('.co-input--required > .co-input-select > .co-input-field').contains('Мальчик').then(option => {

             cy.wrap(option).contains('Мальчик');
      
            option[0].click();});
         


    })
})