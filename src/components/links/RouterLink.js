import React, { useCallback } from 'react'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import { useHistory} from 'react-router-dom';

export function RouterLink(props) {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(props.path), [history]);
    return (
        <>
            {   props.button ? 
                <Button {...props} onClick={handleOnClick}>{props.text}</Button> :
                <Link {...props} onClick={handleOnClick}>{props.text}</Link> 
            }
        </>
    )
}
