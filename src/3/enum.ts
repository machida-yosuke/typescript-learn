enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const left = Direction.Left
console.log(left) // 2

// enum Ports {
//   AA_SERVICE = '1000',
//   BB_SERVICE = '2000',
//   CC_SERVICE = '3000',
// }

enum Ports {
  AA_SERVICE = '1000',
}
enum Ports {
  BB_SERVICE = '2000',
}
enum Ports {
  CC_SERVICE = '3000',
}

const port = Ports.AA_SERVICE
console.log(left) // 1000
