module.exports = {
  MakeTimer: (ms = 3000) => {
    let socketTimer;

    return () => {
      const startTimer = (cb) => {
        // console.log("Timer started!");
        socketTimer = setTimeout(function () {
          // console.log("Timer done and will be restarted.");
          if (cb) cb();
          startTimer(cb);
        }, ms);
      };
      const stopTimer = () => {
        // console.log("Timer stopped")
        clearTimeout(socketTimer);
      };
      return { startTimer, stopTimer };
    };
  },
}
