<h1 align="center" id="title">Kadane's Algorithm Visualizer</h1>

<p id="description">This project provides an interactive way to understand Kadane's algorithm for finding the contiguous subarray with the maximum sum within an array of integers. Users can generate random arrays step through the algorithm visually and see how the maximum subarray is determined.</p>

<h1 align="center" id="title">Algorithm Explanation</h1>

<p id="description">Kadane's algorithm finds the contiguous subarray within a one-dimensional array of integers which has the largest sum. It does this in a single pass through the array in linear time O(n) and constant space O(1) complexity.</p>
<p id="description">The key insight is that the maximum sum subarray must be a contiguous subset of the array. At each index i, the algorithm compares the cumulative sum including i to the sum excluding i to determine if a new maximum has been found. This efficiently tracks the max sum as the single pass progresses.</p>

<h2>🚀 Demo</h2>

[https://ammar-montaser.github.io/Kadane-s-Algorithm-Visualizer/](https://ammar-montaser.github.io/Kadane-s-Algorithm-Visualizer/)

<h2>Project Screenshots:</h2>

<img src="https://iili.io/JvMHQkl.png" alt="project-screenshot" width="100%" height="400/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Generates random integer arrays of configurable length
*   Step-through mode to visualize algorithm incrementally
*   Reset/restart at any point
*   Shows maximum subarray sum as it's calculated
*   Clear annotations and reset for new examples
*   Responsive design adapts to any screen size
*   Algorithm Explaination

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repo navigate to the directory and run</p>

```
npm install npm run dev
```

<p>2. visit http://localhost:3000 to see it in action!</p>

```
http://localhost:3000 
```

<h2>🍰 Contribution Guidelines:</h2>

Pull requests are welcome! Please open an issue first to discuss any changes or additions.

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   React - Component based UI framework
*   Sass - CSS preprocessor for scalable styles
*   Redux & RTK - State Management
*   Vite - Next gen build tool for lightning fast dev server
*   Github Pages - Free Hosting

<h2>🛡️ License:</h2>

This project is licensed under the Distributed under the MIT license.
