export const GeneticsMixin = {
    methods: {
        getOutcomes(flower1, flower2) {
            if (!flower1 || !flower2) {
                return '';
            }

            let geneCombinations = this.allGeneCombinations(flower1.genotype, flower2.genotype);
            let combinations = this.arrayCombinations(geneCombinations);
            let totalCombinations = combinations.length;

            let outcomeData = {};

            // Group by genotype and count number of occurrences
            for (let combination of combinations) {
                if (combination in outcomeData) {
                    outcomeData[combination].total += 1;
                } else {
                    outcomeData[combination] = {total: 1};
                }
            }

            let groupedByColor = {};

            // :/
            // Calculate each genotypes percent chance of occurring
            // Group by colour and sum up each color's overall chance of occurring
            for (let key in outcomeData) {
                outcomeData[key].percent = (outcomeData[key].total / totalCombinations) * 100;
                let color = this.genotypes.find(f => f.genotype === key).color;

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
        allGeneCombinations(genotype1, genotype2) {
            let genes1 = genotype1.match(/.{1,2}/g);
            let genes2 = genotype2.match(/.{1,2}/g);

            let combinedGenesArray = [];
            for (let i = 0; i < genes1.length; i++) {
                combinedGenesArray.push(this.geneCombinations(genes1[i], genes2[i]));
            }

            return combinedGenesArray;
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

            let result = [];
            let allCasesOfRest = this.arrayCombinations(arrays.slice(1));  // recur with the rest of array
            for (let i = 0; i < allCasesOfRest.length; i++) {
                for (let j = 0; j < arrays[0].length; j++) {
                    result.push(arrays[0][j] + allCasesOfRest[i]);
                }
            }
            return result;
        }
    }
};
