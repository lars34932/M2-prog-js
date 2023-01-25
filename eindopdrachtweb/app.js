class Kaart
{
    constructor()
    {
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
        this.foto = document.getElementById("slee");
        this.fotoX = -250;
        this.fotoY = Math.floor(Math.random() * 530)
        this.newCord = 0
    }

    setBackground()
    {
        let ctx = this.ctx
        ctx.fillStyle = "green";
        ctx.fillRect(0,0,1000,600);

        ctx.strokeStyle = "yellow";
        ctx.strokeRect(10,10,980,580);;
    }

    drawVillage(x,y)
    {
        let g = this.ctx
        let randomgetal =  Math.random(0,1);

        g.strokeStyle = "black"

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
            g.fillStyle = "yellow"
        g.moveTo(x+250,y+215);
        g.lineTo(x+150,y+190);
        g.lineTo(x+150,y+240);
        g.lineTo(x+250,y+265);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawTree(x, y) {
        let ctx = this.ctx
        // Draw the trunk
        ctx.fillStyle = "brown";
        ctx.fillRect(x-10, y, 20, 100);
      
        // Draw the tree
        ctx.beginPath();
        ctx.moveTo(x - 50, y+75);
        ctx.lineTo(x + 50, y+75);
        ctx.lineTo(x, y - 75);
        ctx.lineTo(x - 50, y+75);
        ctx.fillStyle = "green";
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.arc(y+50, x-100, 10, 0, 2 * Math.PI);
        ctx.arc(y+10, x+20, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "pink"
        ctx.arc(y+70, x-15, 10, 0, 2 * Math.PI);
        ctx.arc(y+35, x-50, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "yellow"
        ctx.arc(y+40, x, 10, 0, 2 * Math.PI);
        ctx.arc(y+60, x-60, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "blue"
        ctx.arc(y+70, x+10, 10, 0, 2 * Math.PI);
        ctx.arc(y, x, 10, 0, 2 * Math.PI);
        ctx.fill();
      
        // Draw the star
        ctx.beginPath();
        ctx.moveTo(x, y - 90);
        ctx.lineTo(x - 15, y - 75);
        ctx.lineTo(x, y - 60);
        ctx.lineTo(x + 15, y - 75);
        ctx.lineTo(x, y - 90);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    tekst()
    {
        let ctx = this.ctx

        ctx.fillStyle = "black"
        ctx.font = "35px Arial";
        ctx.fillText("Happy christmas!!!", 35, 540);
    }

    Frame()
    {
        let scope = this
        setInterval(function () { scope.doGameFrame() }, 33)
    }

    doGameFrame()
    {
        this.setBackground();
        this.drawVillage(-30,40);
        this.drawVillage(500,250);
        this.drawVillage(350,-30);
        this.tekst();
        this.drawTree(450,400);
        this.ctx.drawImage(this.foto, this.fotoX, this.fotoY);
        this.fotoX += 10;
        
    }
    
    
}

let kaart = new Kaart;
kaart.Frame();
