/* Zadání
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku
a procento zdanění, a vrátí částku v celých korunách 
zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční 
mzdu po 15% zdanění.*/

function salary(wage, hours, days) {
     return wage * hours * days
 }
 
 let wage = 500
 const hours = 8
 let days = 20
 let hrubaMzda = (Math.round(wage*hours*days))  


 function taxed(castka, danProcento) {
     return castka - (castka*danProcento / 100)
 }

 const danProcento = 15
 let cistaMzda = taxed(Math.round(hrubaMzda), danProcento)
 
 document.body.innerHTML += `
 <p> Vaše hrubá mzda je:   ${hrubaMzda}  Kč </p>
 <p> Vaše čistá mzda je:   ${cistaMzda}  Kč </p>
 `
 