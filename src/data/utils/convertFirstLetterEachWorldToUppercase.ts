export const convertFirstLetterEachWorldToUppercase = (name: string | undefined): string | undefined => {
    const arrName = name?.split(" ");
    arrName?.forEach((word: string, index: number) => {
        if (word === '') {
            arrName[index] = word;
        } else {
            const firstLetter = word[0]?.toUpperCase();
            const joinLetters = firstLetter + word?.slice(1);
            arrName[index] = joinLetters;    
        }
    });
    return name ? arrName?.join(" ") : undefined;
}