# React Native Asynchronous State Update Error

This repository demonstrates a common yet tricky bug in React Native: attempting to update the state of a component that has already unmounted. This often happens when asynchronous operations (like network requests or timers) complete after the component has been removed from the component tree.  The solution involves using a flag to track whether the component is still mounted before updating its state.

## Problem
The `bug.js` file showcases the problematic code. The `fetchData` function simulates an asynchronous operation. If navigation occurs before the data is fetched and processed, the state update causes the error.

## Solution
The `bugSolution.js` file presents a robust solution.  A `isMounted` flag is introduced to check if the component is still mounted. The state is only updated if `isMounted` is true, preventing the error.