export const FunctionThrottleExample = () => {
  const throttle = (fn: (...args: any[]) => void, limit: number) => {
    let lastCall = 0;

    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn(...args);
      } else {
        console.log("Function call throttled");
      }
    };
  };

  const logMessage = (message: string) => {
    console.log(`Logged: ${message}`);
  };

  const throttledLog = throttle(logMessage, 2000);

  console.log("EXO3 Function");
  throttledLog("Hello!");
  throttledLog("This will be throttled");
  setTimeout(() => throttledLog("This will be called after 2 seconds"), 2500);
};
