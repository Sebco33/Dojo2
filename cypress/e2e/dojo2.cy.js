import { faker } from "@faker-js/faker";

describe("Dojo2", () => {
  beforeEach("connxion", () => {
    cy.visit("https://www.demoblaze.com/");
  });
    it("create user", () => {
      cy.get("#signin2").click();
      cy.get("#sign-username").type(`test2`);
      cy.get("#sign-password").type("user123");
      cy.get(
        "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
    });

    //Connexion au compte crée
    it("login user", () => {
      cy.get("#login2").click();
      cy.get("#loginusername", { timeout: 6000 }).type("test2");
      cy.get("#loginpassword").type("user123");
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });

  //Ajouter un produit au panier
  it.skip("ajouter un produit", () => {
    cy.get(":nth-child(1) > .card > .card-block > #article").click();
    cy.get('.col-sm-12 > .btn').click();
  });
});



//btn btn-success btn-lg