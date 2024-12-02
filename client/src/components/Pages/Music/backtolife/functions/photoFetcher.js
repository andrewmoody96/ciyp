// Pass array as props to the proper slideshow.

// GOOD TO GO
// export function getFeatured() {
//   let featuredSet = [];
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`/api/btlfeatured`);
//       const jsonData = await res.json();
//       jsonData.forEach((file, jsonData) => {
//         if (file.type === "image/webp") {
//           featuredSet.push(file);
//         }
//         if (featuredSet.length === jsonData.length - 1) {
//           console.log("getFeatured(): Successful");
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }

// export function getSet1() {
//   let photoSet1 = [];
//   console.log("getSet1 - launched");
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`/api/btlsetone`);
//       const jsonData = await res.json();
//       jsonData.forEach((file, i, jsonData) => {
//         if (file.type === "video/webm") {
//           photoSet1.push(file);
//         } else if (file.type === "image/webp") {
//           photoSet1.push(file);
//         }
//         if (photoSet1.length === jsonData.length - 1) {
//           console.log("getSet1(): Successful");
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }

// export function getSet2() {
//   let photoSet2 = [];
//   console.log("getSet2 - launched");
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`/api/btlset2`);
//       const jsonData = await res.json();
//       jsonData.forEach((file, i, jsonData) => {
//         if (file.type === "video/webm") {
//           photoSet2.push(file);
//         } else if (file.type === "image/webp") {
//           photoSet2.push(file);
//         }
//         if (photoSet2.length === jsonData.length - 1) {
//           console.log("getSet2(): Successful");
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }

// export function getSet3() {
//   let photoSet3 = [];
//   console.log("getSet3 - launched");
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`/api/btlset3`);
//       const jsonData = await res.json();
//       jsonData.forEach((file, i, jsonData) => {
//         if (file.type === "video/webm") {
//           photoSet3.push(file);
//         } else if (file.type === "image/webp") {
//           photoSet3.push(file);
//         }
//         if (photoSet3.length === jsonData.length - 1) {
//           console.log("getSet3(): Successful");
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }
