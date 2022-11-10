export const isServer: boolean = !(
  typeof window !== 'undefined'
);

export const formatAmount = (amount:string) => new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(Number(amount));
