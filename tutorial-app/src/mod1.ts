console.log("mod1");

// Diese Funktionen können von implementierenden Instanzen verwendet werden.
export function doIt(){
    console.log("do it");
}
export function doIt2(){
    console.log("do it 2");
}

export default function makeIt(){
    console.log("make it");
}

export const CONST = 3.14;