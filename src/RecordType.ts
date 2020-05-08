/*
let dictionary: {
  [key: string]: any;
} = {};
*/

let dictionary: Record<string, typeof item> = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: "js02",
  next: "8nlksjsk",
};

// Numbers are coerced to String
dictionary[0] = item;

// Record type under the hood

/*
type Record <K extends string,T>={
    [P in K]:T
}


*/
