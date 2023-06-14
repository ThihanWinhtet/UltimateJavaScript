
// Stop Watch

function StopWatch(){
    let start, end, active, duration = 0;

    this.start = function(){
        if(active){
            throw new Error('Invalid Starting');
        }
        active = true;
        start = new Date();
        console.log(start);
    },
    this.stop = function(){
        if(!active){
            throw new Error('Invalid Ending');
        }
        end = new Date();
        let timer = (end.getTime() - start.getTime()) / 1000;
        start = timer;
        duration += timer;
        active = false;
    },
    this.reset = function(){
        duration = 0;
    }
    this.duration = function(){
        console.log(duration);
    }
}
const sw = new StopWatch();