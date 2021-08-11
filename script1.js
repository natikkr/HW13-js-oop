class Clock {

      constructor(element){
        this.element = element;
      }
        Run() {
            this.render();

        setInterval(() =>{
            this.render();
            }, 1000);
        }

       render() {
           let time = this.getTime();
           let minForm = time.minutes.toString().padStart(2,"0");
           let secForm = time.seconds.toString().padStart(2, "0")
           let timeForm = `${time.hour}:${minForm}`;
           let timeFull = `${time.hour}:${minForm}:${secForm}`;


           this.element.querySelector('tsClock').textContent = timeFull;
        //    this.element.getElementById('tsClock1').innerHTML = timeForm;
           
       }
       getTime(){
           let now = new Date();
           return{
               hour: now.getHours(),
               minutes: now.getMinutes(),
               seconds: now.getSeconds()
           };
       }
    }

    let clockElement = document.querySelector(".clockpage");
    let clockObject = new Clock(clockElement);

    clockObject.Run();

