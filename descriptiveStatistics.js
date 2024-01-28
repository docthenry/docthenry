class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    calculateMean() {
        let sum = 0;
    
        for (let i = 0; i < this.data.length; i++) {
          sum += this.data[i];
        }
    
        return sum / this.data.length;
      }
  
    calculateMedian() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        // Average of two middle values for even-length arrays
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        // Middle value for odd-length arrays
        return sortedData[middle];
      }
    }
  
    calculateMode() {
      const frequencyMap = new Map();
  
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let mode;
      let maxFrequency = 0;
  
      for (const [value, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
          mode = value;
          maxFrequency = frequency;
        }
      }
  
      return mode;
    }

    calculateRange() {
        const max = Math.max(...this.data);
        const min = Math.min(...this.data);
        return max - min;
      }
    
      calculateVariance(sample = true) {
        const mean = this.calculateMean();
        const sumSquaredDifferences = this.data.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0);
        const divisor = sample ? this.data.length - 1 : this.data.length;
        return sumSquaredDifferences / divisor;
      }
    
      calculateStandardDeviation(sample = true) {
        return Math.sqrt(this.calculateVariance(sample));
      }
    
      calculateIQR() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        const q1 = this.calculatePercentile(sortedData, 25);
        const q3 = this.calculatePercentile(sortedData, 75);
        return q3 - q1;
      }
    
      calculateCoefficientOfVariation() {
        const mean = this.calculateMean();
        const standardDeviation = this.calculateStandardDeviation();
        return (standardDeviation / mean) * 100;
      }
    
      calculateMean() {
        const sum = this.data.reduce((acc, value) => acc + value, 0);
        return sum / this.data.length;
      }
    
      calculatePercentile(sortedData, percentile) {
        const index = (percentile / 100) * (sortedData.length - 1);
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);
        const lowerValue = sortedData[lowerIndex];
        const upperValue = sortedData[upperIndex];
        return lowerValue + (upperValue - lowerValue) * (index - lowerIndex);
      }
  }
  
  // Example usage:
  const data = [4, 8, 6, 2, 8, 10, 4, 6, 5];
  const statsCalculator = new DescriptiveStatistics(data);
  
console.log('Mean:', statsCalculator.calculateMean());
console.log('Median:', statsCalculator.calculateMedian());
console.log('Mode:', statsCalculator.calculateMode());
console.log('Range:', statsCalculator.calculateRange());
console.log('Variance:', statsCalculator.calculateVariance());
console.log('Standard Deviation:', statsCalculator.calculateStandardDeviation());
console.log('Interquartile Range (IQR):', statsCalculator.calculateIQR());
console.log('Coefficient of Variation:', statsCalculator.calculateCoefficientOfVariation());
  