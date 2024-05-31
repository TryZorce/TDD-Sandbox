export function flyable(poidsAVide, poidsMaxCharge, poidsMaxDecollage, poidsMaxAtterrissage, capaciteCarburant, capacitePassagersMax, nbPassagers, distance) {
  const poidsPassager = 100; 
  const consommationCarburantPassagerPar100km = 3.1;
  const densiteKerosene = 0.81; 

  if (nbPassagers > capacitePassagersMax) {
      return false;
  }

  const poidsPassagers = nbPassagers * poidsPassager;
  const poidsTotalCharge = poidsAVide + poidsPassagers;
  if (poidsTotalCharge > poidsMaxCharge) {
      return false;
  }

  const carburantNecessaire = nbPassagers * (consommationCarburantPassagerPar100km / 100) * distance * densiteKerosene;
  if (carburantNecessaire > capaciteCarburant) {
      return false;
  }

  const poidsTotalAvecCarburant = poidsTotalCharge + carburantNecessaire;
  if (poidsTotalAvecCarburant > poidsMaxDecollage) {
      return false;
  }

  if (poidsTotalCharge + carburantNecessaire > poidsMaxAtterrissage) {
      return false;
  }

  return true;
}
