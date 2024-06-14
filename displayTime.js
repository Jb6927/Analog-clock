function displayTime() {
    let date = new Date();
    //get min,sec,hour from data.
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
}
