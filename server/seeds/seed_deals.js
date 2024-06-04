exports.seed = function(knex) {
    return knex('deals').del().then(function() {
        return knex('deals').insert([
            {
                id: 1,
                place_id: 1,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '17:00',
                item: JSON.stringify([
                    {
                        price: '$6', 
                        product: 'Draft beer, hard ice tea, Muddlers & cocktails',
                        type: 'drink'
                    },
                    {
                        price: '$9',
                        product: '6oz - House red, white & rose wine',
                        type: 'drink'
                    },
                    {
                        price: '$11',
                        product: 'Casamigos soda & slush',
                        type: 'drink'
                    },
                    {
                        price: '$7', 
                        product: 'Tacos, fries & sliders',
                        type: 'food'
                    },
                    {
                        price: '$14',
                        product: 'Bruschetta',
                        type: 'food'
                    },
                    {
                        price: '$16',
                        product: 'Bbq ribs',
                        type: 'food'
                    }
                ])
            },
            {
                id: 2,
                place_id: 2,
                day_of_week: 'Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$5', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$6-8',
                        product: '5oz - Red, white & rose wine',
                        type: 'drink'
                    },
                    {
                        price: '$6',
                        product: 'Highballs',
                        type: 'drink'
                    },
                    {
                        price: '$9.50-$14', 
                        product: 'Appetizers',
                        type: 'food'
                    }
                ])
            },
            {
                id: 3,
                place_id: 3,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '17:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$3', 
                        product: 'Score pilsner, well highballs & shots',
                        type: 'drink'
                    },
                    {
                        price: '$10',
                        product: 'Fries/poutine/hummus & pita',
                        type: 'food'
                    },
                    {
                        price: '$12',
                        product: 'Wings',
                        type: 'food'
                    },
                    {
                        price: '$14',
                        product: 'Burrito bowl',
                        type: 'food'
                    },
                    {
                        price: '$15',
                        product: 'Pork tacos/lettuce wraps',
                        type: 'food'
                    }
                ])
            },
            {
                id: 4,
                place_id: 4,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '17:30',
                item: JSON.stringify([
                    {
                        price: '$7', 
                        product: 'Draft beer, well highballs & 5oz wite, red & rose wine',
                        type: 'drink'
                    },
                    {
                        price: '$12',
                        product: 'Appetizers. Our favorites:',
                        type: 'food'
                    },
                    {
                        price: '$16',
                        product: 'Calamari',
                        type: 'food'
                    },
                    {
                        price: '$18',
                        product: 'Tempura prawns',
                        type: 'food'
                    },
                    {
                        price: '$22', 
                        product: 'Smoked salmon flatbread',
                        type: 'food'
                    }                   
                    
                ])
            },
            {
                id: 5,
                place_id: 5,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '17:00',
                item: JSON.stringify([
                    {
                        price: '$6', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$2 off',
                        product: 'Classic cocktails and all wines by the glass(6oz)',
                        type: 'drink'
                    },
                    {
                        price: '$23', 
                        product: 'Cocktail pitchers',
                        type: 'drink'
                    }
                ])
            },
            {
                id: 6,
                place_id: 6,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$5', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$10', 
                        product: 'Margaritas',
                        type: 'drink'
                    },
                    {
                        price: '$10',
                        product: 'Small nachos/wings/two tacos combo/chips & dip platter',
                        type: 'food'
                    }
                ])
            },
            {
                id: 7,
                place_id: 7,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday',
                start_time: '14:00',
                end_time: '17:00',
                item: JSON.stringify([
                    {
                        price: '$7', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$8', 
                        product: '5oz prosecco, white & rose wine',
                        type: 'drink'
                    },
                    {
                        price: '$12', 
                        product: 'Gin basil, espresso martini',
                        type: 'drink'
                    },
                    {
                        price: '$13',
                        product: 'Caipirinha, sangria, margarita, aperol spritz',
                        type: 'drink'
                    }
                ])
            },
            {
                id: 8,
                place_id: 8,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$6', 
                        product: 'Draft beer, 5oz prosecco, red, white & rose wine',
                        type: 'drink'
                    },
                    {
                        price: '$9', 
                        product: 'Moscow mule',
                        type: 'drink'
                    },
                    {
                        price: '$10', 
                        product: 'Strawberry aperol spritz',
                        type: 'drink'
                    },
                    {
                        price: '$18', 
                        product: 'Dozen oysters',
                        type: 'food'
                    },
                    {
                        price: '$12',
                        product: 'Small plates. Our favorites:Parker sliders, Mushroom arancini',
                        type: 'food'
                    },
                ])
            },
            {
                id: 9,
                place_id: 9,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$5.50', 
                        product: 'Draft beers',
                        type: 'drink'
                    },
                    {
                        price: '$10',
                        product: 'Cocktails',
                        type: 'drinks'
                    },
                    {
                        price: '$3',
                        product: 'Steam pork bun',
                        type: 'food'
                    },
                    {
                        price: '$9',
                        product: 'Fries',
                        type: 'food'
                    },
                    {
                        price: '$15',
                        product: 'Burger',
                        type: 'food'
                    },
                    {
                        price: '$27',
                        product: 'Steak frites',
                        type: 'food'
                    }
                ])
            },
            {
                id: 10,
                place_id: 10,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '14:00',
                end_time: '17:00',
                item: JSON.stringify([
                    {
                        price: '$5', 
                        product: 'Draft and bottle beer',
                        type: 'drink'
                    },
                    {
                        price: '$8/$12',
                        product: '5oz/8oz red, whine & rose wine',
                        type: 'drink'
                    },
                    {
                        price: '$12',
                        product: 'Sangria',
                        type: 'drink'
                    },
                    {
                        price: '$14',
                        product: 'Cocktails on tap',
                        type: 'drink'
                    },                    
                    {
                        price: '$9',
                        product: 'Appetizers',
                        type: 'food'
                    },
                    {
                        price: '$19',
                        product: 'Mains. Our favorite:charred Iberico chorizo pizza',
                        type: 'food'
                    }
                ])
            },
            {
                id: 11,
                place_id: 11,
                day_of_week: 'Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '16:00',
                end_time: '17:30',
                item: JSON.stringify([
                    {
                        price: '$6.25', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$9', 
                        product: '5oz whine & red wine',
                        type: 'drink'
                    },
                    {
                        price: '$9.75', 
                        product: 'Margarita',
                        type: 'drink'
                    },
                    {
                        price: '$5.50',
                        product: 'Tacos',
                        type: 'food'
                    },
                    {
                        price: '$7.25',
                        product: 'Tostadas',
                        type: 'food'
                    }
                ])
            },
            {
                id: 12,
                place_id: 12,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '14:30',
                end_time: '17:30',
                item: JSON.stringify([
                    {
                        price: '$6', 
                        product: 'Draft beer, highballs, 50z wine',
                        type: 'drink'
                    },
                    {
                        price: '$9', 
                        product: 'Cocktails',
                        type: 'drink'
                    },
                    {
                        price: '$30', 
                        product: 'Bottle of red or white wine',
                        type: 'drink'
                    },
                    {
                        price: '$10',
                        product: 'Appetizers. Our favorite: crispy brussell sprouts',
                        type: 'food'
                    }
                ])
            },
            {
                id: 13,
                place_id: 13,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$5', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$10', 
                        product: 'Cocktails',
                        type: 'drink'
                    },
                    {
                        price: '$12', 
                        product: 'Pizzas. Our favorites: pesto shrimp and coppa & smoked gouda ',
                        type: 'food'
                    },
                    
                ])
            },
            {
                id: 14,
                place_id: 14,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$5.50', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$7.50', 
                        product: '6oz red & white wine',
                        type: 'drink'
                    },
                    {
                        price: '$7.50', 
                        product: 'Appetizers',
                        type: 'food'
                    },
                    
                ])
            },
            {
                id: 15,
                place_id: 15,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$6.50', 
                        product: 'Draft beer & highballs',
                        type: 'drink'
                    },
                    {
                        price: '$9', 
                        product: 'Cocktails',
                        type: 'drink'
                    },
                ])
            },
            {
                id: 16,
                place_id: 16,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '19:00',
                item: JSON.stringify([
                    {
                        price: '$5', 
                        product: 'House lager, Sol bottle & highballs',
                        type: 'drink'
                    },
                    {
                        price: '$7', 
                        product: 'Margarita',
                        type: 'drink'
                    },
                    {
                        price: '$7', 
                        product: 'Chips & guacamole',
                        type: 'food'
                    },
                    {
                        price: '$9.95', 
                        product: 'Coxinha',
                        type: 'food'
                    },
                    {
                        price: '$14.95', 
                        product: 'Burrito/enchilada ',
                        type: 'food'
                    },
                ])
            },
            {
                id: 17,
                place_id: 17,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$6', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$8', 
                        product: '5oz red & white house wine',
                        type: 'drink'
                    },
                    {
                        price: '$9', 
                        product: 'daily cocktail',
                        type: 'drink'
                    },
                    {
                        price: '$3', 
                        product: 'Oyster',
                        type: 'food'
                    },
                    {
                        price: '$12', 
                        product: 'Katsu sando sliders',
                        type: 'food'
                    },
                    {
                        price: '$14', 
                        product: 'Crispy chicken sandwich',
                        type: 'food'
                    },
                    {
                        price: '$16', 
                        product: 'Cumim and miso mussels',
                        type: 'food'
                    },
                    
                ])
            },
            {
                id: 18,
                place_id: 18,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
                start_time: '15:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$5', 
                        product: 'Draft beer & shots',
                        type: 'drink'
                    },
                    {
                        price: '$8', 
                        product: 'Sangria',
                        type: 'drink'
                    },
                    {
                        price: '$10', 
                        product: 'Frozen bellini, frozen lime strawberry margarita',
                        type: 'drink'
                    },
                    {
                        price: '$12', 
                        product: 'Chicken, fish & beef sliders/chicken, pork & veggie tacos',
                        type: 'food'
                    },
                    
                ])
            },
            {
                id: 19,
                place_id: 19,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '16:00',
                end_time: '18:00',
                item: JSON.stringify([
                    {
                        price: '$6.50', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$10', 
                        product: 'Cocktails',
                        type: 'drink'
                    },
                    {
                        price: '$3',
                        product: 'Steam pork bun',
                        type: 'food'
                    },
                    {
                        price: '$9',
                        product: 'Fries',
                        type: 'food'
                    },
                    {
                        price: '$15',
                        product: 'Burger',
                        type: 'food'
                    },
                    {
                        price: '$27',
                        product: 'Steak frites',
                        type: 'food'
                    }
                    
                ])
            },
            {
                id: 20,
                place_id: 20,
                day_of_week: 'Monday, Tuesday, Wednesday, Thursday, Friday',
                start_time: '14:00',
                end_time: '17:00',
                item: JSON.stringify([
                    {
                        price: '$7', 
                        product: 'Draft beer',
                        type: 'drink'
                    },
                    {
                        price: '$10', 
                        product: 'Sparkling, white & red house wines',
                        type: 'drink'
                    },
                    {
                        price: '$13', 
                        product: 'Spritz',
                        type: 'drink'
                    },
                    {
                        price: '$2.50', 
                        product: 'Oyster',
                        type: 'food'
                    },
                    {
                        price: '$5', 
                        product: 'Taco',
                        type: 'food'
                    },
                    {
                        price: '$16', 
                        product: 'Calamari',
                        type: 'food'
                    },
                    {
                        price: '$17', 
                        product: '1pc rockfish & chips',
                        type: 'food'
                    }
                    
                ])
            }
        ]);
    });
}
