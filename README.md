# ISS EXPLORER 
## Dokumentācija
### Apraksts
“ISS Explorer” ir mājas lapa, kurā vienuviet var atrast visu informāciju, kas saistīta ar Starptautisko Kosmosa Staciju (International Space Station), proti, vietnē plaši un detalizēti ir izklāstīta informācija par tās izveidi, galveno mērķi, tajā notiekošajiem pētījumiem, mītošo apkalpi, kā arī ir iespēja uzskatāmi redzēt tās vizualizēto atrašanās vietu uz 3D zemeslodes.

### Mērķis
Mērķis šim projektam ir sniegt detalizētu un aktuālu informāciju lietotājiem, tādējādi izglītojot sabiedrību un rosinot padziļinātu interesi. Vietnes izveidotāji saprata, ka informācija par Starptautisko Kosmosa Staciju interneta resursos ir pieejama, taču tā bieži vien nav aktuāla un prasa plašāku izpēti, kā arī nav zināma neviena vietne, kas piedāvā 3D attēlotu atrašanās vietu – tikai 2D plaknē un skaitlisku koordinātu veidā.

### Tagadējā stadija
Pašlaik attiecīgais projekts ir pilnīgs un izmantojams iecerētajam mērķim, taču ir dažas nelielas neērtības un uzlabojumi, ko plāno pilnveidot un papildināt nākotnē.

### Darbības princips
Visa mājas lapa ir izveidota, izmantojot HTML, CSS un Java Script. Simulācija tiek īstenota, izmantojot Three JS Three Globe bibliotēku un API vaicājumus, proti, uzsākot programmu tiek renderēta vide un zemeslode uz kuras izvietoti pielāgoti geo json dati, tad katru sekundi tiek vaicāta API informācija par stacijas atrašanās vietu, to apstrādā un izgūst skaitlisku vērtību, ko tālāk izmanto, lai uz attiecīgās zemeslodes izvietotu punktu.

### Palaišana
Lai palaistu vietni ir jābūt datoram, kurā ir ieinstalēta Java Script programmēšanas valoda, kā arī Node.js *(versija v21.2.0)* ar npm *(versija 10.2.3)*. Terminālī jeb komandu logā ir jāatver **SatSimR** mape, kas atrodas **SatSim** mapē. To, atrodoties SatSim mapē, var izdarīt ar komandu 'cd SatSimR' , tad ir jādod komanda 'npm install' ar kuras palīdzību tiks iegūts viss vajadzīgais. Lai aktivizētu mājaslapu, to izvietojot uz lokāla servera, ir jādod komanda 'npm run dev'.

### Vairāk info
Mājaslapa ir veidota līdzīga jau ikdienā lietotajām, tāpēc ir intuitīva un pašsaprotama. Zemeslodes oriģinālais stāvoklis ir ar skatu punktu uz koordinātu sākumpunktu jeb ekvatora un nulles meridiānas krustpunktu. Lai pagrieztu zemeslodi ir jātur nospiesta peles kreisā poga un jāvelk, lai veiktu vēlamo rotāciju un lai pietuvinātu vai attālinātu ir jāgriež peles rats attiecīgi uz priekšu vai atpakaļ. Kosmosa stacijas atrašanās vietu apzīmē sarkans, pulsējošs punkts.

### Autori
Vietni izveidoja divi RTU inženierzinātņu vidusskolas 11. klases skolnieki: **Gustavs Bremmers** un **Jānis Stendzenieks**.
