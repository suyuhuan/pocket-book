export const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
}
  
export const toTime = (time =+ new Date()) => {
    let date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0,19).replace('T',' ')
}

export const numRange = (size, startAt = 0) => {
    const arr = []
    for(let i = 0; i < size; i++) {
      arr[i] = startAt + i
    }
    return arr
}

export const padZero = (n) => {
    return n < 10 ? '0' + n : n
  }
  

