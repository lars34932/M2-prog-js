class App
{
    runApplication()
    {
        let appNaam = "test"
        let versienummer = 1.0
        let versiedatum = "24-11-2020"
        let autheur = "lars"
        let copyright = "lars"
        let distributeur = "lars"
        let darkmode = true
        console.log("hello world!",'\n',appNaam,'\n',versienummer,'\n',versiedatum,'\n',autheur,'\n',copyright,'\n',distributeur,'\n',darkmode);
    }
}

let app = new App();
app.runApplication();