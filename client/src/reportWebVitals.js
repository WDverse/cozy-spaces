// The reportWebVitals function collects and reports web performance metrics.

// It accepts an `onPerfEntry` callback, which will be invoked to report performance metrics.
const reportWebVitals = onPerfEntry => {
  // Check if the `onPerfEntry` callback is provided and is a function.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library to access performance measurement functions.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call various functions provided by 'web-vitals' library to measure and report performance metrics.
      // getCLS: Cumulative Layout Shift
      getCLS(onPerfEntry);

      // getFID: First Input Delay
      getFID(onPerfEntry);

      // getFCP: First Contentful Paint
      getFCP(onPerfEntry);

      // getLCP: Largest Contentful Paint
      getLCP(onPerfEntry);

      // getTTFB: Time To First Byte
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function for use in a React application.
export default reportWebVitals;
