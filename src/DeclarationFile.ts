import * as _ from "lodash";

_.chunk([1, 2, 3, 4], 2);

/* Augmenting Lodash's Module */

_.mixin({
  log(item: string) {
    console.log(":::", item);
  },
});

_.log("Hello");
