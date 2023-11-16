< !DOCTYPE html >
 <html lang="en">
  <head>
   <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Round Clock</title>
     <style>
      body {
       display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #222;
      font-family: Arial, sans-serif;
        }

      .clock {
       position: relative;
      width: 300px;
      height: 300px;
      background-color: #111;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
        }

      .clock span {
       position: absolute;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      color: #fff;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
        }

      .clock .circle {
       position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #333;
        }

      .clock .date {
       position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      text-align: center;
      color: #fff;
      font-size: 16px;
        }
     </style>
    </head>
    <body>
     <div class="clock">
      <span id="hours"></span>
      <span id="minutes"></span>
      <span id="seconds"></span>
      <span class
"circle"></span>
     <span class="date" id="date"></span>
    </div>
    <script>
     function updateTime() {
      let now = new Date();
     let hours = now.getHours();
     let minutes = now.getMinutes();
     let seconds = now.getSeconds();

     if (hours < 10) {
      hours = '0' + hours;
            }

     if (minutes < 10) {
      minutes = '0' + minutes;
            }

     if (seconds < 10) {
      seconds = '0' + seconds;
            }

     document.getElementById('hours').textContent = hours;
     document.getElementById('minutes').textContent = minutes;
     document.getElementById('seconds').textContent = seconds;
        }

     function updateDate() {
      let now = new Date();
     let year = now.getFullYear();
     let month = now.getMonth() + 1;
     let day = now.getDate();

     if (month < 10) {
      month = '0' + month;
            }

     if (day < 10) {
      day = '0' + day;
            }

     document.getElementById('date').textContent = year + '-' + month + '-' + day;
        }

     setInterval(updateTime, 1000);
     setInterval(updateDate, 1000);
    </script>
   </body>
 </html>