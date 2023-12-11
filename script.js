export function aufgabe01(args)  { //alle "e" entfernen
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

export function aufgabe02 (args) { // Alles in Grossbuchstaben
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    currentElement = currentElement.toUpperCase() //Der Text wird in Grossbuchstaben geschrieben
    result.push(currentElement)
  
  }
  
  return result.join("")
}

export function aufgabe03 (args) { // "e" zählen
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    if (currentElement === "e") { //wenn das aktuelle Element "e" ist, wird Zähler um 1 erhöht
      count++
    }
    else if (currentElement === "E") { //wenn das aktuelle Element "E" ist, wird Zähler um 1 erhöht
      count++
    }
  }
  
  return count //Anzahl "e" wird gegeben

  }

  export function aufgabe04 (args) { // Wörte werden gezählt
    const input = args
    const result = []
    let count = 1
    for (let i = 0; i < input.length; i++) {
      const currentElement = input [i]
      if (currentElement === " ") { //wenn das aktuelle Element ein Leerzeichen ist, wird Zähler um 1 erhöht
        count++
      }
}
    return count //Anzahl Wörter wird gegeben
  }

  export function aufgabe05 (args) { // überprüft ob ein Grossbuchstabe vorhanden ist
    const input = args

    for (let i =0; i < input.length; i++) {
      const ascii = input[i].charCodeAt (0) //Der ASCII-Wert des Elementes wird gegeben
         
      if (65 <= ascii && ascii <= 90) { // wenn der ASCII Wert zwischen 65- 90 (Grossbuchstaben A-Z) ist
        return true // true wird gegeben
        }
        }
        return false //false wird gegeben, falls es kein Grossbuchstabe findet
      }

      export function aufgabe06 (args) {
        const input = args

        for (let i=0;i <input.length; i++) {
          const ascii = input[i].charCodeAt (0)
        
          if (0 <= ascii&&ascii <= 31){
            return true
          }else if (33 <= ascii&&ascii <= 64){
            return true
            }else if (123<= ascii){
              return true
          
              } else if (91 <= ascii&&ascii <= 96)
              return true
              
              }
              return false }
              

        
              export function aufgabe07(args) {
                const input = args
                const result = []
               
                for (let i = 0; i < input.length; i++) {
                  const currentElement = input[i]
                  const currentElement1 = input[i+1]
                  const currentElement2 = input[i+2]
                  if (currentElement === "u" && currentElement1 === "n" && currentElement2 === "d"){
                   return true
                  }
              } 
                return false
              }

      export function aufgabe08(args) {
        const input = args
        const result = []
      
        for (let i = 0; i < input.length; i++) {
          const currentElement = input[i]
          if (currentElement === "e") {
           result.push("3")
          }
        
         else {
          result.push(currentElement)
         } 
        }
        return result.join("")
      }
    
      export function aufgabe09 (args) {
        const input = args
        const result = []
        
        if (input.length === 6) {
        return true 
      }
      else 
      return false
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

export function aufgabe11 (args) {
  const input = args

  for (let i =0; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)                                                                                                                                                                                                           

    if (input.length === 1) {
      return ascii
    }
      
     
  } }

  export function aufgabe12 (args) {
    const input = args
    const result = []
    
    
    for (let i = 0; i < input.length; i++) {
     
      const currentElement = input[i]
      
      if (currentElement === "e"){
        return i
      }
    }
    return -1
  }

  

  export function aufgabe13 (args) {
    const input = args
    const result = []
    
    
    for (let i = input.length; i > 1; i--) {
     
      const currentElement = input[i]
      
      if (currentElement === "e"){
        return i
      }
    }
    return -1
  }

  export function aufgabe14 (args) {
    const input = args
    const result = []
    let Zahl = 0
    
    
    for (let i = 0; i < input.length; i++) {
     
      const currentElement = input[i]
      
      if (currentElement === "e"){
        Zahl++
      if (Zahl === 3){
        return i
      }
    }
    }
    return -1
  }

  export function aufgabe15(args) {
    const input = args
    const result = []
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === " ") {   
        return result.join("") 
      }
      
      result.push(currentElement) 
   
    }
    return result.join("")   
   }
  






   export function aufgabe19 (args) {
    const input = args
    const result = []
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      result.push(currentElement)
      result.push(currentElement)
    }
    return result.join("")
  }

  export function aufgabe20 (args) {
    const input = args
    const result = []
    
    for (let i = 0; i < input.length; i++) 
    {
      const currentElement = input[i]
      const currentElement1 = input[i+1]
      if (currentElement === "." && currentElement1 !== " ")
    {
      return false
    }
  }
    return true
  }