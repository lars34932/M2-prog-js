let title = document.getElementById("newstitle");
let randomGetal = Math.random(0.0,0.999999);

if (randomGetal == 0)
{
    title.style.backgroundColor ="#ff0000" //red
} 
else if (randomGetal < 0.2)
{
    title.style.backgroundColor ="#ffff00" //yellow
}
else if (randomGetal > 0.2 | randomGetal < 0.6)
{
    title.style.backgroundColor ="#0033ff" //blue
}
else if (randomGetal > 0.6)
{
    title.style.backgroundColor ="#33cc00" //green
}
