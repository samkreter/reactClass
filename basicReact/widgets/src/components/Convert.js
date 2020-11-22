import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Convert = ({text, language}) => {
    const [translatedText, setTranslatedText] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timerID)
        }

    }, [text, language])

    useEffect(() => {
        const doTranslate = async () => {
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    target: language.value,
                    q: debouncedText,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            })

            setTranslatedText(data.data.translations[0].translatedText)
        }

        doTranslate()

    }, [debouncedText])

    return (
        <div>
            <h1 className="ui header">{translatedText}</h1>
        </div>
    );
};


export default Convert;