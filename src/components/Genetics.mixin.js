export const GeneticsMixin = {
    methods: {
        getOutcomes(flower1, flower2) {
            if (!flower1 || !flower2) {
                return '';
            }

            var combinations = this.genotypeCombinations(flower1.genotype, flower2.genotype);
            var totalCombinations = combinations.length;

            var outcomeData = {};

            for (let combination of combinations) {
                if (combination in outcomeData) {
                    outcomeData[combination].total += 1;
                } else {
                    outcomeData[combination] = {total: 1};
                }
            }

            var groupedByColor = {};

            // :/
            for (let key in outcomeData) {
                outcomeData[key].percent = (outcomeData[key].total / totalCombinations) * 100;
                var color = this.flowers.find(f => f.genotype === key).color;

                if (color in groupedByColor) {
                    groupedByColor[color].outcomes.push(
                        {genotype: key, percent: outcomeData[key].percent}
                    );
                    groupedByColor[color].percent += outcomeData[key].percent;
                } else {
                    groupedByColor[color] = {
                        outcomes: [
                            {genotype: key, percent: outcomeData[key].percent}
                        ]
                    };
                    groupedByColor[color].percent = outcomeData[key].percent;
                }
            }

            return groupedByColor;
        },
        genotypeCombinations(genotype1, genotype2) {
            let redGenes = this.geneCombinations(
                genotype1.slice(0, 2),
                genotype2.slice(0, 2));

            let yellowGenes = this.geneCombinations(
                genotype1.slice(2, 4),
                genotype2.slice(2, 4));

            let whiteGenes = this.geneCombinations(
                genotype1.slice(4, 6),
                genotype2.slice(4, 6));

            return this.arrayCombinations([redGenes, yellowGenes, whiteGenes]);
        },
        geneCombinations(gene1, gene2) {
            let genes = [];

            for (const c1 of gene1) {
                for (const c2 of gene2) {
                    // Order dominant gene first. Upper case characters have a lower value?
                    genes.push((c1 < c2) ? (c1 + c2) : (c2 + c1));
                }
            }

            return genes;
        },
        arrayCombinations(arrays) {
            // Borrowed from https://stackoverflow.com/questions/4331092/finding-all-combinations-cartesian-product-of-javascript-array-values
            if (arrays.length === 1) {
                return arrays[0];
            }

            var result = [];
            var allCasesOfRest = this.arrayCombinations(arrays.slice(1));  // recur with the rest of array
            for (var i = 0; i < allCasesOfRest.length; i++) {
                for (var j = 0; j < arrays[0].length; j++) {
                    result.push(arrays[0][j] + allCasesOfRest[i]);
                }
            }
            return result;
        }
    }
};

export default {
  GeneticsMixin
}