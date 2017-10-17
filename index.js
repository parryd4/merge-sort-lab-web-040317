function findMinAndRemoveSorted( arr ) {
  return arr.shift()
}

function merge( arr1, arr2 ) {
  let sorted = []
  while( arr1.length !=0 && arr2.length !=0 ){
    arr1[0] < arr2[0] ? sorted.push(findMinAndRemoveSorted(arr1)) : sorted.push(findMinAndRemoveSorted(arr2) )
  }
  return sorted.concat(arr1).concat(arr2)
}

function mergeSort( arr ) {
  let midpoint = arr.length/2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint, arr.length)

  if ( arr.length < 2 ){
    return arr
  } else {
    merge(mergeSort(firstHalf),mergeSort(secondHalf))
  }

}
