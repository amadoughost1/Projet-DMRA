// Leap Year Checker (Vérification d'année bissextile)
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
let year = parseInt(prompt("Entrez une année :"));
if (isLeapYear(year)) {
    alert(`L'année ${year} est bissextile.`);
} else {
    alert(`L'année ${year} n'est pas bissextile.`);
}

// Ticket Pricing (Tarification des billets)
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Exemple d'utilisation
let age = parseInt(prompt("Quel est votre âge ?"));
let price = getTicketPrice(age);
alert(`Le prix du billet est ${price} $.`);

// Séquence de Fibonacci (Fonction récursive pour le nième nombre de Fibonacci)
function fibonacci(n) {
    // Cas de base
    if (n <= 1) {
        return n;
    }
    // Appel récursif pour calculer les deux nombres précédents
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple d'utilisation
let n = parseInt(prompt("Entrez le rang n de la séquence de Fibonacci :"));
alert(`Le ${n}ème nombre de la séquence de Fibonacci est ${fibonacci(n)}.`);

// Fonction de puissance (Élever un nombre à une puissance donnée de manière récursive)
function power(base, exponent) {
    // Cas de base : Si l'exposant est 0, la réponse est 1
    if (exponent === 0) {
        return 1;
    }
    // Si l'exposant est positif, on multiplie la base par le résultat de l'exposant - 1
    return base * power(base, exponent - 1);
}

// Exemple d'utilisation
let base = parseInt(prompt("Entrez la base :"));
let exponent = parseInt(prompt("Entrez l'exposant :"));
alert(`${base} élevé à la puissance ${exponent} est ${power(base, exponent)}.`);
