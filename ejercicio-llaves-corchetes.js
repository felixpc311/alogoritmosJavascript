/*
Dado un string formado por {}[](), indicar si los pares correspondientes son correctos:

ENTRADA: [()]{}{[()()]()} (CORRECTO)
[()]{}{[()()]()}
ENTRADA: [(]) (INCORRECTO)
*/

function pares(cadena) {
    let cadena2 = '';
    let largo0 = cadena.length;
    let largo1 = 0;
    let switche = 0;
    let result = null;
    do {
        if (cadena.length == 0) {
            switche = 1;
            result = false;
        } else {
            cadena2 = cadena.replace(/\(\)/g, '').replace(/\[\]/g, '').replace(/\{\}/g, '');
            //console.log(cadena2);
            largo1 = cadena2.length;
            //console.log(largo0);
            //console.log(largo1);
            if (largo1 == 0) {
                switche = 1;
                result = true;
            }
            if (largo1 == largo0) {
                switche = 1;
                result = false;
            }
            if (largo1 < largo0) {
                largo0 = largo1;
                largo1 = 0;
                switche = 0;
                result = "aqui"
            }
            if (largo1 == 0 && largo0 == 0) {
                switche = 1;
                result = true;
            }
            cadena = cadena2;
            //console.log(cadena);
        }

    } while (switche == 0);

    return result;
}

//c = '[()]{}{[()()]()}';
//c = '[[[]]]{{{{{}}}}}';
//c = '';
//c = '[(])';
c = '[{([{([{()}])}])}]';
console.log(pares(c));
console.log(c);
