exports.seed = function(knex){
    return knex('deals').del().then(function(){
        return knex('deals').insert([
            {
                id: 1,
                place_id:1,
                day_of_week:'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time:'15:00',
                end_time: '18:00',
                item:json.strigfy( [{
                    price: '$6', 
                    product: 'Draught beer, hard ice tea, Muddlers & cocktails',
                    type: 'drink'
                },
                    {
                    price: '$9',
                    product: '6oz - House red, white & rose wine',
                    type: 'drink'
                    },
                    {
                    price:'$11',
                    product: 'Casamigos Soda & Slush',
                    type: 'drink'
                    },
                    {
                    price: '$7', 
                    product: 'Tacos, fries & slides',
                    type: 'food'
                    },
                    {
                    price: '$14',
                    product: 'Bruschetta',
                    type: 'food'
                    },
                    {
                    price:'$16',
                    product: 'Bbq Ribs',
                    type: 'food'
                    }                         
                ])

            }
        ])
    })
}