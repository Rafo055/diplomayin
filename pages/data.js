const fullArray = [
  {
    country: "Armenia",
    regions: [
      {
        name: "Yerevan",
        churches: [
          {
            id: 1,
            name: "Armenia ekexeci",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Cathedral_of_Yerevan_Armenia_msu-2018-2640.jpg/800px-Cathedral_of_Yerevan_Armenia_msu-2018-2640.jpg?20180409072530",
            address: "Հասցե Հայաստան, 0070, Երևան Երվանդ Քոչարի փող.նախկին «Ռոսիա» կինոթատրոնի դիմաց",
            description: "ԵՐԵՎԱՆԻ ՍՈՒՐԲ ԳՐԻԳՈՐ ԼՈՒՍԱՎՈՐԻՉ ՄԱՅՐ ԵԿԵՂԵՑԻ (ՀԱՅ ԱՌԱՔԵԼԱԿԱՆ ԵԿԵՂԵՑԻ) Տաճարը կառուցվել է ի հիշատակ Հայաստանի կողմից քրիստոնեությունը որպես պետական ​​կրոն ընդունելու 1700-ամյակի[2], ինչպես նաև մասունքների շտեմարան է՝ կապված Գրիգոր Լուսավորչի՝ Ամենայն Հայոց առաջին Կաթողիկոսի հետ։ Մասունքներն այստեղ բերվել են Նեապոլից, իսկ տաճարի օծումից հետո Հռոմի Պապ Հովհաննես Պողոս II-ն այցելել է տաճար[3]։"
            
          },
          {
            id: 2,
            name: "Armenia ekexeci",
            imgSrc: "https://lookarmenia.am/images/monastry/kecharis/medium-kecharis-2.jpg",
            address: "Հասցե Kechi House Apartment 132, Цахкадзор",
            description: "Kecharis Monastery (Armenian: Կեչառիսի վանքային համալիր), is a medieval Armenian monastic complex dating back to the 11th to 13th centuries, located 60 km from Yerevan, in the ski resort town of Tsaghkadzor in Armenia. Nestled in the Pambak mountains, Kecharis was founded by a Pahlavuni Կեչառիս վանքը հիմնադրվել է 11-րդ դարում Պահլավունիների տոհմից եկած իշխանների կողմից, և նրա կառուցումը շարունակվել է մինչև 13-րդ դարի կեսերը։ Արքայազն Ապիմրատը սկսեց այն կառուցելով տաճարը 1031 թվականին[3]։ 1044 թվականին Հայոց թագավորության քաղաքական և մշակութային ականավոր գործիչներից Գրիգոր Մագիստրոսը[3] կառուցեց Սուրբ Գրիգոր Լուսավորիչ եկեղեցին։ Այն ունի ընդարձակ թաղածածկ դահլիճ, որի գագաթին կառուցված է լայն գմբեթ։ Վանքը եղել է արքեպիսկոպոսի նստավայրը։ Վանքի պատերի վիթխարի թվով արձանագրություններ վկայում են այն մասին, որ վանքին մեծ նվիրատվություններ են արել ինչպես ազնվական մարդիկ, այնպես էլ սովորական ծխականները։ Տաճարի արեւմտյան մասում պահպանվել է մատուռ, որի մուտքի վերեւի արձանագրությունը նշում է, որ այն ավելացվել է 1244 թվականին[3]։"
            
          },
          {
            id: 3,
            name: "Armenia ekexeci",
            imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/11/f3/24/d9/caption.jpg",
            address: "Հասցե 12 Russia Street, Abovyan 2204",
            description: "Երեւանից 10 կմ հեռավորության վրա գտնվող Սուրբ Հովհաննես Մկրտիչ եկեղեցու շինարարությունը սկսվել է 2006 թվականի օգոստոսին հայ գործարար, «Բարգավաճ Հայաստան» կուսակցության նախագահ Գագիկ Ծառուկյանի միջոցներով։ Տաճարի շինարարությունը տևել է 7 տարի, իսկ 2013 թվականի մայիսին այն օծվել է։ Հատուկ այս օրվա համար Էջմիածնի վանքի թանգարանից բերվել են Սուրբ Հովհաննես Մկրտչի մասունքների մասնիկներ[1]։ Արարողությանը ներկա էին Ամենայն Հայոց Կաթողիկոս Գարեգին Բ-ն, ՀՀ գործող նախագահ Սերժ Սարգսյանը, նրա նախորդ՝ այս պաշտոնում Ռոբերտ Քոչարյանը, ՀՀ վարչապետ Տիգրան Սարգսյանը, ինչպես նաև Բելառուսի նախագահ Ալեքսանդր Լուկաշենկոն, ով ներկա էր. պաշտոնական այցով[2]։"
            
          },
          {
            id: 4,
            name: "Armenia ekexeci",
            imgSrc: "https://www.mshakuyt.com/images/place/mesrop_mashtots.jpg",
            address: "Հասցե Oshakan, 0226, Armenia",
            description: "Ս. Մեսրոպ Մաշտոց Օշականի ս. Մեսրոպ Մաշտոց եկեղեցին կառուցվել է մեծն Մաշտոցի դամբարանի վրա կանգնած հին եկեղեցու հիմքերի վրա 1875 թ.-ին, Գեւորգ Դ կաթողիկոսի կողմից: 1639–1645 թվականներին Փիլիպոս Ա Աղբակեցի կաթողիկոսը հիմնովին նորոգել է եկեղեցին։ 19-րդ դարում Սուրբ Մեսրոպ Մաշտոց եկեղեցին վերստին եղել է խարխուլ և վթարային վիճակում, ուստի 1850 թվականին Ներսես Ե Աշտարակեցին կոնդակով դիմել է Սինոդին՝ եկեղեցին նորոգելու առաջարկով։ 1860 թվականին Միքայել Նալբանդյանը, Հնդկաստան մեկնելուց առաջ, ուխտի է եկել Օշական, և եկեղեցու անմխիթար վիճակը տեսնելով, բանաստեղծությամբ իր վիշտն ու դառնությունն արտահայտել։"
            
          },
          {
            id: 5,
            name: "Armenia ekexeci",
            imgSrc: "https://vaykniziblyanhome.files.wordpress.com/2020/01/screen-shot-2020-01-31-at-4.51.01-pm.png",
            address: "Հասցե Հայաստան, Երևան Թումանյան փող. 2-րդ փակուղի (Կենտրոն վարչ. շրջան)",
            description: "Զորավոր Սուրբ Աստվածածին եկեղեցի (Երևան): Երևանի Սուրբ Անանիա Առաքյալ անապատ (Զորավոր Սուրբ Աստվածածին եկեղեցի), կրոնական կառույց հին Երևանի Շահար թաղամասի հյուսիսային կողմի այգեստանում։ Պարփակված է Պուշկին և Թումանյան փողոցներում` բազմահարկ բնակելի շենքերի միջև։ 17-րդ դարում եկեղեցին գտնվում էր հին Երևանի սահմաններից դուրս` հյուսիսային կողմի այգիների տարածքում։ Սուրբ Զորավոր եկեղեցին 17-րդ դարի վերջին կառուցված տիպիկ հուշարձան է, որպիսիք էին Երևանի մեծ երկրաշարժից (1679 թ.) հետո 1690-ական թվականներին վերակառուցված Կաթողիկե Սուրբ Աստվածածին, Սուրբ Պողոս-Պետրոս և մյուս եկեղեցիները։"
            
          },
        ],
        parks: [
          {
            id: 1,
            name: "Armenia Aygi",
            imgSrc: "https://onewaytour.com/wp-content/uploads/2019/05/oghakadzev-aygi-1.jpg-2-1.jpg",
            address: "Հասցե Alek Manukyan St, Yerevan",
            description: "Օղակաձև այգին գտնվում է Երևանի Կենտրոն համայնքում։ Այգին սկսվում է «Այրարատ» կինոթատրոնի դիմացից, որտեղ գտնվում է Երևանի Սուրբ Գրիգոր Լուսավորիչ Մայր եկեղեցին, եզերվելով Խանջյան և Երվանդ Քոչարի փողոցներով, ձգվում է մինչև Մոսկովյան և Իսահակյան փողոցներ։ Այգու երկարությունը 5 կմ է։ Մինչև 1960-ական թվականները Շախմատի տնից մինչև այգու վերջն ընկած հատվածը եղել են սեփական տներ՝ իրենց պտղատու ծառերով։ Սակայն 1960-ականների վերջին դրանք քանդել են։ Այգում կանգնեցվել են արձաններ, կառուցվել են շատրվաններ և լողավազաններ։"
          },
          {
            id: 2,
            name: "Armenia Aygi",
            imgSrc: "https://janarmenia.com/uploads/0000/1/2020/11/30/busabanakan-aygi.jpg",
            address: "Հասցե Լեփսիուսի փ. 15, Երևան",
            description: "Բուսաբանական այգի - Լավագույն ժամանցի վայրերը Երևանում և Հայաստանում: Այգու ընդգրկած 4 հա տարածքում ձևավորվել է նաև բուսական համակեցությունների թվով 16 մոդել՝ արհեստական ցենոզ: Դրանց շարքում կան նաև խմբավորումներ, որոնք անհետացող են համարվում, օրինակ՝ աղուտներ, ավազուտներ, շիբլյակ, համմադա, ջրաճահճային ցենոզներ։ Բուսաբանական այգու արևադարձային ու մերձարևադարձային բուսական ֆոնդերը, դենդրոհավաքածուները վերջին տարիների ընթացքում համալրվել են շուրջ 30, իսկ ծաղկային բույսերը՝ 12 նոր դեկորատիվ բուսատեսակներով։ Այգու կենտրոնական մասում գտնվող 2000մ2 մակերեսով վարդանոցում ներկայացված է վարդի 20 սորտերի մոտ 800 թուփ։"
          },
          {
            id: 3,
            name: "Armenia Aygi",
            imgSrc: "https://e7da267a-b67b-4f13-925b-81f4cc6ae450.selcdn.net/origin/c17c2a3e-b0f6-433e-a13e-d1b88a61775e.jpeg",
            address:  "Հասցե English Park, Italy Street, Yerevan, Armenia",
            description: "Անգլիական այգին Երևանում առաջին հասարակական այգին է, հիմնված 1850 թվականին: The English Park is the first public park in the city of Yerevan, dating back to the 1850s."
          },
          {
            id: 4,
            name: "Armenia Aygi",
            imgSrc: "https://visityerevan.am/media/images/bcaption.jpg",
            address: "Հասցե Մարշալ Բաղրամյան պող. 21 Yerevan, Armenia",
            description: "Սիրահարների Զբոսայգի: Երևանցիներից շատերին այգին հայտնի է որպես Պուշկինի անվան այգի։ Այն  հրաշալի  վայր  է  եղել  սիրահարների  ժամադրությունների  համար` իր գողտրիկ տեղավայրով և կարուսելներով։1995թ. այգին պաշտոնապես անվանվել է Սիրահարների  այգի։"
          },
          {
            id: 5,
            name: "Armenia Aygi",
            imgSrc: "https://visityerevan.am/media/images/bd64c1b245ea5a2239255b9dbd6959fc7601372a8.jpeg",
            address: "Հասցե Իտալիայի փողոց 2 Yerevan, Armenia",
            description: "Երևանի 2800-ամյակի Այգի: Վարդանյանների ընտանիքի ֆինանսավորմամբ մայրաքաղաքում վերակառուցվել և շահագործման է հանձնվել Երևանի 2800-ամյակի այգին: Այգում տնկվել է 70 բացառիկ ծառատեսակի 250 ծառ:"
          },
          {
            id: 6,
            name: "Armenia Aygi",
            imgSrc: "https://cdn.am.sputniknews.ru/img/2101/62/21016266_0:0:1600:901_600x0_80_0_0_c0cc86b2eaf6960323a22e6aa5847e77.jpg",
            address: "Հասցե 20 Myasnikyan Ave, Yerevan 0025 Yerevan, Armenia",
            description: "Երևանի կենդանաբանական այգի, գիտահետազոտական հիմնարկ։ Հիմնադրվել է 1940 թվականին։ Տարածքը 85 000 մ² է, որից կենդանիների համար նախատեսված կառույցներինը՝ 52 000 մ²։"
          },
          {
            id: 7,
            name: "Armenia Aygi",
            imgSrc: "https://gdb.rferl.org/C8A05B52-2B25-4DE7-99A8-A0123B219513_cx0_cy12_cw0_w1200_r1.jpg",
            address: "Հասցե Հայաստան, 0037, Երևան Ազատության պող., 2 տարածք Yerevan, Armenia",
            description: "《Հաղթանակ》 զբոսայգի: «Հաղթանակ» զբոսայգու հուշահամալիրը բացվել է 1950 թվականի նոյեմբերի 29-ին։ Նույն օրն այգում բացվել է Ստալինի արձանը, որի պատվանդանի հեղինակը ԽՍՀՄ ժողովրդական ճարտարապետ Ռաֆայել Իսրայելյանն է։ Պղնձե արձանն ուներ 17 մետր բարձրություն, հեղինակը ԽՍՀՄ ժողովրդական նկարիչ Սերգեյ Մերկուրովն է։ 1962 թվականին Ստալինի արձանն ապամոնտաժվել է։ "
          },
          
        ],

        mall: [
          {
            id: 1,
            name: "Armenia malls",
            imgSrc: "https://visityerevan.am/media/images/bYerevan_Mall.jpeg",
            address: "Հասցե 34 Arshakunyats Ave, Yerevan 0026 Yerevan",
            description: "«Երևան Մոլի» կառուցումը Հայաստանի խոշորագույն նախագծերից է, մեկնարկել է 2010 թվականից։ «Երևան Մոլի» ճարտարապետական նախագծերը մշակել և իրականացրել է «Բրոդվեյ Մալյան» կազմակերպության «Արխանգել» ճարտարապետական ընկերությունը։ Բացման արարողությանը մասնակցել է Հայաստանի նախկին նախագահ Սերժ Սարգսյանը[3][4]։ Ընդհանուր տարածք՝ 59.900 քմ"
          },
          {
            id: 2,
            name: "Armenia malls",
            imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/af/72/b6/caption.jpg?w=600&h=300&s=1",
            address: "Հասցե Հայաստան, 0082, Երևան Ծիծեռնակաբերդի խճուղի, 3 շենք",
            description: "Dalma Garden Mall: Դալմա Գարդեն Մոլ՝ առաջին զվարճաառևտրային համալիրը Հայաստանում։ Վայր, որտեղ միաձուլվում է շոփինգի, ժամանցի և համեղ խոհանոցի բազմազանությունը՝ ձևավորելով կատարելապես նոր ու յուրատիպ քաղաքային մշակույթ:"
          },
          {
            id: 3,
            name: "Armenia malls",
            imgSrc: "https://avatars.mds.yandex.net/get-altay/771751/2a00000188232f00e7e0e750a568fbbf3dce/L_height",
            address: "Հասցե Հայաստան, 0056, Երևան Նոր Նորքի 3-րդ զանգված, Գայի պող., 16 շենք",
            description: "MEGA MALL: Զբաղեցնում է 98. 000 քառ․ մետր տարածք, ունի 6 հարկ, առևտրի կենտրոնում ներկայացված է շուրջ 100 տեղական և միջազգային բրենդ։ Առևտրի կենտրոնի ստորգետնյա երեք հարկերում գործում է շուրջ 1800 մեքենայի համար նախատեսված ավտոկայանատեղի, որն ամենամեծն է Հայաստանում և տարածաշրջանում[2]։ Բացի խանութ-սրահներից, մոլում գործում է տարածաշրջանի ամենամեծ խաղահրապարակը, կինոթատրոն, ռեստորան-սրճարաններ, ֆուդկորտ[2]։"
          },
          {
            id: 4,
            name: "Armenia malls",
            imgSrc: "https://proservice.am/wp-content/uploads/2021/10/zmzmzm.jpg",
            address: "Հասցե Հայաստան, 0041, Երևան Էրեբունու փող., 17/1 շենք",
            description: "EREBUNI MALL: «Էրեբունի մոլ»-ը բազմաֆունկցիոնալ ընտանեկան կենտրոն է Երևանի հարավ-արևելյան հատվածի բնակիչների համար, որը հաշվի է առնում հաճախորդների բոլոր կարիքները։ Ինտերիերի դիզայնում օգտագործվում են Հայաստանի բնական մոտիվներ։ Կենտրոնի կենտրոնական տեղը ընդարձակ ատրիում է՝ Հայաստանի Հանրապետության վերին լույսի ամենամեծ գմբեթով։ Ատրիումը զարդարված է «Music in Stone» ժայռերի ոճավորված կասկադով։ Կենտրոնի խարիսխ վարձակալներ. Հայաստանի խոշորագույն «Երևան Սիթի» մանրածախ ցանցերից մեկի հիպերմարկետ, 10 կոնցեպտով ֆուդ-կորթ, ընտանեկան ժամանցի կենտրոն, ֆիթնես ակումբ և հագուստի հանրախանութներ: Այցելուների համար կա ընդարձակ ստորգետնյա կայանատեղի 2 մակարդակի վրա՝ ճանապարհորդներով և մարդատար վերելակներով։ Կենտրոնը գտնվում է Երևանի հարավային մասում։ Էրեբունի մոլ առևտրի կենտրոնը գտնվում է բնակելի թաղամասի կենտրոնում՝ բոլոր կողմերից շրջապատված բնակելի շենքերով։ Կենտրոնը գտնվում է Էրեբունի թաղամասի գլխավոր փողոցների խաչմերուկում՝ ինտենսիվ տրանսպորտային և հետիոտների երթևեկությամբ։ Այցելուների հարմարության համար մի քանի կողմերից մուտքեր կան դեպի առաջին հարկ։"
          },  
        ],

        jrvej: [
          {
            id: 1,
            name: "Armenia jrvej",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kasakh_Waterfall3.jpg",
            address: "Հասցե Քասախ",
            description: "Քասախի ջրվեժ:Քասախի ջրվեժ, Հայաստանի ամենաբարձր ջրվեժը։ Բարձրությունը՝ 70 մետր։ Գտնվում է Արագածոտնի մարզում՝ Քասախ գետի վրա, Հովհանավանք վանական համալիրի դիմաց"
          },
          {
            id: 2,
            name: "Armenia jrvej",
            imgSrc: "https://landofnoah.com/uploads/0000/18/2021/06/30/jermuk-0.jpg",
            address: "Հասցե Ջերմուկ",
            description: "Ջերմուկի ջրվեժ: Ջերմուկի ջրվեժը (68 մետր) համարվում է Հայաստանում երկրորդ ամենաբարձր ջրվեժը: Ջրվեժը գտնվում է առողջարանային քաղաք Ջերմուկում, որը հայտնի է ոչ միայն իր գեղատեսիլ բնությամբ, այլև ջերմային հանքային բազմաթիվ աղբյուրների առկայությամբ: Հանքային ջուրն ունի հատուկ քիմիական բաղադրություն, բուժիչ պրոֆիլակտիկ հատկություններ:"
          },
          {
            id: 3,
            name: "Armenia jrvej",
            imgSrc: "https://armtrailstour.am/uploads/0000/20/2022/07/26/1280px-shaki-waterfall-armenia-shaqii-jrvezh-hayastan.jpg",
            address: "Հասցե Շաքիի ջրվեժ",
            description: "Շաքիի ջրվեժ:Շաքիի ջրվեժը գտնվում է Սիսիան քաղաքում՝ Շաքի գետի վրա: Ժայռի ողջ երկայնքով ձևավորվում են բազմաթիվ գետակներ, որոնց շնորհիվ Շաքիի ջրվեժը ջրի մեծ կասկադով թափվում է ներքև: Շաքիի ջրվեժը բարձրությամբ (18 մետր) մի փոքր զիջում է նախորդներին, սակայն նրա ուժն այնքան մեծ է, որ ջրվեժի մոտ կանգնած մարդկանց ձայնը գրեթե հնարավոր չէ լսել:"
          },
          {
            id: 4,
            name: "Armenia jrvej",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2d/%D4%B9%D5%A9%D5%B9%D5%AF%D5%A1%D5%B6_trchkan.jpg",
            address: "Հասցե Թռչկանի ջրվեժ",
            description: "Թռչկանի ջրվեժ: Թռչկանի ջրվեժը (23 մետր) բնական հուշարձան է, որը գտնվում է Չիչխան գետի վրա՝ Շիրակի և Լոռվա մարզերի սահմանագծում: Այս տարածքի բնությունը հարուստ է հազվագյուտ կենդանիների և բույսերի տեսակներով, որոնցից շատերը գրանցված են Կարմիր գրքում, իսկ Չիչխան գետը լի է կարմրախայտով: Ջրվեժի Թռչկան («Թռիչք») անվանումը կապված է հենց այս ձկների հետ, որոնց կարելի է նկատել ջրվեժի վերնամասում:"
          },
          {
            id: 5,
            name: "Armenia jrvej",
            imgSrc: "https://i0.wp.com/www.armgeo.am/wp-content/uploads/2018/10/1.jpg?ssl=1",
            address: "Հասցե Լիճքի ջրվեժ",
            description: "Լիճքի ջրվեժ: Լիճքի ջրվեժները Հայաստանի քիչ ճանաչում ունեցող ջրվեժներից են և գտնվում են Սյունիքի մարզի Լիճք գյուղի տարածքով անցնող Զվարագետի և Մեղրի գետի վրա: Զվարագետ գետի առավել մատչելի մասում կարելի է տեսնել միմյանց մոտ գտնվող չորս ջրվեժներ: Մեղրի գետի վրա կան մի քանի տասնյակ ջրվեժներ, որոնք սկիզբ են առնում են գյուղից երկու կիլոմետր դեպի հյուսիս հեռավորության վրա:"
          },
          {
            id: 6,
            name: "Armenia jrvej",
            imgSrc: "https://www.hatis.am/images_list/uploaded/image_L0lbxxEjUx_Herherwaterfall(2).webp",
            address: "Հասցե Հերհերի ջրվեժ",
            description: "Հերհերի ջրվեժ:Հերհերի ջրվեժները կամ Քարավազի ջրվեժները (8 և 12 մետր) գտնվում են Մարտունու շրջանի Հերհեր գյուղի մոտ: Ջրվեժները տեղակայված են ժայռոտ ձորերում. բավականին բարդ արշավային ճանապարհ է սպասում այցելուներին, ովքեր պետք է որոշակի ֆիզիկական պատրաստվածություն ունենան: Ջրվեժներից մեկը (8 մ) թափվում է փոքր բյուրեղյա լճի մեջ, որտեղ ամռանը շատ հաճելի է լողալ և թարմանալ:"
          },
          {
            id: 7,
            name: "Armenia jrvej",
            imgSrc: "https://visit-tavush.com/wp-content/uploads/2022/03/%D5%87%D4%B1%D5%8C%D4%B1%D5%89-1.webp",
            address: "Հասցե Շառաչի ջրվեժ",
            description: "Շառաչի ջրվեժ: Շառաչ ջրվեժը (15 մետր) գտնվում է բավականին անհասանելի վայրում`Տավուշի մարզի Խնձորուտ գետի վրա: Շառաչ աբվանումը հայերենից թարգմանվում է որպես «մռնչյուն», ինչը կապված է ջրի բարձր ձայնի հետ: Իհարկե, բնական տեսարժան վայրերի այս ցուցակը թերի կլինի առանց Արցախում տեղակայված «Զոնտիկներ» ջրվեժի: Ջրվեժը ստացել է վերոնշյալ անվանումը արտաքին տեսքի համար. ջուրը բարակ շիթերով հոսում է կլորավուն, մամռապատ ժայռից, ինչպես անձրևի կաթիլներն են հոսում հովանոցներից: Ջրվեժի երկրորդ անվանումն է «Մամռոտ Քար» («Մոսիի Քար»):"
          },

        ],
        

      }
    ]
  }
];





export default fullArray;
