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
        if (val >= 0) {
            for (let start = 0; start <= val; ++start) sum += start;
        } else {
            for (let start = val; start <= 0; ++start) sum += start;
        }
        return sum;
    }
});