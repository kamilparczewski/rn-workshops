export const sortWeights = (weights) => {
  let sortedWeights = weights;

  sortedWeights.sort((weight1, weight2) => {
    const date1 = new Date(weight1.date);
    const date2 = new Date(weight2.date);

    return date1 - date2;
  })

  sortedWeights.reverse();

  return sortedWeights;
}
