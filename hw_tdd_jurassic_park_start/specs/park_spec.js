const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park( 'Jurassic Park', 30 );
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 20);
    dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 35);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual( actual, 'Jurassic Park' );
  });

  it('should have a ticket price', function() {
    const actual = park.ticket;
    assert.equal( actual, 30 );
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepEqual( actual, [] )
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.dinosaurs.length;
    assert.strictEqual( actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual( actual, 0);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    mostAttractiveDino = park.findMostAttractive;
    const actual = mostAttractiveDino;
    assert.deepStrictEqual( actual, 't-rex');
  });

  xit('should be able to find all dinosaurs of a particular species', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.allFromSpecies(velociraptor);
    assert.equal( actual, 1);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');


}); //end of Park function
