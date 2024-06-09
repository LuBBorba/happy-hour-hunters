import './Cards.scss';

export default function Cards({ deals, formatTime }) {
    return (
        <div className='card-container'>
            {deals.map((deal) => (
                <div key={deal.place_id} className="card">
                    <h2 className='card__place'>{deal.place_name}</h2>
                    <h3 className='card__title'>Address:</h3>
                    <p className='card__details'> {deal.address}</p>
                    <h3 className='card__title'>Contact:</h3>
                    <p className='card__details'>Phone: {deal.contact_info}</p>
                    <p className='card__details'>Website: <a href={deal.website} target='_blank' rel='noreferrer noopener'>{deal.website}</a></p>
                    <h3 className='card__title'>Days:</h3>
                    <p className='card__details'>{deal.day_of_week}</p>
                    <h3 className='card__title'>Time: </h3>
                    <p className='card__details'>{formatTime(deal.start_time)} - {formatTime(deal.end_time)}</p>
                    <div>
                        {deal.item.some(item => item.type === 'food') && (
                            <>
                                <h3 className='card__title'>Food</h3>
                                <ul>
                                    {deal.item.filter(item => item.type === 'food').map((item, index) => (
                                        <li key={index} className='card__details'>{item.price} - {item.product}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {deal.item.some(item => item.type === 'drink') && (
                            <>
                                <h3 className='card__title'>Drinks</h3>
                                <ul>
                                    {deal.item.filter(item => item.type === 'drink').map((item, index) => (
                                        <li key={index} className='card__details'>{item.price} - {item.product}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
