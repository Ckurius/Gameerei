
// Eingabe mit der Variablen eing übernehmen.
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

let eing = process.argv.slice(2);

let einga = eing[0]; // Nur ein Element



if (einga === undefined)
    {
        console.log("Bitte einfach beim Programmaufruf Schere, Stein oder Papier eingeben :))");
        return;
    }


// Eingabe überprüfen ob Inhalt Schere, Stein oder Papier entspricht.

let pruef = einga.split("");



let schere = ["s","c","h","e","r","e"];

let stein = "stein";
stein = stein.split("");

let papier = "papier";
papier = papier.split("");

let zaehler,zaehler1,zaehler2, zaehler3;
zaehler = zaehler1 = zaehler2 = zaehler3 = 0;

if(pruef.length !== 6 && pruef.length !== 5)
    {
        console.log("Bitte einfach beim Programmaufruf Schere, Stein oder Papier eingeben :))");
         return;
    };

    let korrekteeingabe ;
    

for ( let i=0 ; i < pruef.length ; i++)
    {
        if ( pruef[i] === schere[i] )
            {
             zaehler++;
            if (zaehler === pruef.length -1)
                {
                    korrekteeingabe = "Schere";
                    console.log("Sie haben ",korrekteeingabe," gewählt.");
                 break;
                }
            }   

        if ( pruef[i] === stein[i] )
                {
                zaehler1++;
                if (zaehler1 === pruef.length -1)
                    {
                        korrekteeingabe = "Stein";
                        console.log("Sie haben ",korrekteeingabe," gewählt.");
                     break;
                    }
                }  
                
        if ( pruef[i] === papier[i] )
                {
                    zaehler2++;
                    
                    if (zaehler2 === pruef.length -1)
                        {
                            korrekteeingabe = "Papier";
                            console.log("Sie haben ",korrekteeingabe," gewählt.");
                         break;
                        }
                }  
        if ( i === (pruef.length -1) && zaehler !== (pruef.length -1) && zaehler2 !== (pruef.length -1) && zaehler3 !== (pruef.length -1) )  
                {
                    
                    console.log("Bitte einfach beim Programmaufruf Schere, Stein oder Papier eingeben :))");
                    return;
                } 

               
    };

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
    

// Der Variablen zuf einen zufälligen Wert , Schere , Stein oder Papier übergeben 

let zuf = Math.random();

        zuf = Math.random();
           
        let pl1 = "";
        
        if ( zuf < 0.33 )
            { pl1 = "Schere";
        
            }
        else if ( zuf > 0.66)
            { pl1 = "Stein";
        
            }
        else
        {
            pl1 = "Papier";
        }
        
        console.log("Der Computer hat ",pl1," gewählt.");

        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

// Wer hat gewonnen

if ( pl1 === "Schere")
    {
     if ( korrekteeingabe === pl1 )
        {
            console.log("Unentschieden - Try again :) ")
        }

     else if ( korrekteeingabe === "Stein")
        {
            console.log("Computer Wins !")
        }

    else
    {
      console.log("Player wins ! Na da hat ja jemand Glück gehabt :)")
    }

    }
else if ( pl1 === "Papier")
    {
        if ( korrekteeingabe === pl1 )
            {
                console.log("Unentschieden - Try again :) ")
            }
    
         else if ( korrekteeingabe === "Stein")
            {
                console.log("Computer Wins !")
            }
    
        else
        {
          console.log("Player wins ! Na da hat ja jemand Glück gehabt :)")
        }
    }

else 
{
    if ( korrekteeingabe === pl1 )
        {
            console.log("Unentschieden - Try again :) ")
        }

     else if ( korrekteeingabe === "Papier")
        {
            console.log("Player wins ! Na da hat ja jemand Glück gehabt :)")
        }

    else
    {
      console.log("Computer Wins !")
    }
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
// FIN