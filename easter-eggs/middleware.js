const { Router } = require('express');
const animalRouter = Router();

const getEgg = () => {
  let egg =
          `,ggadddd8888888bbbbaaa,_
     ,ad888,      \`Y88,      \`Y888baa,
   ,dP"  "Y8b,      \`"Y8b,      \`"Y8888ba,
  , 88      "Y88b,      \`"Y8ba, \`"Y88Ya,
 ,P88b,      \`"Y88b,       \`"Y8ba, _       ""8a,
, P'"Y88b,        "Y88b,        \`"Y8ba,_      \`Ya,
  8'    "Y88b,        ""Y8ba,         ""Y8ba,_   \`8,
  8b       "Y88b,         ""Y8ba,_         ""Y88baaY
  88b, "Y88ba,         ""Y88ba,_         \`""P
  8Y88ba, ""Y88ba, _         ""Y88ba,, _, P'
    \`b,"Y88ba,         ""Y88baa,_         """Y888bd"
 \`b, \`"Y88ba,_         ""Y888baa,_         ,8"
  \`8, \`""Y88ba,_         \`"""Y8888baaaaaP"
    \`Ya,     \`""Y888ba, _\`"d88P"
     \`"Yb,,_     \`""Y888baa,__,,adP""'
         \`"""YYYY8888888PPPP"""'`;

  return egg;
}

const getTime = () => {
  let time = new Date().toString();
  let timeString = `You found an easter egg on ${time}.`
  return timeString
}

animalRouter.get("/chickens", (req, res, next) => {
  res.sendFile(__dirname + '/public/see-our-chickens.html');
})

animalRouter.get("/eggs", (req, res, next) => {
  let timeString = getTime();
  let egg = getEgg();
  console.log(timeString);
  console.log(egg);
  res.sendFile(__dirname + '/public/see-our-eggs.html');
})

animalRouter.get("/home", (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
})

module.exports = animalRouter;

