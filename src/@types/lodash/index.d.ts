import * as _ from "lodash";

declare module "lodash" {
  interface LoDashStatic {
    log(item: string): void;
  }
}
