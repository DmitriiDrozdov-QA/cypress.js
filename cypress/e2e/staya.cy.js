
describe('Тестирование staya', function () {
    
    it('Проходка до оформления заказа', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/catalog/leashes"] > .category-link__canvas-wrapper > .category-link__canvas').click();
        cy.get(':nth-child(1) > .product-list > :nth-child(2) > .SProductCard__body > .SProductCard__name > .SProductCard__link').click();
        cy.get('.Option_checked > .Option__bubble-wrapper > .Option__bubble > .Option__bubble-img').click();
        cy.get(':nth-child(1) > .option__details > p').click();
        cy.get(':nth-child(7) > .SSpoiler > .SSpoiler__container > .SRadioButton_checked > .option__details > p').click();
        cy.get('.CTA > .s-button__content').click();

        // cy.end();
         })

     
})
