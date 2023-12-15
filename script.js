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

  export function aufgabe04 (args) { // Wörter werden gezählt
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

      export function aufgabe06 (args) { //Überprüft ob ein Sonderzeichen vorhanden ist
        const input = args

        for (let i=0;i <input.length; i++) {
          const ascii = input[i].charCodeAt (0)
        
          if (0 <= ascii&&ascii <= 31){ // ASCII Werte zwischen 0 und 31 sind Sonderzeichen
            return true
          }else if (33 <= ascii&&ascii <= 64){ // ASCII Werte zwischen 33 und 64 sind Sonderzeichen
            return true
            }else if (123<= ascii){ // ASCII Werte ab 123  sind Sonderzeichen
              return true
          
              } else if (91 <= ascii&&ascii <= 96) // ASCII Werte zwischen 91 und 96 sind Sonderzeichen
              return true
              
              }
              return false } //Wenn kein Sonderzeichen vorhanden ist, wird false gegeben
              

        
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

      export function aufgabe08(args) { // Alle "e" durch 3 ersetzen
        const input = args
        const result = []
      
        for (let i = 0; i < input.length; i++) {
          const currentElement = input[i]
          if (currentElement === "e") { // Wenn das Element "e" ist 
           result.push("3") // wird es durch 3 ersetzt
          }
        
         else {
          result.push(currentElement)
         } 
        }
        return result.join("")
      }
    
      export function aufgabe09 (args) { // Überprüft ob die Eingabe 6 Zeichen lang ist
        const input = args
        const result = []
        
        if (input.length === 6) { // Überprüft ob die Eingabe 6 Zeichen lang ist
        return true // gibt true wenn es 6 Zeichen lang ist
      }
      else 
      return false // gibt false wenn es nicht stimmt
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

export function aufgabe11 (args) { //Gibt den ASCII-Wert an
  const input = args

  for (let i =0; i < input.length; i++) {
    const currentElement = input [i]
    const ascii = currentElement.charCodeAt (0)                                                                                                                                                                                                           

    if (input.length === 1) { //Überprüft ob die Eingabe nur 1 Zeichen lang ist
      return ascii //gibt den ASCII-Wert an
    }
      
     
  } }

  export function aufgabe12 (args) { //sucht Position des ersten "e"
    const input = args
    const result = []
    
    
    for (let i = 0; i < input.length; i++) {
     
      const currentElement = input[i]
      
      if (currentElement === "e"){ // Wenn das Element "e" ist
        return i // gibt den Index
      }
    }
    return -1 //gibt -1 wenn kein "e" gefunden wurde
  }

  

  export function aufgabe13 (args) { //sucht Position des letzten "e"
    const input = args
    const result = []
    
    
    for (let i = input.length; i > 1; i--) {
     
      const currentElement = input[i] 
      
      if (currentElement === "e"){ // Wenn das Element "e" ist
        return i // gibt den Index
      }
    }
    return -1 //gibt -1 wenn kein "e" gefunden wurde
  }

  export function aufgabe14 (args) { //sucht Position des dritten "e"
    const input = args
    const result = []
    let Zahl = 0
    
    
    for (let i = 0; i < input.length; i++) {
     
      const currentElement = input[i]
      
      if (currentElement === "e"){  // Wenn das Element "e" ist
        Zahl++ //wird die Zahl um 1 erhöht
      if (Zahl === 3){ //wenn die Zahl 3 erreicht ist
        return i //gibt den Index
      }
    }
    }
    return -1 //gibt -1 wenn kein "e" gefunden wurde
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
  
   export function aufgabe16 (args) { //die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil.
    const input = args
    const result = []
    let count$ = 0

    for (let i = 0; i < input.length; i++) { 
      const currentElement = input[i]
    if (count$ === 0 && currentElement === "$" && i+2 > input.length) {// Überprüft, ob count$ gleich 0 ist, currentElement ein "$" ist und i+2 größer als die Länge des input Arrays ist
    result.push("")
    count$++ // Erhöht Zähler um 1
    }
    else if (currentElement === "$" && count$ === 0) { //wenn das Element ein "$" ist und count$ gleich 0 ist
    result.push(",") // wird ein Komma eingefügt
    count$++ // erhöht den Zähler um 1
    }
    else {
      result.push(currentElement) // das aktuelle Element wird eingefügt
    }
   
  }
  
  return result.join("") //das gesamte Array wird gegeben
  }
  
   export function aufgabe19 (args) { //jedes Zeichen verdoppeln
    const input = args
    const result = []
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      result.push(currentElement) //das aktuelle Element wird eingefügt
      result.push(currentElement) //das aktuelle Element wird wieder dem Array hinzugefügt
    }
    return result.join("") //das gesamte Array wird gegeben
  }

  

  export function aufgabe20 (args) { //Prüft ob nach "." ein Leerzeichen kommt
    const input = args
    const result = []
    
    for (let i = 0; i < input.length; i++) 
    {
      const currentElement = input[i] //das aktuelle Element wird eingegeben
      const currentElement1 = input[i+1] //das Element nach dem aktuellen Element wird eingegeben
      if (currentElement === "." && currentElement1 !== " ") //Überprüft, ob das aktuelle Element ein "." ist und das Element nach dem aktuellen Element kein Leerzeichen ist
    {
      return false //gibt false, wenn Bedingung erfüllt ist
    }
  }
    return true //gibt true
  }

  export function aufgabe21 (args) { // Die Eingabe wird umgedreht
    const input = args
    const result = []
  
    for (let i = input.length; i > -1; i--) { //Eine Schleife, die rückwärts überprüft 

      const currentElement = input[i] //das aktuelle Element wird eingegeben
      result.push(currentElement)
    }
    
    return result.join("") //das gesamte Array (Ergebnis) wird gegeben
  }
  export function aufgabe22 (args) { // alle Zeichen aus der Eingabe mit "_" ersetzt werden ausser erstes "k"
    const input = args
    const result = []
    let count = 0
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (count === 1) { //wenn count 1 ist, wurde erstes "k" gefunden
        result.push(currentElement)
       
      } 
      else if (currentElement === "k") { //wenn aktuelles Element "k" ist wird count um 1 erhöht
        count++
        result.push(currentElement)
}
      else {
        result.push("_")
      
      }
      
  
    }
    return result.join("")
  }

  export function aufgabe23 (args) { //das erste Zeicen ganz vorne und hinten hinzufügen
    const input = args
    const result = []
    const firstElement = input[0]
  
    result.push(firstElement) // firstElement wird dem ergebnis hinzugefügt

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
    
      result.push(currentElement) 
    }
    result.push(firstElement) //fügt fistelement am Ende des Ergebnis hinzu
    
    return result.join("")
  }
  
  export function aufgabe24 (args) { //Das erste und letzte Zeichen werden vertauscht
    const input = args
    const result = []

    if (input.length === 1) return input //wenn es nur ein Element gibt, wird das Element gegeben

const firstElement = input[0] //Das erste und das letzte Element werdne gespeichert
const lastElement = input[input.length - 1]

result.push(lastElement) //Das letzte Element wird dem Array hinzugefügt

    for (let i = 1; i < input.length - 1; i++) { //Alle Elemente zwischen dem ersten und dem letzten Element werden eingegeben
      const currentElement = input[i]
result.push(currentElement)

    }
    result.push(firstElement) //Das erste Element wird dem Array hinzugefügt
    return result.join("") //das gesamte Array wird gegeben
  }

  export function aufgabe26 (args) { //Die ersten zwei Zeichen werden vertauscht
    const input = args
    const list = input.split("")
  
    for (let i = 0; i < list.length - 1; i++) {
      
      const currentElement = list[i]
      const currentElement1 = list[i + 1]
      if (currentElement.charCodeAt(0) > currentElement1.charCodeAt(0)) { //Wenn das aktuelle Element grösser als das Element nach dem aktuellen Element ist
        const tmp = list[i + 1]//Die beiden Elemente werden vertauscht
        list[i+1] = list[i]
        list[i] = tmp
        i = -1
      
      }
    }
    const result = list.join("") //wird in einen String umgewandelt
    return result
  }

  export function aufgabe27 (args) { // testet ob Eingabe eine Zahl ist
    const input = args
    const result = []
  
    if (input.length === 0) {
      return false
    }
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement.charCodeAt(0) >= 48 && currentElement.charCodeAt(0) <= 57) { //wenn  Element eine Zahl ist
      }
      else { //wenn Element keine Zahl ist
        return false
      }
    }
    return true
  }
  
  export function bubbleSort (args) {
    const text = args
  const list = text.split("") 
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) { //Wenn das aktuelle Element grösser als das Element nach dem aktuellen Element ist
      
      const tmp = list[i + 1] //Die beiden Elemente werden vertauscht
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 
    }
  }
  const result = list.join("") //wird in einen String umgewandelt
  return result
  }