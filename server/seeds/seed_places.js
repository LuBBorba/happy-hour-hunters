exports.seed = function(knex){
    return knex('places').del().then(function(){
        return knex('places').insert([
            {
                id: 1,
                name:'Benter Room',
                address:'1039 Mainland st, Vancouver BC',
                contact_info:'(604) 565-1039',
                website: 'https://www.banterroom.com',

                id: 2,
                name: 'Flying Pig',
                address: '1168 Hamilton st, Vancouver BC',
                contact_info: '(604) 568-1344',
                website:'https://theflyingpigvan.com',
            }
        ])
    })
}