interface Item {
  id: number;
  name: string;
}

const arr: Item[] = [
  { id: 1, name: "paint" },
  { id: 2, name: "bead" },
  { id: 3, name: "arm" },
  { id: 4, name: "snakes" },
  { id: 5, name: "wire" },
  { id: 6, name: "ducks" },
  { id: 1, name: "cork" },
  { id: 1, name: "bed" }
];

// Get the unique objects of this array based on a key
// Just remove the duplicate ones

export const getUniqueObjects: (arr: Item[], id: number) => Item[] = (
  arr,
  id = 1
) => {
  return arr.reduce<Item[]>((acc, val) => {
    const x = acc.find(item => item.id === val.id);
    if (!x) return acc.concat([val]);
    return acc;
  }, []);
};

getUniqueObjects(arr, 1);
