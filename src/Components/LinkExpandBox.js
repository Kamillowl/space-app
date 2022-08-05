import { useState } from 'react';
import './LinkExpandBox.scss';

const LinkExpandBox = (props) => {
    const {title, id} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [expandView, setExpandView] = useState(false);

    return (
        <article className={`LinkExpandBox ${expandView ? 'expanded-view' : 'small-view'}`}>
            <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={`area-${id}`}>{title}</button>
            {isOpen &&
            <div id={`area-${id}`} className="expandable-area">
                {props.children}
                <button className="btn-expandview" onClick={() => setExpandView(!expandView)}>{ expandView ? 'Minimer' : 'Utvid Vindu'}</button>
            </div>
            }
        </article>
    );
}

export default LinkExpandBox;
