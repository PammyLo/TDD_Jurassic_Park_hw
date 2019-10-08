const Park = function ( name, ticket ) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = [];
}

Park.prototype.addDino = function( dinosaur ){
  this.dinosaurs.push( dinosaur );
};

// Park.prototype.removeDino = function( dinosaur ){
//   delete this.dinosaurs( dinosaur );
// };

// Park.prototype.findMostAttractive = function(){
//   this.dinosaurs.guestsAttractedPerDay.sort();
//   this.dinosaurs[0].species;
// };
//
// Park.prototype.allFromSpecies = function( this.dinosaurs, species ){
//   newArray = [];
//   for (let dino in this.dinosaurs){
//     if (this.dinosaurs.species === species){
//     newArray.push(dino);
//     newArray.count;
//     }
//   }
// };





module.exports = Park;
