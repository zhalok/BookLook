const storage = require("./firebaseConnection");

const { ref, listAll, deleteObject } = require("firebase/storage");

// const listRef = ref(storage, "/");

// listAll(listRef)
//   .then((res) => {
//     res.items.forEach((itemRef) => {
//       deleteObject(itemRef)
//         .then(() => {
//           console.log(`File ${itemRef._location.path_} deleted Successfully`);
//         })
//         .catch((e) => console.log(e));
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const id = 1;
const deleteRef = ref(storage, `${id}`);
deleteObject(deleteRef)
  .then(() => {
    console.log("file deleted");
  })
  .catch((e) => console.log(e));
