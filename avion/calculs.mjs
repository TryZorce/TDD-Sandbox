export function volPossible({
  poidsVide,
  poidsMaxSansCarburant,
  poidsMaxDecollage,
  poidsMaxAtterrissage,
  capaciteMaxCarburant,
  nombrePassagers,
  poidsParPassager,
  consommationPar100kmParPassager,
  densiteCarburant
}) {
  const maxPassagers = 400;
  const poidsTotalPassagers = nombrePassagers * poidsParPassager;
  const poidsCharge = poidsVide + poidsTotalPassagers;

  if (poidsVide >= poidsMaxSansCarburant ||
      poidsVide >= poidsMaxDecollage ||
      poidsVide >= poidsMaxAtterrissage) {
    return false;
  }

  if (poidsCharge <= poidsVide) {
    return false;
  }

  if (poidsCharge >= poidsMaxDecollage) {
    return false;
  }

  if (poidsCharge >= poidsMaxSansCarburant || poidsCharge >= poidsMaxAtterrissage) {
    return false;
  }

  const poidsCarburantNecessaire = nombrePassagers * (consommationPar100kmParPassager * 100) * densiteCarburant;
  
  if (poidsCarburantNecessaire >= capaciteMaxCarburant) {
    return false;
  }

  const poidsTotalAvecCarburant = poidsCharge + poidsCarburantNecessaire;
  
  if (poidsTotalAvecCarburant >= poidsMaxDecollage) {
    return false;
  }

  if (nombrePassagers > maxPassagers) {
    return false;
  }

  return true;
}
