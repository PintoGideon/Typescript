interface Painter {
  name: string;
}

// In this case, interface is not providing any implementation detail

class ArtistCreator implements Painter {
  constructor(public name: string) {}
}

function artistFactory({ name }: Painter) {
  return new ArtistCreator(name);
}

artistFactory({ name: "Gideon" });
