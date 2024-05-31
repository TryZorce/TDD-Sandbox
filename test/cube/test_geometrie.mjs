import { assert } from 'chai';
import * as geometrie from '../../cube/geometrie.mjs';
import Cube from '../../cube/cube.mjs';

describe('Géométrie cube', function () {
  it('should calculate the perimeter of a cube with side 3', function() {
    let response = geometrie.perimetre(3);
    assert.equal(response, 36);
  });

  it('should calculate the area of one face of a cube with side 3', function() {
    let response = geometrie.aireFace(3);
    assert.equal(response, 9);
  });

  it('should calculate the surface area of a cube with side 3', function() {
    let response = geometrie.surface(3);
    assert.equal(response, 54);
  });

  it('should calculate the volume of a cube with side 3', function() {
    let response = geometrie.volume(3);
    assert.equal(response, 27);
  });
});

describe('Géométrie cube class', function () {
  it('should calculate the perimeter of a cube with side 3', function() {
    let cube = new Cube(3);
    let response = cube.perimetre();
    assert.equal(response, 36);
  });

  it('should calculate the area of one face of a cube with side 3', function() {
    let cube = new Cube(3);
    let response = cube.aireFace();
    assert.equal(response, 9);
  });

  it('should calculate the surface area of a cube with side 3', function() {
    let cube = new Cube(3);
    let response = cube.surface();
    assert.equal(response, 54);
  });

  it('should calculate the volume of a cube with side 3', function() {
    let cube = new Cube(3);
    let response = cube.volume();
    assert.equal(response, 27);
  });
});
