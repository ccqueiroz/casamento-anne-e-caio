export const convertFirstLetterEachWorldToUppercase = (name: string): string => {
    const arrName = name.split(" ");
    arrName.forEach((word: string, index: number) => {
        const firstLetter = word[0].toUpperCase();
        const joinLetters = firstLetter + word.slice(1);
        arrName[index] = joinLetters;
    });
    return arrName.join(" ");
}