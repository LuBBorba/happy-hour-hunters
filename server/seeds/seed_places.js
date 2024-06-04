exports.seed = function(knex){
    return knex('places').del().then(function(){
        return knex('places').insert([
            {
                id: 1,
                name:'Benter Room',
                address:'1039 Mainland st, Vancouver BC',
                contact_info:'(604)565-1039',
                website: 'https://www.banterroom.com',
            },
            {

                id: 2,
                name: 'Flying Pig',
                address: '1168 Hamilton st, Vancouver BC',
                contact_info: '(604)568-1344',
                website:'https://theflyingpigvan.com',
            },
            {

                id: 3,
                name: 'Score on Davie',
                address: '1262 Davie st, Vancouver BC',
                contact_info: '(604)632-1646',
                website:'https://scoreondavie.com',
            },
            {
                id: 4,
                name: 'Lift Bar & Grill',
                address: '333 Menchion Mews, Vancouver BC',
                contact_info: '(604)689-5438',
                website:'https://www.liftbarandgrill.com',
            },
            {
                id: 5,
                name: 'Steamworks Brew Pub',
                address: '375 Water st, Vancouver, BC',
                contact_info: '(604)689-2739',
                website:'https://steamworks.com/brew-pub/',
            },
            {
                id: 6,
                name: 'Tacofino Ocho',
                address: '8 E 5th ave Vancouver, BC',
                contact_info: '(604)568-1344',
                website:'https://theflyingpigvan.com',
            },
            {
                id: 7,
                name: 'Uva Wine & Cocktail Bar',
                address: '900 Seymour st, Vancouver BC',
                contact_info: '(604)632-9560',
                website:'https://www.uvavancouver.com',
            },
            {
                id: 8,
                name: 'Parker Rooftop',
                address: '1379 Howe st, Vancouver BC',
                contact_info: '(604)696-6951',
                website:'https://www.parkerrooftop.com',
            },
            {
                id: 9,
                name: 'Brass Fish Kitchen & Tavern',
                address: '385 Burrard st Vancouver BC',
                contact_info: '(604)336-9167',
                website:'https://fp.readypay.co/BRASSWEB',
            },
            {
                id: 10,
                name: 'Per Se Social Corner',
                address: '891 Homer st, Vancouver BC',
                contact_info: '(604)428-6111',
                website:'https://persesocialcorner.com/',
            },
            {
                id: 11,
                name: 'Monarca',
                address: '181 Carrall st, Vancouver BC',
                contact_info: '(604)569-2258',
                website:'https://monarcavancouver.ca/',
            },
            {
                id: 12,
                name: 'Glowbal',
                address: '590 W Georgia st, Vancouver BC',
                contact_info: '(604)602-0835',
                website:'https://glowbalgroup.com/glowbal',
            },
            {
                id: 13,
                name: 'Ballyhoo Public House',
                address: '888 Burrard St #103, Vancouver, BC',
                contact_info: '(604)423-2771',
                website:'https://www.freehouse.co/locations/ballyhoo',
            },
            {
                id: 14,
                name: 'Beach Ave Bar & Grill',
                address: '1012 Beach Ave #1, Vancouver, BC',
                contact_info: '(604)676-2337',
                website:'beachavebarandgrill.com',
            },
            {
                id: 15,
                name: 'The American',
                address: '926 Main st, Vancouver BC',
                contact_info: '(778)945-6751',
                website:'https://theamerican.bar',
            },
            {
                id: 16,
                name: 'Mangos',
                address: '1180 Howe st, Vancouver BC',
                contact_info: '(604)559-5533',
                website:'https://mangosvancouver.com',
            },
            {
                id: 17,
                name: 'Jungle Room',
                address: '961 Denman st, Vancouver BC',
                contact_info: '(604)558-4343',
                website:'https://jungleroom.ca',
            },
            {
                id: 18,
                name: "Malone's",
                address: '608 W Pender st, Vancouver BC',
                contact_info: '(604)684-9977',
                website:'https://www.malones.bc.ca',
            },
            {
                id: 19,
                name: 'Butcher & Bullock Pub',
                address: '911 W Pender st, Vancouver BC',
                contact_info: '(604) 662-8866',
                website:'https://www.freehouse.co/locations/butcher-and-bullock',
            },
            {

                id: 20,
                name: "Papi's Oyster Bar",
                address: '1193 Denman st, Vancouver BC',
                contact_info: '(604)685-7337',
                website:'https://www.papisoysterbar.com/',
            }
        ]);
    });
};