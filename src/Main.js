import LinkExpandBox from "./Components/LinkExpandBox";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
    const dispatch = useDispatch()
    const {
        hasImg,
        message
    } = useSelector((state) => state.myReducer)


    const getPhoto = () => {
        dispatch({ type: 'GET_DOG_PHOTO' })
    }
    return (
        <main>
            <h2>En del UU kan løses ved å bruke riktige HTML-elementer</h2>
            <p>Her følger noen regler og eksempler</p>
            <div className="grid-display">
                <LinkExpandBox title={'Knapp eller lenke'} id="buttonvsanchor">
                    <h3>Hva skal du velge?</h3>
                    <p>
                        Om noe skal "skje" på nåværende side bør du bruke en button.
                        Skal du navigere til en annen side bør du bruke anchor (a).
                        Du bør aldri bruke et ikke-klikkbart element og legge en onClick på det.
                    </p>
                    <p><i>NB! Det finnes en input type button også. Denne brukes types i submit-forms.</i></p>
                </LinkExpandBox>
                <LinkExpandBox title={'Felt-typer'} id="inputtypes">
                    <h3>Hvilke inputtyper finnes egentlig?</h3>
                    <p>
                        Det finnes en rekke og en horde med inputtyper. Mange er bra,
                        noen er bedre til enkelte ting enn de er til annet, og en del har lite støtte.
                        At noen ikke støttes av enkelte nettlesere kan også være en indikasjon på at de ikke støttes
                        av enkelte skjermlesere. Dato-felt (input type date) støttes feks ikke av Safari, som anbefales
                        til kombinasjon med VoiceOver (mac).
                    </p>

                    <fieldset>
                        <legend>Name</legend>
                        <div className="label-wrap">
                            <label htmlFor="fname">First name:</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <label className="label-wrap">
                            <span>Last Name</span>
                            <input type="text" name="lname" />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Contact info</legend>
                        <label className="label-wrap">
                            <span>Phone</span>
                            <input type="tel" name="phone" />
                        </label>
                        <label className="label-wrap">
                            <span>Email</span>
                            <input type="email" name="email" />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Random</legend>
                        <label className="label-wrap">
                            <span>Age</span>
                            <input type="number" defaultValue={10} min={10} max={99} name="age" />
                        </label>
                        <label className="label-wrap">
                            <span>Adult?</span>
                            <input type="checkbox" name="isadult" />
                        </label>
                    </fieldset>
                </LinkExpandBox>

                <LinkExpandBox title={'div eller ikke?'} id="divorno">
                    <h3>Vi er glade i div-er...</h3>
                    <p>
                        Men bør vi bruke dem så mye som vi gjør?
                        Svaret er ofte nei - div'er overbrukes veldig mye i frontend prosjekter.
                        Likevel er det ikke sånn at alt bør ha et meningsfylt html-element heller.
                        Regelen er vel slik: Behøver man kun et html-element for å legge på riktig css så
                        kan man bruke div eller span. Hvis seksjonen man pakker inn er meningsfull i seg selv
                        bør man vurdere å finne noe mer passende.
                    </p>
                    <code>
                        {'<div><h2>Recipe for Hummus!</h2></div>'}
                        <br /><br />
                        {'//... could prooobably be:'}
                        <br />
                        {'<article><h2>Recipe for Hummus!</h2></article>'}
                    </code>
                </LinkExpandBox>

                <LinkExpandBox title={'Overskrift nivå'} id="headinglevel">
                    <h3>Hvilken heading bør vi velge hvor?</h3>
                    <p>
                       Det er lett å la seg friste til å velge heading basert på hvordan den ser ut i størrelse.
                       Dette er en klassisk felle som veldig mange nettsider sliter med over tid.
                       En god nettside bør ha et Overskrifts-hiarki, hvor man feks har èn h1 overskrift,
                        etterfulgt av h2 overskrifter, h3 etc.

                        <br/><br/>

                        Har du en h3 så SKAL det være en h1 og en h2 før den i koden.
                    </p>
                    <br/><br/>
                    <p><i>Se for deg at du skal lage en innhodlsfortegnelse med indentering på riktige steder for hva som
                        hører sammen.</i></p>
                </LinkExpandBox>

                <article className="dog-section">
                    <button className="dog-photo-btn" onClick={getPhoto}>Get{hasImg && message ? ' another' : ''} dog photo!</button>
                    { (hasImg && message) && <img className='dog-img' src={message} />}
                </article>
            </div>
        </main>
    );
}

export default Main;
