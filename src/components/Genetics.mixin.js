export const GeneticsMixin = {
    methods: {
        getOutcomes(genotype1, genotype2, allGenotypes) {
            if (!genotype1 || !genotype2) {
                return {};
            }

            let geneCombinations = this.allGeneCombinations(genotype1, genotype2);
            let combinations = this.arrayCombinations(geneCombinations);

            let totalCombinations = combinations.length;

            let outcomeData = this.groupByNumOccurrences(combinations);

            let groupedByColor = {};

            // :/
            // Calculate each genotypes percent chance of occurring
            // Group by colour and sum up each color's overall chance of occurring
            for (let key in outcomeData) {
                outcomeData[key].percent = (outcomeData[key].total / totalCombinations) * 100;
                let color = allGenotypes.find(f => f.genotype === key).color;

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
        groupByNumOccurrences(arr) {
            let outcomeData = {};

            // Group by genotype and count number of occurrences
            for (let el of arr) {
                if (el in outcomeData) {
                    outcomeData[el].total += 1;
                } else {
                    outcomeData[el] = {total: 1};
                }
            }

            return outcomeData;
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

            for (const c1 of gene2) {
                for (const c2 of gene1) {
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
