function closeWin(){
    document.write("<button onclick='window.close()'>Zamknij okno</button>")
}

function WinOpen(name, numer, height=380) 
{
   window.open(name + ".html", "okienko_z" + numer, "toolbar=no,directories=no,menubar=no,height=380,width=160,top=200,left=400");
}

closeWin()