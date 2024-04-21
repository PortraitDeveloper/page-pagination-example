// Sample array data
// const dataArray = Array.from({ length: 100 }, (_, index) => index + 1);

// const dataArray = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//   41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
//   79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
//   98, 99,
// ];

const dataArray = [
  { id: "pr-1", product: "product", price: 1000, description: "description" },
  { id: "pr-2", product: "product", price: 1000, description: "description" },
  { id: "pr-3", product: "product", price: 1000, description: "description" },
  { id: "pr-4", product: "product", price: 1000, description: "description" },
  { id: "pr-5", product: "product", price: 1000, description: "description" },
  { id: "pr-6", product: "product", price: 1000, description: "description" },
  { id: "pr-7", product: "product", price: 1000, description: "description" },
  { id: "pr-8", product: "product", price: 1000, description: "description" },
  { id: "pr-9", product: "product", price: 1000, description: "description" },
  { id: "pr-10", product: "product", price: 1000, description: "description" },
  { id: "pr-11", product: "product", price: 1000, description: "description" },
  { id: "pr-12", product: "product", price: 1000, description: "description" },
  { id: "pr-13", product: "product", price: 1000, description: "description" },
  { id: "pr-14", product: "product", price: 1000, description: "description" },
  { id: "pr-15", product: "product", price: 1000, description: "description" },
];

// Function to paginate array data
function paginate(array, perPage, pageNumber) {
  --pageNumber; // Adjust to 0-based index
  const startIndex = pageNumber * perPage;
  const endIndex = startIndex + perPage;
  return array.slice(startIndex, endIndex);
}

// Example usage
const perPage = 1; // Number of items per page
const pageNumber = 2; // Page number to display
const totalPage = Math.ceil(dataArray.length / perPage);

const currentPageData = paginate(dataArray, perPage, pageNumber);

console.log("Total Page:", totalPage);
console.log("Data", currentPageData);
