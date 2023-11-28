export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
     // result.push("")
    }
    else if(currentElement === "E") {
      //result.push("")
    }
   else {
    result.push(currentElement)
   } 
  }
  return result.join("")
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    currentElement = currentElement.toUpperCase()
    result.push(currentElement)
  
  }
  
  return result.join("")
}

export function aufgabe03 (args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    if (currentElement === "e") {
      count++
    }
    else if (currentElement === "E") {
      count++
    }
  }
  
  return count

  }

  export function aufgabe04 (args) {
    const input = args
    const result = []
    let count = 1
    for (let i = 0; i < input.length; i++) {
      const currentElement = input [i]
      if (currentElement === " ") {
        count++
      }
}
    return count
  }

  export function aufgabe05 (args) {
    const input = args
    const result = []
    
    return result.join("")
  }

export function aufgabe10 (args) {
  const input = args
  
  if (input.length !== 7 ) return false
  if (input[0] !== "#") return false

  for (let i =1; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)
    
    if (48 <= ascii && ascii <= 57) {
      //Ist eine Ziffer

    } else if (65 <= ascii && ascii <= 70) {
    //Ist A-F
  } else {
    return false
  }
  }

  return true
}