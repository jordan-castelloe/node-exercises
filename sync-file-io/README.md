## Requirements

Create a JavaScript file to act as a Node.js program named `file-io.js`. This program
should accept a single argument which should be a file path. Executing the
program will print the contents of that file onto the terminal through the [stdout](http://node.readthedocs.io/en/stable/api/process/#processstdout)
stream. Executing the program without an argument should simply return without
printing anything. This functionality to be similar to the `cat` command.

Optional: create a second file named `file-io.json` for your program to read.

Example:

```json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

Expected:

```bash
$ ./file-io.js 07.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}

```

Note: Make sure with `pwd` before executing that you are in the directory that
file is in.

## Bonus

-   ES6 Object Destructuring
-   Avoid `.toString`. Return a String primitive rather than a Buffer object
    from `readFileSync`


## To Run
- `` git clone ``
- ``chmod +x ./file-io.js``
- ``./file-io.js file-io.json``

Note: you can substitue ``file-io.json`` for any file you want to read.