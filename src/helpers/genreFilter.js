export const genreFilter = (stateArr, responseArr) => {
    const filtered = [];
    for (const responseItem of responseArr) {
        for (const stateArrItem of stateArr) {
            if (stateArrItem.id === responseItem){
                filtered.push(stateArrItem)
            }
        }
    }
    return filtered;
};