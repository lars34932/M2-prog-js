class App
{
    tekenhuis(x,y)
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        let randomgetal =  Math.random(0,1);

        //dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(x+150,y+50);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill();

        //muren
        g.beginPath();
        g.fillStyle = "gray"
        g.moveTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.lineTo(x+100,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+400,y+250);
        g.lineTo(x+400,y+150);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
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
        g.moveTo(x+250,y+215);
        g.lineTo(x+150,y+190);
        g.lineTo(x+150,y+240);
        g.lineTo(x+250,y+265);
        g.closePath();
        g.stroke();
        g.fill();
    }

    ballen()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        let x =  Math.random();
        let y =  Math.random();
        x = x * 100
        y = y * 200
        let kleur =  Math.random(0,5);
        kleur = kleur * 10
        Math.round(kleur)
        console.log(kleur)
        console.log(x)
        console.log(y)

        g.beginPath();
        if (kleur < 1)
        {
            g.fillStyle = "red"
        }
        else if (kleur < 3)
        {
            g.fillStyle = "yellow"
        }
        else if (kleur < 6)
        {
            g.fillStyle = "blue"
        }
        else if (kleur < 8)
        {
            g.fillStyle = "orange"
        }
        else if (kleur < 10)
        {
            g.fillStyle = "pink"
        }
        else
        {
            g.fillStyle = "black"
        }
        g.arc(x+525,y+310,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenboom()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");

        //boom
        g.beginPath();
        g.fillStyle = "green"
        g.moveTo(500,500);
        g.lineTo(600,500);
        g.lineTo(550,300);
        g.closePath();
        g.stroke();
        g.fill();
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
        this.ballen()
    }
}

let app = new App();
app.tekenhuis(100,0)
app.tekenhuis(1000,300)
app.tekenhuis(945,23)
app.tekenhuis(501,50)
app.tekenhuis(2000,300)
app.tekenhuis(750,600)
app.tekenhuis(1000,1000)
app.tekenhuis(1250,1260)
app.tekenhuis(1500,300)
app.tekenhuis(150,500)
app.tekenboom()