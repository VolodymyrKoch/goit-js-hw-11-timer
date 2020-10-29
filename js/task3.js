
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    
  }

  timer = setInterval(() => {
    const time = this.targetDate - Date.now();
    if (time <= 0) {
      clearInterval(timer)
    } else {this.updateClockface(time)};
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    this.selector.querySelector('[data-value="days"]').textContent=days;
    this.selector.querySelector('[data-value="hours"]').textContent=hours;
    this.selector.querySelector('[data-value="mins"]').textContent=mins;
    this.selector.querySelector('[data-value="secs"]').textContent=secs;
  }
 
   pad(value) {
    return String(value).padStart(2, "0");
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Dec 16, 2020"),
});

