export function perimetre(lgCote) {
    return 12 * lgCote;
  }
  
  export function aireFace(lgCote) {
    return lgCote * lgCote;
  }
  
  export function surface(lgCote) {
    return 6 * aireFace(lgCote);
  }
  
  export function volume(lgCote) {
    return lgCote * lgCote * lgCote;
  }
  