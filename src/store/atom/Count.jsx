import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "customAtom",
    default: 0
}); 

export const setValue = selector({
    key: 'setValue',
    get: ({ get }) => {
        let val = get(countAtom);
        let sum = 0;
        for (let start = 0; start <= val; ++start) sum += start;
        return sum;
    }
});