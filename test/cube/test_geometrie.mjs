import { assert } from 'chai';
import * as geometrie from '../../cube/geometrie.mjs';
import Cube from '../../cube/cube.mjs';

describe('Géométrie du cube', function () {
  it('calculer le périmètre d\'un cube avec un côté de 3', function() {
    let response = geometrie.perimetre(3);
    assert.equal(response, 36);
  });

  it('calculer l\'aire d\'une face d\'un cube avec un côté de 3', function() {
    let response = geometrie.aireFace(3);
    assert.equal(response, 9);
  });

  it('calculer la surface totale d\'un cube avec un côté de 3', function() {
    let response = geometrie.surface(3);
    assert.equal(response, 54);
  });

  it('calculer le volume d\'un cube avec un côté de 3', function() {
    let response = geometrie.volume(3);
    assert.equal(response, 27);
  });
});

describe('Classe Géométrie du cube', function () {
  it('calculer le périmètre d\'un cube avec un côté de 3', function() {
    let cube = new Cube(3);
    let response = cube.perimetre();
    assert.equal(response, 36);
  });

  it('calculer l\'aire d\'une face d\'un cube avec un côté de 3', function() {
    let cube = new Cube(3);
    let response = cube.aireFace();
    assert.equal(response, 9);
  });

  it('calculer la surface totale d\'un cube avec un côté de 3', function() {
    let cube = new Cube(3);
    let response = cube.surface();
    assert.equal(response, 54);
  });

  it('calculer le volume d\'un cube avec un côté de 3', function() {
    let cube = new Cube(3);
    let response = cube.volume();
    assert.equal(response, 27);
  });
});
