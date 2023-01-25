class App
{
    runApplication()
    {
        let arr = ["nintendo","xbox","playstation","pc","laptop"];
        console.log(arr);
        let headers = document.getElementsByClassName("les5")
        for (let i = 0; i <= 200; i++)
        headers[0].innerHTML = arr[0];
        headers[1].innerHTML = arr[1];
        headers[2].innerHTML = arr[2];
        headers[3].innerHTML = arr[3];
        headers[4].innerHTML = arr[4];
        this.tekencircel();
        console.log(this.tekencircel())
        
    }

    tekencircel()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        for (let i = 0; i <= 400; i++) 
        {
            let x = Math.floor(Math.random() * 3000);
            let y = Math.floor(Math.random() * 2000);
            let kleur = Math.floor(Math.random() * 5);
            console.log(kleur);
            g.beginPath();
            if(kleur == 0)
            {
                g.fillStyle = "red";
            }
            else if(kleur == 1)
            {
                g.fillStyle = "green";
            }
            else if(kleur == 3)
            {
                g.fillStyle = "blue";
            }
            else if(kleur == 4)
            {
                g.fillStyle = "yellow";
            }
            else if(kleur == 5)
            {
                g.fillStyle = "orange";
            }
            g.arc(x, y, 50, 0, 2 * Math.PI);
            g.fill();
        }
    }
}

let app = new App();
app.runApplication();
app.tekencircel();
        
        


        
    

