import { Technology } from "../types";

export const sortSkills = (arr: Array<Technology>) => {
    const firstSorted = [...arr].sort((a, b) => a.text.localeCompare(b.text));

    const reverseSorted = [...arr].sort((a, b) => b.text.localeCompare(a.text));

    return [firstSorted, reverseSorted];
};
