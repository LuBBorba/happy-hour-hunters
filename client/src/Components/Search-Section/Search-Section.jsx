import './Search-Section.scss';


export default function Search() {

    return (
        <section className="search" >
            <h1 className="search__header">You`re in for a treat! Find out the best deals for the happiest time of the day</h1>
            <form className="form" id="form" >
                <div className='form__box'>
                    <label className="form__label" htmlFor="daySelect">Select a Day</label>
                </div>
                <div className='form_container'></div>
                <select id="daySelect" className='form_input'>
                <option className="form__option" value="monday">Monday</option>
                <option className="form__option" value="tuesday">Tuesday</option>
                <option className="form__option" value="wednesday">Wednesday</option>
                <option className="form__option" value="thursday">Thursday</option>
                <option className="form__option" value="friday">Friday</option>
                <option className="form__option" value="saturday">Saturday</option>
                <option className="form__option" value="sunday">Sunday</option>
                </select>
                <button className="form__button" type="button" >Search</button>
            </form>          

        </section>
    )
}