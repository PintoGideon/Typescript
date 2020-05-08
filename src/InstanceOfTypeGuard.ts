class Foo {
  bar() {}
}

const bar = new Foo();

console.log(Object.getPrototypeOf(bar) === Foo.prototype);

console.log(bar instanceof Foo);

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

/*
function getItemName(item: Song | Playlist) {
  if ((item as Song).title) {
    return (item as Song).title;
  }
  return (item as Playlist).name;
}

const songName = getItemName(new Song("Living hope", 3000));

const playListName = getItemName(
  new Playlist("Test song", [new Song("test1", 2000)])
);
*/

// Refactoring the above code.

function getItemName(item: Song | Playlist) {
  if (item instanceof Song) {
    return item.title;
  }
  return item.name;
}

/* User defined type guards

function isSong(item:any):item is Song{
    return item instanceof Song;
}

function getItemName(item:Song | Playlist){
    if(isSong(item)){
        return item.title
    }
}

*/


