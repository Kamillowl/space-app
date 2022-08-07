import './MainMe.scss'

const MainMe = () => {
    const gradYear = 2015;
    const nowYear = new Date().getFullYear();

    return (
        <main className="mainMe">
            <h2>About me</h2>
            <h3>Persona</h3>
            <dl className="grid-display">
                <div className="colspan-3 txt-large">
                    <dt>Name</dt>
                    <dd>Kamilla Posti Svendsen</dd>
                </div>
                <div>
                    <dt>Age</dt>
                    <dd>32</dd>
                </div>

                <div>
                    <dt>Degree</dt>
                    <dd>Bachelor i nye medier</dd>
                </div>
                <div>
                    <dt>Years of work experience</dt>
                    <dd>{nowYear - gradYear}</dd>
                </div>
            </dl>
            <h3>Have coded in:</h3>
            <div className="grid-display">
                <p className="is-framework">React</p>
                <p className="is-framework">Vue</p>
                <p className="is-framework">Angular</p>
                <p className="is-framework">Knockout</p>
                <p className="is-framework">Backbone</p>
                <p className="is-framework">jQuery</p>

                <p>Ruby</p>
                <p>Python</p>
                <p>C#</p>
                <p>Java</p>
                <p>SQL</p>
                <p>VBA</p>
            </div>
        </main>
    );
}

export default MainMe;
