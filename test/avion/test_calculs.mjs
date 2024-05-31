import { expect } from 'chai';
import { volPossible } from '../../avion/calculs.mjs';

describe('Calculs avion', function () {
  it('IL VOL CETTE AVION DE MEEEEERDE ?', function() {
    const params = {
      poidsVide: 183040,
      poidsMaxSansCarburant: 246070,
      poidsMaxDecollage: 396893,
      poidsMaxAtterrissage: 265350,
      capaciteMaxCarburant: 173997,
      nombrePassagers: 400,
      poidsParPassager: 100,
      consommationPar100kmParPassager: 3.1,
      densiteCarburant: 0.81
    };
    let reponse = volPossible(params);
    expect(reponse).to.be.true;
  });
});
