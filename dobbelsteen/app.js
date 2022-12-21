class App
{
    dobbelsteen()
    {
        const rolls = [Math.floor(Math.random() * 6)+1,Math.floor(Math.random() * 6)+1,Math.floor(Math.random() * 6)+1,Math.floor(Math.random() * 6)+1];
        rolls.sort();
        console.log(rolls);
        let totaal = rolls[1] + rolls[2] + rolls[3];
        console.log(totaal);

        /*maak dobbelsteen*/
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.font = "30px Arial";
        ctx.fillText(rolls[0], 40, 60);
        /*ctx.fill();*/

        var Ac = document.getElementById("myCanvas1");
        var Actx = Ac.getContext("2d");
        Actx.beginPath();
        Actx.font = "30px Arial";
        Actx.fillText(rolls[1], 40, 60);

        var Bc = document.getElementById("myCanvas2");
        var Bctx = Bc.getContext("2d");
        Bctx.beginPath();
        Bctx.font = "30px Arial";
        Bctx.fillText(rolls[2], 40, 60);

        var Cc = document.getElementById("myCanvas3");
        var Cctx = Cc.getContext("2d");
        Cctx.beginPath();
        Cctx.font = "30px Arial";
        Cctx.fillText(rolls[3], 40, 60);

        let print = "totaal:" + totaal
        var Dc = document.getElementById("text");
        var Dctx = Dc.getContext("2d");
        Dctx.beginPath();
        Dctx.font = "30px Arial";
        Dctx.fillText(print, 170, 60);
    }
}

let app = new App;
app.dobbelsteen();