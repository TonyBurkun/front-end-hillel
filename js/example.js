// function Worker(technology, experience, energy) {
//     this.experience = experience;
//     this.hiredAt = new Date(2020, 3, 20);
//     this.probationPeriod = 90;
//     this.technology = technology;
//     this.maxEnergy = this.energy = energy;
// }
//
// Worker.prototype.isReadyToWork = function() {
//     return this.energy > 0;
// };
//
// Worker.prototype.getProbationPeriodLeft = function() {
//     var diff = (this.hiredAt - new Date()) / (1000 * 60 * 60 * 24);
//     return diff > 0 ? diff : 0;
// };
//
// function Company(name) {
//     this.staffExpAcceptable = 5;
//     this.name = name;
//     this.staff = [];
// }
//
// Company.prototype.everyProbationPeriodPassed = function() {
//     return this.staff.every(function(worker) {
//         return worker.getProbationPeriodLeft() === 0;
//     });
// };
//
// Company.prototype.hire = function(worker) {
//     if (this.staffExpAcceptable > worker.experience) {
//         console.error("Go away!");
//     } else {
//         this.staff.push(worker);
//     }
// };
//
// var jsDev = new Worker("JavaScript", 4, 200);
// var csDev = new Worker("CSharp", 10, 200);
// var company = new Company("OLOLO");
//
// // {} (constructor = Object) -> Object.prototype
// // {} (constructor = Worker) -> Worker.prototype -> Object.prototype
// // {} (constructor = Company) -> Company.prototype -> Object.prototype
//
// company.hire(jsDev);
// company.hire(csDev);
//
// console.log(company.everyProbationPeriodPassed());
