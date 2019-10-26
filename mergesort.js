
const mergeSort = (left, right) => {
    let result = []
    let i = 0
    let j = 0

    while(i < left.length && j < right.length){
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while (j < right.length) {
        result.push(right[j])
        j++
    }
    return result
}

const merge_sort = (array) => {
    if (array.length < 2) {
        return array
    } else {
        let mid = Math.floor(array.length / 2)
        let left = array.slice(0, mid)
        let right = array.slice(mid + 1, array.length)
        return mergeSort(left, right)
    }
}



