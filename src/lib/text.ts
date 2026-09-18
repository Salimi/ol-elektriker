// Binds the first two words of each sentence with a non-breaking space so a
// lone word never gets stranded at the end of a line (mobile Safari ignores
// text-wrap: pretty, so this is done in the text itself).
export const joinSentenceStart = (s: string): string =>
  s.replace(/([.!?]\s+)([A-ZÅÄÖ][^\s]*)\s+/g, "$1$2 ");
