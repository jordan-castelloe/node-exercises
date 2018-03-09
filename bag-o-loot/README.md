
## Instructions

You have an acquaintance whose job is to, once a year, deliver presents to the best kids around the world. They have a problem, though. There are so many good boys and girls in the world now, that their old paper accounting systems just don't cut it anymore. They want you to write a program that will let them do the following tasks.

1. Add a toy to the bag o' loot, and label it with the child's name who will receive it.

    ```bash
    node lootbag.js add kite suzy
    node lootbag.js add baseball michael
    ```

1. Remove a toy from the bag o' loot in case a child's status changes before delivery starts.

    ```bash
    node lootbag.js remove suzy kite
    node lootbag.js remove michael baseball
    ```

1. Produce a list of children currently receiving presents.

    ```bash
    node lootbag.js ls
    ```

1. List toys in the bag o' loot for a specific child.

    ```bash
    node lootbag.js ls suzy
    ```

1. Specify when a child's toys have been delivered.

    ```bash
    node lootbag.js delivered suzy
    ```


## Requirements

**Write a test before you write implementation code**

1. Items can be added to bag.
1. Items can be removed from bag, per child only. Removing `ball` from the bag should not be allowed. A child's name must be specified.
1. Must be able to list all children who are getting a toy.
1. Must be able to list all toys for a given child's name.
1. Must be able to set the *delivered* property of a child, which defaults to `false` to `true`.

## Bonus Features

1. Write a help response that lists all of the possible arguments, and what they do.
1. Create a shortcut combination of arguments that can remove *all* toys from the bag for a child who has been deemed naughty.

## To Run
- `` git clone ``
- `` npm install ``
- `` node/scripts lootbag.js add kite suzy ``, etc. 
- (See above for sample commands!)