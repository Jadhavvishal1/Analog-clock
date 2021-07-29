// setInterval(() => {
//     d =  new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();

//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;
//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
//     console.log(hrotation,"hour")
//     console.log(mrotation,"minute")
//     console.log(srotation,"seconds")
//     // console.log(htime)
// }, 1000);


setInterval(() => {
    d = new  Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation= 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    // console.log(stime)
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    console.log(mtime,"minute")
    console.log(mrotation)
}, 1000);






