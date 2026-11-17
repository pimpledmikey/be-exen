// Formato numérico fijo (miles con coma, decimales con punto, como se usa en
// México). No depende de Intl para que servidor y navegador rindan lo mismo.
export function formatNumber(value: number, decimals = 0): string {
  const [integer, fraction] = value.toFixed(decimals).split(".");
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction ? `${grouped}.${fraction}` : grouped;
}
