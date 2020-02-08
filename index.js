function parse (string) {
  const array = string.split(/,|;q=/g)

  let quality
  return array.reverse().reduce((e, val) => {
    if (!isNaN(val)) {
      quality = Number(val);
    } else {
      const [lang, dialect] = val.split('-');

      e.push({ lang, dialect, quality });
    }
    return e;
  }, []);
}

module.exports.parse = parse;
