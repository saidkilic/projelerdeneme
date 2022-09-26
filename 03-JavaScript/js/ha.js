
         let diziSayilar = [12, 56, 14, 67, 89, 33, 22];
         let sayi = diziSayilar.length
         let toplam = 0;
         let ortalama=0;
        
        function ortOrtalama(){
            toplam = 0;

            for ( let i=0; i<sayi; i++){ 
                toplam = toplam + diziSayilar[i];
             }
             
        
            ortalama = toplam/sayi;
            ortalama =Math.floor(ortalama);
            alert(`Sayilarin ortalamasi ${ortalama}'dir`);
        
            console.log(ortalama);
        
                      
        }
        
        function ortalamaAltisayilar(){
             let ortalamaAltisayilar = [];
        
            for(let i=0; i<sayi; i++){
                if(diziSayilar[i] < ortalama){
                    ortalamaAltisayilar.push(diziSayilar[i]);   
                }
                       
            }
       
            console.log(ortalamaAltisayilar);
            alert( `Ortalama alti ${ortalamaAltisayilar.length} adet sayi vardir`);
        
        }
        