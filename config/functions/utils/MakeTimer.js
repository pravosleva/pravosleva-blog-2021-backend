module.exports = {
  MakeTimer: (ms = 3000) => {
    return () => {
      let socketTimer;
      const startTimer = (cb) => {
        // console.log("Timer started!");
        socketTimer = setTimeout(function () {
          // console.log("Timer done and will be restarted.");
          if (cb) { cb() }
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
