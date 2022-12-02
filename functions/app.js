class App
{
    mario()
    {
        return("MARIO!!")
    }

    luigi()
    {
        return("LUIGI!!")
    }

    bwahaha()
    {
        return("BWAHAHA!!!")
    }

    optel(a,b)
    {
        let result = a + b
        return(result)
    }

    runApplication()
    {
        let a = this.mario();
        let b = this.luigi();
        let c = this.bwahaha();
        let d = this.optel(5,3);
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
    }
}

let app = new App
app.runApplication();