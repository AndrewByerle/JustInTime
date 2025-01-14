import { useState, useRef, useEffect } from 'react';
import { updateData, deleteData } from '../firebase/FirebaseAPI';
import PanelColor from '../Utilities/PanelColor';
import CategorySelect from '../components/Insert/CategorySelect';
import Linkify from 'react-linkify';

const parseDateTime = (datetime) => {
    const date = new Date(
        typeof datetime == 'string' ? datetime.replace(/-/g, '/') : datetime
    );

    const month = date.toLocaleDateString('en-us', {
        month: 'long',
    });

    const dayNum = date.getDate();

    const time = date
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

    return `${month} ${dayNum}${
        new Date().getFullYear() !== date.getFullYear()
            ? ', ' + date.getFullYear()
            : ''
    } at ${time}`;
};

export default function Atom(props) {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [category, setCategory] = useState(props.val[1].category);
    const [content, setContent] = useState(props.val[1].content);
    const textEl = useRef(null);

    useEffect(() => {
        if (textEl.current) {
            textEl.current.focus();

            //move cursor
            textEl.current.selectionStart = textEl.current.value.length;
            textEl.current.selectionEnd = textEl.current.value.length;
        }
    }, [toggleEdit]);

    const update = () => {
        const key = props.val[0];
        let date =
            new Date().toLocaleDateString() +
            ' ' +
            new Date().toLocaleTimeString();
        updateData(content, key, date, category);
        setToggleEdit(!toggleEdit);
    };

    const deletePost = () => {
        const key = props.val[0];
        deleteData(key);
        setToggleEdit(false);
    };

    return (
        <div className="content-page">
            <div
                className="content-panel"
                style={{
                    backgroundColor: PanelColor(props.val[1].category),
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                {props.val[1] === undefined
                    ? ''
                    : ' ' + parseDateTime(props.val[1].time)}
            </div>
            <div className="atom-main">
                <h2 className="atom-category">
                    {props.val[1] === undefined ? '' : props.val[1].title}
                </h2>
                <p>
                    <b>Author:</b>{' '}
                    {props.val[1] === undefined ? '' : props.val[1].author}
                </p>
                <div className="content" key={props.index + ''}>
                    {!toggleEdit ? (
                        <Linkify
                            componentDecorator={(
                                decoratedHref,
                                decoratedText,
                                key
                            ) => (
                                <a
                                    target="blank"
                                    href={decoratedHref}
                                    key={key}
                                >
                                    {decoratedText}
                                </a>
                            )}
                        >
                            <div className="content-actual">
                                {content || ''}{' '}
                            </div>
                        </Linkify>
                    ) : (
                        <div className="content-edit">
                            <textarea
                                id="content-txt"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <CategorySelect
                                callback={(e) => setCategory(e.target.value)}
                                class={'-edit'}
                                selectvalue={category}
                            />
                            <button onClick={update}> Save </button>
                        </div>
                    )}
                    <br></br>
                </div>
                <div className="atom-action">
                    <button
                        type="button"
                        onClick={() => setToggleEdit(!toggleEdit)}
                    >
                        {' '}
                        {!toggleEdit ? 'Edit' : 'Cancel'}{' '}
                    </button>
                    <button type="button" onClick={deletePost}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
