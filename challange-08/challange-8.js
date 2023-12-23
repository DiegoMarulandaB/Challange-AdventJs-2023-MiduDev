function organizeGifts(gifts) {
  const regex = /([0-9]+)([a-zA-Z]+)/g;
  const organized = [];

  // Iterate through matches
  let match = regex.exec(gifts);
  while (match !== null) {
    const quantity = parseInt(match[1], 10); // Specify the radix (base 10)

    const gift = match[2];

    let pales;
    let cajas;
    let sueltos;

    // Organize based on quantity
    if (quantity >= 50) {
      pales = Math.floor(quantity / 50);
      cajas = Math.floor((quantity % 50) / 10);
      sueltos = quantity - pales * 50 - cajas * 10;
    } else {
      cajas = Math.floor(quantity / 10);
      sueltos = quantity - cajas * 10;
    }

    // Create strings for pales, cajas, and sueltos
    const palesStr = pales !== undefined ? new Array(pales + 1).join(`[${gift}]`) : '';
    const cajasStr = new Array(cajas + 1).join(`{${gift}}`);
    const sueltosStr = sueltos > 0 ? `(${new Array(sueltos + 1).join(gift)})` : '';

    const organizedLine = palesStr ? palesStr + cajasStr + sueltosStr : cajasStr + sueltosStr;

    // Push the organized line to the result array
    organized.push(organizedLine);

    // Move to the next match
    match = regex.exec(gifts);
  }

  // Join the result array and return the final organized string
  return organized.join('');
}

organizeGifts();
