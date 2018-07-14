export function prev(id, array) {
    let index = -1;
    const len = array.length;
    array.map((item, idx) => {
        if (item.id === id){
            if(idx === 0)
                index = len;
            else
                index = idx -1;
        }
        return index;
    });

    return index % len;
}

export function next(id, array) {
    let index = -1;
    const len = array.length;
    array.map((item, idx) => {
        if (item.id === id)
            index = idx +1;
        return index;
    });

    return index % len;
}

export function shuffle(mixArray) {
    let newArray = [...mixArray];
    let ctr = newArray.length;
    let index = 0;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        [newArray[ctr], newArray[index]] = [newArray[index], newArray[ctr]];
    }
    return newArray;
}

export function checkDuplicate(arr1, arr2) {
    if (arr2.length === 0)
        return false;

    const checkElemId = arr2[0].id;
    let elemId = null;

    arr1.map(item => {
        if(item.id === checkElemId) {
            elemId = item.id
        }
        return elemId;
    });

    if(elemId === checkElemId)
        return false;

    return true;
}