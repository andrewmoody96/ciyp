// let state = ``;
// let input = ``;

// export default function formatAddress(input) {
//   // console.log(input);
//   function stateCheck(stateZIP) {
//     let stateArr = stateZIP.split(" ");
//     state = `${stateArr[0]}${stateArr[1]}`;
//     return state;
//   }

//   function addressCheck(input) {
//     let commas = input.split(",");
//     if (commas.length > 4) {
//       commas.shift();
//       let city = `${commas[1]},`;
//       let stateZIP = `${commas[2]}`;
//       stateCheck(stateZIP);
//       let location = `${city} ${state}`;
//       return location;
//     } else {
//       let city = `${commas[1]},`;
//       let stateZIP = `${commas[2]}`;
//       stateCheck(stateZIP);
//       let location = `${city} ${state}`;
//       return location;
//     }
//   }

//   addressCheck(input);
// }

// formatAddress(input);
