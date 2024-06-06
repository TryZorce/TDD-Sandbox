import { flyable } from '../../avion/calculs.mjs';
import { expect } from 'chai';

describe('Calculs avion', function () {
    it('[TRUE] Condition normal', function() {
        let reponse = flyable(183040, 246070, 396893, 265350, 173997, 400, 350, 1000);
        expect(reponse).to.be.true;
    });

    it('[FALSE] le nombre de passagers dépasse le maximum', function() {
        let reponse = flyable(183040, 246070, 396893, 265350, 173997, 400, 450, 1000);
        expect(reponse).to.be.false;
    });

    it('[FALSE] le poids total chargé dépasse le poids maximum à vide', function() {
        let reponse = flyable(183040, 246070, 396893, 265350, 173997, 400, 800, 1000);
        expect(reponse).to.be.false;
    });

    it('[FALSE] le poids total avec carburant dépasse le poids maximum au décollage', function() {
        let reponse = flyable(183040, 246070, 396893, 265350, 173997, 400, 400, 10000);
        expect(reponse).to.be.false;
    });

    it('[FALSE] le poids chargé dépasse le poids maximum à l\'atterrissage', function() {
        let reponse = flyable(183040, 246070, 396893, 265350, 173997, 400, 350, 10000);
        expect(reponse).to.be.false;
    });

    it('[FALSE] le carburant nécessaire pour les passagers dépasse la capacité de carburant', function() {
        let reponse = flyable(183040, 246070, 396893, 265350, 1000, 400, 400, 10000);
        expect(reponse).to.be.false;
    });
});