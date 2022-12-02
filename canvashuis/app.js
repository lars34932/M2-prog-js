class App
{
    tekenhuis()
    {
        let canvas = document.getElementById("canvasId")
        console.log(canvas);
        let g = canvas.getContext("2d");
        let randomgetal =  Math.random(0,1);
        console.log(randomgetal);

        //dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(150,50);
        g.lineTo(100,150);
        g.lineTo(300,200);
        g.lineTo(350,100);
        g.closePath();
        g.stroke();
        g.fill();

        //muren
        g.beginPath();
        g.fillStyle = "gray"
        g.moveTo(300,200);
        g.lineTo(100,150);
        g.lineTo(100,250);
        g.lineTo(300,300);
        g.lineTo(400,250);
        g.lineTo(400,150);
        g.lineTo(350,100);
        g.lineTo(300,200);
        g.closePath();
        g.stroke();
        g.fill();

        //raam
        g.beginPath();
        if (randomgetal < 0.5)
        {
            g.fillStyle = "black"
        }
        else if (randomgetal > 0.5)
        {
            g.fillStyle = "yellow"
        }
        else
        {
            g.fillStyle = "red"
        }
        g.moveTo(250,215);
        g.lineTo(150,190);
        g.lineTo(150,240);
        g.lineTo(250,265);
        g.closePath();
        g.stroke();
        g.fill();
    }
}



let app = new App();
app.tekenhuis()