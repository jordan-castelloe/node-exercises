
## Exercise: In-App Easter Egg
1. Create a simple express app that includes the following routes:
  - /home
  - /see-our-chickens
  - /see-our-eggs

2. Create a directory in your project for your simple html pages. Each route should have its own webpage.

3. Use a middleware to let your app know which static (cough, hint) html files it should use.

4. Create your own middleware that will place an Easter Egg in your app (see below for specs).

5. Create a middleware that 'catches' the end of the stream if the requested route doesn't match your three defined routes and sends an error back to the browser with `res.send()`.

### Output
If the user goes to any of your routes, they should see the corresponding html page. If they go to a url that contains the word 'egg', the terminal console should display the following:

```
You found the Easter Egg at Mon Sep 12 2016 15:36:57 GMT-0500 (CDT)

        ,ggadddd8888888bbbbaaa,_
     ,ad888,      `Y88,      `Y888baa,
   ,dP"  "Y8b,      `"Y8b,      `"Y8888ba,
  ,88      "Y88b,      `"Y8ba,       `"Y88Ya,
 ,P88b,      `"Y88b,       `"Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        `"Y8ba,_      `Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   `8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         `""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
`b,"Y88ba,         ""Y88baa,_         """Y888bd"
 `b, `"Y88ba,_         ""Y888baa,_         ,8"
  `8,   `""Y88ba,_         `"""Y8888baaaaaP"
   `Ya,     `""Y888ba,_           `"d88P"
     `"Yb,,_     `""Y888baa,__,,adP""'
         `"""YYYY8888888PPPP"""'
```
Experiment with where in your file you place the middelware functions. Does it make a difference if one comes before the other? What if they run before or after you tell Express where to find your static files?



