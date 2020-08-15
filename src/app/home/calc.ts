/**
 * Author:    Sarah Toupin
 * Created:   10.08.2020
 *
 * (c) Copyright by Sarah Toupin.
 *
 */

// tslint:disable:prefer-const
export function demanderAUtilisateur() {
  let operation = demander(
    "Quelle est l'operation que vous voulez faire? \n (add3 | add | sous | mul | div)"
  );
  let n1 = parseInt(
    demander("Quelle est le premier chiffre de l'operation?") as string,
    10
  );
  let n2 = parseInt(
    demander("Quelle est le deuxieme chiffre de l'operation?") as string,
    10
  );

  if (operation === "add3") {
    let n3 = parseInt(
      demander("Quelle est le troisieme chiffre de l'operation?") as string,
      10
    );
    let res = add3(n1, n2, n3);
    afficher(res);
  }

  if (operation === "add") {
    let res = add(n1, n2);
    afficher(res);
  }

  if (operation === "sous") {
    let res = sous(n1, n2);
    afficher(res);
  }

  if (operation === "mul") {
    let res = mul(n1, n2);
    afficher(res);
  }

  if (operation === "div") {
    let res = div(n1, n2);
    afficher(res);
  }
}

function add3(n1: number, n2: number, n3: number) {
  let res = n1 + n2 + n3;
  return res;
}

function add(n1: number, n2: number) {
  let res = n1 + n2;
  return res;
}

function sous(n1: number, n2: number) {
  let res = n1 - n2;
  return res;
}

function mul(n1: number, n2: number) {
  let res = n1 * n2;
  return res;
}

function div(n1: number, n2: number) {
  if (n2 === 0) {
    return "Erreur";
  } else {
    let res = n1 / n2;
    return res;
  }
}

function afficher(res: any) {
  alert("Le résultat est : " + res);
}

function demander(question: string) {
  return prompt(question);
}
